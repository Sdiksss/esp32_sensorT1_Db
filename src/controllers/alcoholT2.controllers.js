const catchError = require('../utils/catchError');
const Alcohol = require('../models/Alcohol');

const getAll = catchError(async(req, res) => {
    const results = await Alcohol.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { NivelAlcohol, device_id } = req.body;

    // Lógica para determinar el estado del botón según el nivel
    const LIMITE_ALCOHOL = 0.5; // ← cambia este valor si tu sensor usa otro umbral
    const boton_id = NivelAlcohol >= LIMITE_ALCOHOL ? 'on' : 'off';

    const result = await Alcohol.create({
        NivelAlcohol,
        device_id,
        boton_id
    });

    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Alcohol.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Alcohol.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { NivelAlcohol, device_id } = req.body;

    // Recalcular botón solo si NivelAlcohol está presente
    let boton_id = undefined;
    if (NivelAlcohol !== undefined) {
        const LIMITE_ALCOHOL = 0.5;
        boton_id = NivelAlcohol >= LIMITE_ALCOHOL ? 'on' : 'off';
    }

    const updateData = {
        ...(NivelAlcohol !== undefined && { NivelAlcohol }),
        ...(device_id !== undefined && { device_id }),
        ...(boton_id !== undefined && { boton_id })
    };

    const result = await Alcohol.update(
        updateData,
        { where: { id }, returning: true }
    );

    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
