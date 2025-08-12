import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios")
        .then((response) => setUsuarios(response.data))
        .catch((error) => console.error(error));
}

export async function buscarUsuarioPeloId(
  id,
  setNome,
  setCpf,
  setEmail,
  setSenha,
  setDataNascimento,
  setStatus
) {
  await api
    .get(`/usuarios/${id}`)
    .then((response) => {
      setNome(response.data.nome);
      setCpf(response.data.cpf);
      setEmail(response.data.email);
      setSenha(response.data.senha);
      setDataNascimento(response.data.dataNascimento);
      setStatus(response.data.status);
    })
    .catch((error) => console.error(error));
}

export async function cadastrarUsuario(usuario, navigate) {
  await api
    .post("/usuarios", usuario)
    .then(() => navigate("/usuarios"))
    .catch((error) => console.error(error));
}

export async function atualizarUsuario(id, usuario, navigate) {
  await api
    .put(`/usuarios/${id}`, usuario)
    .then(() => navigate("/usuarios"))
    .catch((error) => console.error(error));
}

export async function deletarUsuario(id) {
  await api
    .delete(`/usuarios/${id}`)
    .then(() => {})
    .catch((error) => console.error(error));
}
