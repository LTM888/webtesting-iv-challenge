

module.exports = {
  create,
  delete
};

function create(heroes) {
  return db('heroes')
    .insert(heroes, 'id')
    .then(ids => {
      return db('heroes')
        .where({ id: ids[0] })
        .first();
    });
}


function delete(id) {
  return null;
}
