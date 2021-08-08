const router = require('express').Router();
const {
    filterByQuery,
    findById,
    createNewnote,
    validateNote,
} = require('../lib/note.js');
const { notes } = require('../db/note');

router.get('/notes', (req, res) => {
    let results = notes;
    if(req.query){
        results = filterByQuery(req.query, results);
    }
    res.json(results)
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, note);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  router.post('/notes', (req, res) => {
    const body = notes.length.toString();
    console.log(body);
    req.body.id = body;
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly created.');
    } else {
      const note = createNewNotes(req.body, notes);
      res.json(note);
    }
  });
  

  module.exports = router;
