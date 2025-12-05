const { Speciality } = require("../models/indexModel");

// Récupérer toutes les spécialités
exports.getAllSpecialities = async () => {
    return await Speciality.findAll();
};

// Récupérer une spécialité par son ID
exports.getSpecialityById = async (id) => {
    return await Speciality.findByPk(id);
};

// Créer une spécialité
exports.createSpeciality = async (data) => {
    return await Speciality.create(data);
};

// Mettre à jour une spécialité (PUT)
exports.updateSpeciality = async (id, data) => {
    const speciality = await Speciality.findByPk(id);
    if (!speciality) return null;

    return await speciality.update(data); // Sequelize gère tout
};

// Modifier partiellement une spécialité (PATCH)
exports.patchSpeciality = async (id, data) => {
    const speciality = await Speciality.findByPk(id);
    if (!speciality) return null;

    return await speciality.update(data);
};

// Supprimer une spécialité
exports.deleteSpeciality = async (id) => {
    const speciality = await Speciality.findByPk(id);
    if (!speciality) return false;

    await speciality.destroy();
    return true;
};
