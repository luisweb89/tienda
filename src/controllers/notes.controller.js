const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = (req, res) => res.json({message: 'POST Request'});

notesCtrl.getNote = (req, res) => res.json({titulo: 'Titulo 1'}); 

notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'});

module.exports = notesCtrl;