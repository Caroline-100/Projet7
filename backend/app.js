const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use('/', postRoute);

module.exports = app;

// // multer
// app.post('/images', multer, (req, res) => {
//   if (req.body) {
//     console.log(`image${req.body}`);
//   } else {
//     console.error('noimage');
//   }
//   // ??????
//   // const imageObject = JSON.parse(req.body.data);
//   // console.log(imageObject);
//   // Post.create({
//   //   text: req.body.text,
//   //   PersonId: req.context.userId,
//   //   data: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`,
//   // }).then((imagecreated) => {
//   //   console.log(imagecreated);
//   //   console.log({ imagecreated: imagecreated.toJSON() });
//   //   res.send(imagecreated);
//   // }).catch((error) => {
//   //   console.error(error);
//   //   res.sendStatus(400);
//   // });
// });

// app.put("/users/:id", async (req, res, next) => {
//   const updatedUser = await db.Person.update(
//     { email: req.body.email },
//     { where: { id: req.params.id } }
//   ).catch((error) => {
//     console.error(error);
//     res.send(500);
//   });
//   console.log({ updatedUser });
//   res.send(updatedUser);
// });

// // .update({ email: req.body.email }, { where: { id: req.body.id } })
