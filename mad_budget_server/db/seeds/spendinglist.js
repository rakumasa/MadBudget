
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spendings').del()
    .then(function () {
      // Inserts seed entries
      return knex('spendings').insert([
        {date: "1/1/15",month: "Jan", item:"P.G.E.", amount:62.93, category: "Utility"},
        {date: "2/1/15",month: "Feb",item:"Maginanos", amount:100.23, category: "Restaurant"},
        {date: "3/1/15",month: "Mar",item:"Fry's food", amount:30.67, category: "Grocery"},{date: "4/1/15",month: "Apr", item:"Maginanos food", amount:70.67, category: "Restaurant"},{date: "7/1/15",month: "Jul", item:"Safeway", amount:30.67, category: "Grocery"},
        {date: "9/1/15",month: "Sep",item:"Albertson", amount:10.67, category: "Grocery"},{date: "4/1/15",month: "Jan", item:"Comcast", amount:62.93, category: "Utility"},
        {date: "5/1/15",month: "Feb",item:"Mcdonalds", amount:100.23, category: "Restaurant"},
        {date: "12/1/15",month: "Mar",item:"Sprout", amount:30.67, category: "Grocery"},{date: "7/1/15",month: "Apr", item:"Asian store", amount:58.67, category: "Restaurant"},{date: "7/1/15",month: "Jul", item:"Avon", amount:15.67, category: "Grocery"},
        {date: "9/1/15",month: "Sep",item:"Albert store", amount:30.67, category: "Grocery"}
      ]);
    });
};
