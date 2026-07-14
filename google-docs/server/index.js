const mongoose = require("mongoose");
const Document = require("./models/document");

mongoose.connect("mongodb://localhost:27017/google-docs-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const defaultValue = "";

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await saveDocument(documentId, data);
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;

  let document = await Document.findById(id);

  if (!document) {
    document = await Document.create({ _id: id, data: defaultValue });
  }

  return document;
}

async function saveDocument(id, data) {
  await Document.findByIdAndUpdate(id, { data });
}
