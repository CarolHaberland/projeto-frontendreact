import React, {useContext} from "react";
import {InfoShop} from "../../info-shop/info-shop"

export const ItensCarrinho = (props) => {
    const { id, nomeDoProduto, preco, imagemDoProduto } = props.data;

    const {carrinhoItens, addCarrinho, removerCarrinho, attItensCarrinho} = useContext(InfoShop)

    return (
        <div className="itensCarrinho"> 

        <img src={imagemDoProduto}/>
        <div className="descricao">
            <p>
                <b>{nomeDoProduto}</b>
            </p>
            <p>
                R${preco}
            </p>
            <div className="contador">
                <button onClick={() => removerCarrinho(id)}> - </button>
                <input value={carrinhoItens[id]} onChange ={(e) => attItensCarrinho(Number(e.target.value), id)} />
                <button onClick={() => addCarrinho(id)}> + </button>

            </div>
        </div>
        
        </div>
    )
}