import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/estilolimpo.css'; // Importando estilolimpo.css
import './assets/normalize.css'; // Importando normalize.css
import './index.css';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrossel1.png'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrosel2.png'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrossel3.png'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <span style={{ color: 'var(--corpadrao)' }}>Tec</span>
          <span style={{ color: '#535353' }}>Store</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={isNavOpen ? 'true' : 'false'}>
                Categorias
              </a>
              <div className={`dropdown-menu mask-custom shadow-1`} aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item fonte" href="produtos.html">Computadores</a>
                <a className="dropdown-item fonte" href="produtos.html">Hardware</a>
                <a className="dropdown-item fonte" href="produtos.html">Periféricos</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Parceiros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vantagens">Sobre nós</a>
            </li>
            <li className="nav-item contato">
              <a className="nav-link" href="#contact">Contato</a>
            </li>
            <li className="nav-item Carrinho">
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#ModalCenter" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart" viewBox="0 1 16 17">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> Carrinho
              </a>
            </li>
          </ul>
        </div>

        <div className="input-group">
          <input type="search" className="form-control rounded" placeholder="O que você está procurando?" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="btn btn-outline-secondary">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};




class App extends Component {
  render() {
    return (
      <div>
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></link>

        <title>TecStore</title>
        {/*Header*/}
        <header>
          {/* Navbar */}
          <Navbar />
          {/* Navbar */}
          {/*Section: Design Block*/}
          <section>
            {/* Plano de fundo Header com CSS Inline*/}
            <div id="intro" className="bg-image" style={{backgroundImage: 'url(assets/img/setup2.png)', height: '35vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
            <div id="intro2" className="bg-image" style={{backgroundImage: 'url(assets/img/setup3.png)', height: '45vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
            <div id="intro3" className="bg-image" style={{backgroundImage: 'url(assets/img/setup4.png)', height: '50vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
          </section></header>
        {/* Modal Carrinho*/}
        <div className="modal fade" id="ModalCenter" tabIndex={-1} role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="navbar-brand" href="#!"><span style={{color: 'var(--corpadrao)'}}>Tec</span><span style={{color: '#535353'}}>Store</span></h1>
                <button type="button" data-dismiss="modal">
                  <span>Voltar</span>
                </button>
              </div>
              {/* Conteudo da modal do Carrinho de compras*/}
              <div className="modal-body">
                <div className="card">
                  <div className="row">
                    <div className="col-md-8 cart">
                      <div className="title">
                        <div className="row">
                          <div className="col"><h4><b>Carrinho de compras</b></h4></div>
                          <div className="col align-self-center text-right text-muted">3 itens</div>
                        </div>
                      </div>    
                      <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                          <div className="col-2"><img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/placav.png'} /></div>
                          <div className="col">
                            <div className="row text-muted">Placa de Vídeo</div>
                            <div className="row">RTX 4090</div>
                          </div>
                          <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                          </div>
                          <div className="col">R$9.000,00 <span className="close">✕</span></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="row main align-items-center">
                          <div className="col-2"><img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/process.png'} /></div>
                          <div className="col">
                            <div className="row text-muted">Processador</div>
                            <div className="row">17 13700k</div>
                          </div>
                          <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                          </div>
                          <div className="col">R$3.000,00 <span className="close">✕</span></div>
                        </div>
                      </div>
                      <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                          <div className="col-2"><img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/memoram.png'} /></div>
                          <div className="col">
                            <div className="row text-muted">Memória Ram</div>
                            <div className="row">16GB DDR5</div>
                          </div>
                          <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                          </div>
                          <div className="col">R$500,00 <span className="close">✕</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 summary">
                      <div><h5><b>Total</b></h5></div>
                      <hr />
                      <form>
                        <p>Entrega</p>
                        <select><option className="text-muted">Correios - Grátis</option></select>
                        <p>CEP</p>
                        <input placeholder="Digite seu CEP" />
                      </form>
                      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
                        <div className="col">Valor</div>
                        <div className="col text-right">R$12.500,00</div>
                      </div>
                      <button className="btn">Finalizar</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal">Comprar mais</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fim da Modal do Carrinho de Compras*/}
        {/* Intro */}
        {/*Section: Início site*/}
        <section>
          <div className="estrutura-produtos">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="secao-cabecalho">
                    <h2>Novidades</h2>
                    <a className="roxo" href="produtos.html">Todos os produtos <i className="fa fa-angle-right" /></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a className="size" href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto1.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Placa de Vídeo 3060</h4>
                      </a>
                      <h6>R$2.000,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (24)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto2.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Processador I7</h4>
                      </a>
                      <h6>R$3.000,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (21)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto3.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Memória Ram 16GB</h4>
                      </a>
                      <h6>R$500,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (36)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto4.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Placa Mãe Z790</h4>
                      </a>
                      <h6>R$2.500,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (48)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto5.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Cooler Gelado</h4>
                      </a>
                      <h6>R$800,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (16)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto6.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Fonte 1000W</h4>
                      </a>
                      <h6>R$800,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (32)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Carrossel (documentação )*/}
          <MyCarousel/>
          {/* Seção Vantagens (features da loja) */}
          <section className="secao-box layout_padding" id="vantagens">
            <div className="container">
              <div className="heading_container">
                <h2>
                  Faça seu pedido!!!
                </h2>
                <p>
                  Comprando na TecStore você garante várias vantagens
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Frete Grátis
                      </h5>
                      <p>
                        A partir de R$300,00 em compras
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Entrega Rápida
                      </h5>
                      <p>
                        Diversas transportadoras disponíveis
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Parcelamento
                      </h5>
                      <p>
                        Compre em até 12x sem juros
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Garantia Extendida
                      </h5>
                      <p>
                        Ganhe grátis 1 ano de garantia extendida
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Seção de contato*/}
          <section className="secao-contato" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_container">
                    <div className="heading_container">
                      <h2>
                        Entre em contato
                      </h2>
                    </div>
                    <form action>
                      <div>
                        <input type="text" placeholder="Nome " />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Telefone" />
                      </div>
                      <div>
                        <input type="text" className="message-box" placeholder="Mensagem" />
                      </div>
                      <div className="d-flex ">
                        <button>
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*Mapa interativo*/}
                <div className="col-md-6">
                  <div className="boxmap">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0283628031116!2d-51.473846172973936!3d-25.4038611775785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef462cdc2f72fb%3A0xbe73a2c1e8973c98!2sCentro%20Universit%C3%A1rio%20Campo%20Real!5e0!3m2!1spt-BR!2sbr!4v1695167273156!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Footer*/}
        </section>
        <section className="footerok">
          <footer className="text-center text-lg-start">
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <h5 className="white text-uppercase mb-4">tecstore</h5>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="#!" className="text-white">Sobre nós</a>
                    </li>
                    <li>
                      <a href="produtos.html" className="text-white">Produtos</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-white">Contato</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className=" white text-uppercase mb-4">Ajuda</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">Garantia</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Entregas</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Devoluções</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Pagamentos</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className=" white text-uppercase mb-4">Carreira</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">Trabalhe conosco</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Estágios</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="white text-uppercase mb-4">Receba promoções e novidades</h5>
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" placeholder="Email" />
                  </div>
                  <button type="submit" className="btn btn-outline-white btn-block"><strong>Inscreva-se</strong></button>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center p-3">
              <p className="white">© 2023 Copyright TecStore</p>
            </div>
          </footer>
        </section>
        {/* Fim do site e carregador dos scripts*/}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-+dCXTV2P4WVL1PXJma8b4a4v0W4o3AGFDAdIw0Cs09Tzoj3VhnI8R2s6/C85/81lfG7MOd69qlhshbPf2V9uqLkDr0" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-W1J8fIleJ5Y5l8M+aWqA/YaUsC1/1jz7Fp4Z9qjEd1b99b+TAXLpnm7FG9wBCRLj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js" integrity="sha384-rbskxy4JovNuHhrj2whF83YgHx3mFpMSQ8Ew3mKSrC1vY+ixq0UqozFqW9e/U8Z6" crossorigin="anonymous"></script>
        {/* jQuery primeiro, depois Popper.js, depois Bootstrap JS */}
      </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;