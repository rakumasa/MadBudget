var knex = require('./db/knex')

module.exports = {
  getAll,
  getOne,
  addOne,
  changeOne,
  deleteOne,
  // getSum
};

function getAll(req,res){
  knex.select()
    .from('spendings')
    .then( spendings => res.send(spendings) );
}


function getOne(req,res) {
  knex.select()
    .from('spendings')
    .where('id',req.params.id)
    .then(spending => res.send(spending))
}

function addOne(req,res) {
  knex('spendings').insert({
    date: req.body.date,
    item: req.body.item,
    amount: req.body.amount,
    category: req.body.category,
    memo: req.body.memo
  })
  .then(() => {
    knex.select()
      .from('spendings')
      .then( spendings => res.send(spendings) );
  })
}

function changeOne(req,res) {
  console.log(req.body)
  //check all req.body how do we get
  // console.log(req.body);
  //replace all " \ " in item to " ' "()
  var editedItem = req.body[0].item.replace('\'', "'")
  knex('spendings').update({
                    date: req.body.date,
                    item: editedItem,
                    amount: req.body.amount,
                    category: req.body.category,
                    memo: req.body.memo,
                  })
                  .where('id',req.params.id)
                  .then( () => {
                    knex.select()
                      .from('spendings')
                      .then( spendings => res.send(spendings) );
                  })
}

function deleteOne(req,res) {
  knex('spendings').where('id',req.params.id)
                  .del()
                  .then( () => {
                    knex.select()
                      .from('spendings')
                      .then( spendings => res.send(spendings) );
                  })
}


// function getSum(req,res) {
//   knex('spendings')
//   .sum('amount')
//     .then( spendings => res.send(spendings) );
// }
