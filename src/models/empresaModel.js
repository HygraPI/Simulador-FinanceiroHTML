var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idEmpresa, nomeEmpresa, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nomeEmpresa, cnpj, cidade, estado, emailEmpresa) {
  var codigo = Math.random().toString(36).substring(2, 7).toUpperCase();
  var instrucaoSql = `INSERT INTO empresa (nomeEmpresa,cnpj, cidade, estado, emailEmpresa, codigo_ativacao) VALUES ('${nomeEmpresa}', '${cnpj}', '${cidade}', '${estado}', '${emailEmpresa}', '${codigo}');`

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
