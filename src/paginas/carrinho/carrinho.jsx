import React, {useContext} from "react";
import { Produtos } from "../../produtos";
import {InfoShop} from "../../info-shop/info-shop"
import {ItensCarrinho} from "./itens-carrinho"
import "./carrinho.css"
import {Navigate, useNavigate} from "react-router-dom"



export const Carrinho = () =>{

    const {carrinhoItens, totalCarrinho} = useContext(InfoShop)
    const valorTotal = totalCarrinho()

    const caminho = useNavigate()

    return  ( 
    <div className="carrinho">
        <div className="carrinhoTitulo">
            <h1>Verifique Sua Mochila!</h1>
        </div>
        <div className="itensCarrinho">
            {Produtos.map((produto) => {
                if(carrinhoItens[produto.id] !== 0){
                    return <ItensCarrinho data={produto} />
                }

            })}
        
        {valorTotal > 0 ? (
            <div className="checkout">
                {valorTotal > 0}
                <p> Total: <b>R$ {valorTotal.toFixed(2)}</b> </p>
                <button onClick={() => caminho("/")}> Continar Comprando </button>
                <button> Finalizar Compra </button>
            </div>
            
        ) : (<h1> Sua mochila está vazia! </h1>) }
        </div>
    </div>)
}