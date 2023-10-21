use('Company');

db.craftshopem.aggregate([
    {$group: 
        {_id :{ department : "$department", city : "$city"},
            total: {$sum : "$salary"},
            min : {$min : "$salary"},
            max : {$max : "$salary"},
            avg : {$avg : "$salary"}
        }
    }
])