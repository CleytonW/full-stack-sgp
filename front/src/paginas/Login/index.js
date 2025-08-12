import { useState } from "react";
import logo from "../../assets/sgp_logo_vertical.png";
import "./login.css";
// import { useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");
  const [ManterConectado, setManterConectado] = useState(true);

  // const navigate = useNavigate();

  // const enviarFormulario = () => {
  //   console.log({ email, senha, ManterConectado });
  //   navigate("/home");
  // };

  return (
    <div className="bg-container">
      <div className="col-4 login-container">
        <div className="col-8">
          <img
            className="img-fluid"
            src={logo}
            alt="Sistema de gerenciamento de projetos"
          />

          <div className="mb-2">
            <input
              type="email"
              className="form-control mb-1"
              id="email-input"
              placeholder="E-mail"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="senha-input"
              placeholder="Senha"
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="check-input"
              defaultChecked={ManterConectado}
              onRateChange={() => setManterConectado(!ManterConectado)}
            />
            <label className="form-ckeck-label mb-3" htmlFor="check-input">
              Mantenha-me conectado
            </label>
          </div>

          <div className="d-grid gap-2 d-flex justify-content-center">
            <button type="button" className="btn btn-primary mb-3">
              Acessar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
