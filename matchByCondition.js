use("Company");

db.craftshopem.aggregate([
    {$match: { salary : { $gte : 10000}}},
    ])