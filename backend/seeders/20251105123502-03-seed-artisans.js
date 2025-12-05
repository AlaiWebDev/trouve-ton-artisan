'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artisans', [
      { name: 'Boucherie Dumont',
        speciality: 'Boucher',
        city: 'Lyon',
        grade: 4.7,
        email: 'dumont-boucherie@gmail.com',
        categoryId: 1, // ⚠️ clé étrangère vers la table Categories,
        createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artisans', null, {});
  }
};
