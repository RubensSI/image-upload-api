const routes  = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

// multer e um midware e simgle carreaga uma imagem por vez passando
// o nome do campo que vai conter o arquivo
routes.post("/posts", multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file)

  return res.json({ massage: "Upload image" });
});

module.exports = routes;