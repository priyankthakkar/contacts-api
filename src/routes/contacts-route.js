const {
  Router
} = require('express');
const contacts = require('../../data/contacts.json');
const router = Router();

router.get('/contacts', (req, res) => {
  res.json(contacts);
});

router.get('/contacts/:id', (req, res) => {

  const {
    id
  } = req.params;

  const result = contacts.find(contact => id && contact.id && contact.id === parseInt(id));

  if (result) {
    res.json(result);
  } else {
    res.json({
      message: `No contacts found.`
    });
  }
});

module.exports = router;