'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('histories', {
            // patientId: DataTypes.INTEGER,
            // doctorId: DataTypes.INTEGER,
            // description: DataTypes.TEXT
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patientId: {
                type: Sequelize.INTEGER
            },
            doctorId: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('histories');
    }
};
// currentNumber: {
//     type: Sequelize.INTEGER
// },
// maxNumber: {
//     type: Sequelize.INTEGER
// },
// date: {
//     type: Sequelize.DATE
// },
// timeType: {
//     type: Sequelize.STRING
// },
// doctorId: {
//     type: Sequelize.INTERGER
// },