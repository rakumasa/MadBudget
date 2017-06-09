
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spendings').del()
    .then(function () {
      // Inserts seed entries
      return knex('spendings').insert([
        {date:'2015-03-15' ,month: "Jan",item:"Albertson", amount:30.67, category: "Grocery", memo:"wanted banana"},
        {date:'2015-01-21', month: "Jan",item:"iPhone", amount:649.99, category: "Electronic", memo:"I don't remember when I bought this.  I was so drunk last night...."},
        {date:'2015-02-06', month: "Feb",item:"Safeway", amount:55.34, category: "Grocery", memo:"Ice cream was on sale"},
        {date:'2015-2-15', month: "Feb",item:"Apple bees", amount:72.99, category: "Restaurant", memo:"Wasn't good"},
        {date:'2015-03-26', month: "Mar",item:"Fry's food", amount:83.34, category: "Grocery", memo:"Save $10 yeah!"},
        {date:'2015-03-15', month: "Mar",item:"Office depot", amount:72.99, category: "Office", memo:"Expensive!!"},
      ]);
    });
};
