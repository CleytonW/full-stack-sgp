import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import robo from "../../assets/robo_404.png"

function Erro404() {
    return (
        <>
            <Cabecalho />
                <div className="container-fluid mt-3">
                    <div className="d-flex justify-content-center">
                        <img src={robo} alt="Erro 404" width={"30%"} />
                    </div>
                </div>
            <Rodape />
        </>
    )
}

export default Erro404;
