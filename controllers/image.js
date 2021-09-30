const Clarifai = require('clarifai');




const app = new Clarifai.App({
 apiKey: '63ce68f2d93f4c7c810b5a6f247831f2' 
});
// c0c0ac362b03416da06ab3fa36fb58e3
const handleApiCall = (req, res) => {
  app.models.predict(fa7886790a41858e33c261eb5f499e, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}