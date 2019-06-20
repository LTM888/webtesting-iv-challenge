const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
 

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());


server.get('api/heroes', async(req, res) => {
});




const port = process.env.PORT || 5500;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);


// create hero
// server.post('/api/heroes', async (req, res) => {
//   try {
//     const [id] = await db('heroes').insert(req.body);

//     const heroes = await db('heroes')
//       .where({ id })
//       .first();

//     res.status(201).json(heroes);
//   } catch (error) {
//     const message = errors[error.errno] || 'We ran into an error';
//     res.status(500).json({ message, error });
//   }
// });


// // remove hero 
// server.delete('/api/hero/:id', async (req, res) => {
//   try {
//     const count = await db('heroes')
//       .where({ id: req.params.id })
//       .del();

//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: 'Records not found' });
//     }
//   } catch (error) {}
// });