db.employee.aggregate([
    // {$group: {_id : "$department", max: {$max : "$salary"}}}
    // {$group: {_id : "$department", min: {$min : "$salary"}}}
])