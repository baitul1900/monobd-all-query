db.craftshopem.aggregate([{ $group: { _id: "$city" , total: {$sum : "$salary"}}}]);