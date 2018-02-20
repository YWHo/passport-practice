
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('user')
        .then(status => {
            if (status == false) {
                createTable('user', table => {
                    table.increments('id').primary
                    table.string('name')
                    table.string('email')
                    table.string('twitter_id')
                    table.string('facebook_id')
                    table.string('hashed_password')
                }) 
            }
        })
        .catch( err => {
            console.log('Fail to create user table: ', err)
        })
            
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user')
};
