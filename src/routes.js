const {
  storeNoteHandler,
  getAllNotesHandler,
  showNoteHandler,
  updateNoteHandler,
  deleteNoteHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: storeNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: showNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
