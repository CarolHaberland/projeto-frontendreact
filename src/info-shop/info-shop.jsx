import React, { createContext, useState } from "react";
import {Produtos} from "../produtos"

export const InfoShop = createContext(null);

const carrinhoPadrao = () => {
    let carrinho = {}
    for (let i = 1; i < Produtos.length + 1; i++) {
        carrinho[i] = 0;
    }
    return carrinho
}


export const InfoShopProv = (props) => {

    const [carrinhoItens, setCarrinhoItens ] = useState(carrinhoPadrao());
    console.log(carrinhoItens)
    const totalCarrinho = () => {
        let valorTotal = 0;
        for (const item in carrinhoItens){
            if(carrinhoItens[item] > 0) {
                let itemInfo = Produtos.find((produto) => produto.id === Number(item));
                valorTotal += carrinhoItens[item] * itemInfo.preco;
            }
        }

        return valorTotal;
    }


    const addCarrinho = (idDoItem) =>{
        setCarrinhoItens((prev) => ({...prev, [idDoItem]: prev[idDoItem] + 1}))
    }
    const removerCarrinho = (idDoItem) =>{
        setCarrinhoItens((prev) => ({...prev, [idDoItem]: prev[idDoItem] - 1}))
    }

    const attItensCarrinho = (novaQtd, idDoItem) => {
        setCarrinhoItens((prev) => ({...prev, [idDoItem]: novaQtd}))
    }

    const contextValue = {carrinhoItens, addCarrinho, removerCarrinho, attItensCarrinho, totalCarrinho}

    return <InfoShop.Provider value={contextValue}>
        {props.children}
        </InfoShop.Provider>
}