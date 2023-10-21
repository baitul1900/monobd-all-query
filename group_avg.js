db.employee.aggregate([
    {$group: {_id : "$department", avg: {$avg : "$salary"}}}
])