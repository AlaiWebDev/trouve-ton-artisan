const { Artisan } = require("../models/indexModel");

// Récupérer tous les artisans
exports.getAllArtisans = async () => {
    return await Artisan.findAll();
};

// Récupérer un artisan par son ID
exports.getArtisanById = async (id) => {
    return await Artisan.findByPk(id);
};

// Créer un artisan
exports.createArtisan = async (data) => {
    return await Artisan.create(data);
};

// Mettre à jour un artisan (PUT)
exports.updateArtisan = async (id, data) => {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;

    return await artisan.update(data); // Sequelize gère tout
};

// Modifier partiellement un artisan (PATCH)
exports.patchArtisan = async (id, data) => {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;

    return await artisan.update(data);
};

// Supprimer un artisan
exports.deleteArtisan = async (id) => {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return false;

    await artisan.destroy();
    return true;
};
