const {UsuarioModel} = require('../../models/usuario_models');

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResult = await UsuarioModel.findAll();

  const usuarioArray = [];

  usuarioModelResult.forEach((usuario) =>
    usuarioArray.push(usuario.dataValues),
  );

  return usuarioArray;
};

const getById = async (codigo) => {
  const usuarioModelResult = await UsuarioModel.findByPk(codigo);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  const usuarioModelResult = await UsuarioModel.create(data);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  const usuarioModelCount = await UsuarioModel.update(data, {
    where: {
      id_usu: data.id_usu,
    },
  });

  if (usuarioModelCount > 0) {
    const usuarioModelResult = await UsuarioModel.findByPk(data.id_usu);
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (codigo) => {
  const usuarioModelCount = await UsuarioModel.destroy({
    where: {
      id_usu: codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {list, getById, create, update, remove};