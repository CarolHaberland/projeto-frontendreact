import React, { useContext } from "react";
import {InfoShop} from "../../info-shop/info-shop"


export const Produto = (props) => {
    const { id, nomeDoProduto, preco, imagemDoProduto } = props.data;
    const {addCarrinho, carrinhoItens} = useContext(InfoShop)
    
    const qtdItensCarrinho = carrinhoItens[id] 

   

    return (
    <div className="produto">
        <img src={imagemDoProduto}/>
        <div className="descricao">
            <p> 
                <b>{nomeDoProduto}</b> 
            </p>
            <p>
                R${preco}
            </p>
            <button className="botaoAddNoCarrinho" onClick={() => addCarrinho(id)} >
                Comprar  {qtdItensCarrinho > 0 && <>({qtdItensCarrinho})</>}
            </button>

        </div>
    </div>
    )
}