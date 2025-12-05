const specialityService = require("../services/specialityService");

exports.getAllSpecialities = async (req, res) => {
    const specialities = await specialityService.getAllSpecialities();
    try {
        res.json(specialities);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.getSpecialityById = async (req, res) => {
    const speciality = await specialityService.getSpecialityById(req.params.id);
    try {
        if (!speciality)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(speciality);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.createSpeciality = async (req, res) => {
    try {
        const speciality = await specialityService.createSpeciality(req.body);
        res.status(201).json(speciality).send('Spécialité créée avec succès');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateSpeciality = async (req, res) => {
    const speciality = await specialityService.patchSpeciality(req.params.id, req.body);
    try {
        if (!speciality)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(speciality).send('Spécialité modifiée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

// Afficher le formulaire pré-rempli
// exports.renderEditForm = async (req, res) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     if (!user) {
//       return res.status(404).send('Utilisateur non trouvé');
//     }
//     res.render('editUser', { user });
//   } catch (err) {
//     res.status(500).send('Erreur serveur');
//   }
// };

exports.patchSpeciality = async (req, res) => {
    const speciality = await specialityService.patchSpeciality(req.params.id, req.body);
    try {
        if (!speciality)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(speciality).send('Spécialité modifiée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.deleteSpeciality = async (req, res) => {
    console.log("ID reçu :", req.params.id);
    const speciality = await specialityService.deleteSpeciality(req.params.id);
    try {
        if (!speciality)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.status(204).send('Spécialité supprimée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    
};