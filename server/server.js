const mongoose = require("mongoose")
const Document = require("./Document")
const cors = require("cors");
const path =require("path");
const dotenv=require("dotenv");
const express = require("express");

dotenv.config();
mongoose.connect("mongodb+srv://manish:12345@cluster0.rlzjbxz.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
}).then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error => ", err));

const app=express();
app.use(express.json());

// deployment
const __dirname1=path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"))
  );
} else {
  
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

//



const server = app.listen(
  3001,
  console.log(`Server running on PORT ${3001}...`)
);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}

