'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          allowNull:false
        },
        first_name: {
          type:Sequelize.STRING,
          allowNull:false
        },
        last_name:{
          type:Sequelize.STRING,
          allowNull:false
        },is_active:{
          type:Sequelize.BOOLEAN,
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
        });
    })
  
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('users');
  }
};
