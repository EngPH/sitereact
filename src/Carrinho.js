import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarrinhoModal = ({ show, handleClose, carrinhoItems }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seu Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Exibindo os itens no carrinho */}
        <ul>
          {carrinhoItems.map((item, index) => (
            <li key={index}>{item.nome} - R${item.valor}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Carrinho = () => {
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [carrinhoItems, setCarrinhoItems] = useState([]);

  const produtos = [
    { id: 'compra1', nome: 'Placa de Vídeo 3060', valor: 2000 },
    { id: 'compra2', nome: 'Processador I7', valor: 3000 },
    { id: 'compra3', nome: 'Memória Ram 16GB', valor: 500 },
    { id: 'compra4', nome: 'Placa Mãe Z790', valor: 2500 },
    { id: 'compra5', nome: 'Cooler Gelado', valor: 800 },
    { id: 'compra6', nome: 'Cooler Gelado', valor: 800 },
  ];

  const handleCarrinhoShow = () => setShowCarrinho(true);
  const handleCarrinhoClose = () => setShowCarrinho(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinhoItems([...carrinhoItems, produto]);
  };

  return (
    <div>
      {/* Renderizando os botões de compra */}
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome} - R${produto.valor}</p>
          <Button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </Button>
        </div>
      ))}

      {/* Seu link que abre o modal */}
      <li className="nav-item Carrinho">
        <a className="nav-link" onClick={handleCarrinhoShow} href="#!">
          {/* Seu conteúdo do link aqui */}
        </a>
      </li>

      {/* Renderizando o modal */}
      <CarrinhoModal
        show={showCarrinho}
        handleClose={handleCarrinhoClose}
        carrinhoItems={carrinhoItems}
      />
    </div>
  );
};

export default Carrinho;