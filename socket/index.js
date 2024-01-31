import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUsers = [];

// add new user ---------------
const addNewUser = (userName, socketId) =>{
  !onlineUsers.some((user) => user.userName === userName) && onlineUsers.push({userName, socketId});
}
// remove user --------------
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !==socketId) ;
}
// get user ---------------
const getUser =(userName) => {
  return onlineUsers.find((user) => user.userName ===userName) ;
}

io.on("connection", (socket) => {

socket.on("newUser" , (userName) => {
  addNewUser(userName, socket.id) ;
})

socket.on("sendNotification" ,({senderName, receiverName, type}) => {
  const receiver = getUser(receiverName)
  io.to(receiver.socketId).emit("getNotification", {
    senderName, type,
  })
})

  socket.on("disconnect", () => {
    removeUser(socket.id) ;
  });
});

io.listen(5000);
