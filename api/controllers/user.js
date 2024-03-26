import { db } from "../db.js";

export const getUsers = (_, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  })
}

export const addUser = (req, res) => {
  const sql = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento
  ]

  db.query(sql,[values], (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json("Usuario criado com sucesso!");
  })
}

export const updateUser = (req, res) => {
  const sql = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento
  ]
  db.query(sql, [...values, req.params.id], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Usuario atualizado com sucesso.");
  })
}

export const deleteUser = (req, res) => {
  const sql = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(sql, [req.params.id], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Usuario deletado com sucesso.");
  })
}