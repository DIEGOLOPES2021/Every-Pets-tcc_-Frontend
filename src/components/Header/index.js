import { Container,  } from "./styles";
import logo from "../../assents/logo2.png"

function Header() {

    return (
        <Container>
            <nav>
                <img src={logo} />
                <input type="search" placeholder="Pesquisar..." />
                <p>Diego| Veterinario</p>
            </nav>

            <nav id="headerCardes">
                <div id="fotoDePerfil"></div>

                <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>Cadastro</p>
                </div>
                <div>
                    <p>Atendimentos</p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
            </nav>
            <nav id="InformacoesParciais">
                
                <div>
                    <div class="containerCardeInformacoes">
                        <p>90</p>
                    </div>
                    <p>Atendimentos hoje</p>
                </div>

                <div>
                    <div class="containerCardeInformacoes">
                        <p>90</p>
                    </div>
                    <p>Atendimentos amanhã</p>
                </div>

                <div>
                    <div class="containerCardeInformacoes">
                        <p>90</p>
                    </div>
                    <p>Mensagens</p>
                </div>

                <div>
                    <div class="containerCardeInformacoes">
                        <p>90</p>
                    </div>
                    <p>Mensagens</p>
                </div>
            </nav>
        </Container>

    );
}

export default Header