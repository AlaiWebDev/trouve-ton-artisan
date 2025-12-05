const { Category } = require("../models/indexModel");

// Récupérer toutes les catégories
exports.getAllCategories = async () => {
    return await Category.findAll();
};

// Récupérer une catégorie par son ID
exports.getCategoryById = async (id) => {
    return await Category.findByPk(id);
};

// Créer une catégorie
exports.createCategory = async (data) => {
    return await Category.create(data);
};

// Mettre à jour une catégorie (PUT)
exports.updateCategory = async (id, data) => {
    const category = await Category.findByPk(id);
    if (!category) return null;

    return await category.update(data); // Sequelize gère tout
};

// Modifier partiellement une catégorie (PATCH)
exports.patchCategory = async (id, data) => {
    const category = await Category.findByPk(id);
    if (!category) return null;

    return await category.update(data);
};

// Supprimer une catégorie
exports.deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) return false;

    await category.destroy();
    return true;
};
