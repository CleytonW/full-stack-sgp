import { useEffect, useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";
import { atualizarUsuario, buscarUsuarioPeloId, cadastrarUsuario } from "../../../servicos/usuarios";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


function FormularioUsuario() {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      buscarUsuarioPeloId(id, setNome, setCpf, setEmail, setSenha, setDataNascimento, setStatus);
    }
  }, [id]);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [status, setStatus] = useState("");



  const enviarFormulario = async (e) => {
    e.preventDefault();
    const usuario = {
      nome,
      cpf,
      email,
      senha,
      dataNascimento: format(dataNascimento, "dd/MM/yyyy", { locale: ptBR }),
      status
    }

    if (id) {
      await atualizarUsuario(id, usuario, navigate);
    } else {
      await cadastrarUsuario(usuario, navigate);
    }
  }

  const navigate = useNavigate();

  const cancelarFormulario = () => {
    navigate("/usuarios");
  }

  return (
    <>
      <Cabecalho />
      <section className="container mt-3" id="novo-usuario">
        <h1>Dados do Usuário</h1>
        <form className="row g-3" onSubmit={enviarFormulario}>
          <div className="col-md-6 col-12">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Digite seu nome"
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              defaultValue={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="xxx.xxx.xxx-xx"
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@mail.com"
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              defaultValue={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="******"
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="dataNascimento"
              defaultValue={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option disabled value="">Escolha uma opção...</option>
              <option value={"ATIVO"}>Ativo</option>
              <option value={"INATIVO"}>Inativo</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
            <button className="btn btn-outline-primary ms-2" onClick={cancelarFormulario}>
              Cancelar
            </button>
          </div>
        </form>
      </section>

      <Rodape />
    </>
  );
}

export default FormularioUsuario;
