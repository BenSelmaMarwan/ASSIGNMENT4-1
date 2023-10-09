const express = require('express');
const app = express();
const port = process.env.PORT || 3100; // Use the environment variable or port 3500


//const knex = require('./db/knexfile.js'); 
// Import the knexfile and knex instance
const knexfile = require('./DB/Knexfile');
const knex = require('knex')(knexfile.development);

// Attach the knex instance to the app
app.locals.knex = knex;
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static('public'));



// Create a new member
app.post('/members', async (req, res) => {
    try {
      const { first_name, last_name, email, join_date } = req.body;
      const newMember = await knex('members').insert({
        first_name,
        last_name,
        email,
        join_date,
      }).returning('*');
      res.json(newMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create a new member record.' });
    }
  });
  
  // Retrieve all members
  app.get('/members', async (req, res) => {
    try {
      const members = await knex('members').select('*');
      res.json(members);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve members.' });
    }
  });
  
  // Update a member's information
  app.put('/members/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, email, join_date } = req.body;
      const updatedMember = await knex('members')
        .where('id', id)
        .update({
          first_name,
          last_name,
          email,
          join_date,
        })
        .returning('*');
      if (updatedMember.length > 0) {
        res.json(updatedMember[0]);
      } else {
        res.status(404).json({ error: 'Member not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update the member.' });
    }
  });
  
  // Delete a member
  app.delete('/members/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMember = await knex('members')
        .where('id', id)
        .del()
        .returning('*');
      if (deletedMember.length > 0) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Member not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the member.' });
    }
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


