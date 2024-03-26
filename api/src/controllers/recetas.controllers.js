import Receta from "../database/models/receta.js";

export const getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postReceta = async (req, res) => {
  const receta = new Receta({
    titulo: req.body.titulo,
    imagen: req.body.imagen,
    descripcion: req.body.descripcion,
  });

  try {
    const newReceta = await receta.save();
    res.status(201).json(newReceta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReceta = async (req, res) => {
  try {
    await Receta.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putReceta = async (req, res) => {
  try {
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getRecetaById = async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};