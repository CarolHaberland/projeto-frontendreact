/* import React, {useState} from "react";
import {Produtos} from "../../produtos"

export const BarraDePesquisa = () => {

    const [buscarNome, setBuscarNome] = useState("")

    return (
        <div>
        <input type="text" placeholder="Navegue aqui..." onChange={event => {setBuscarNome(event.target.value)}}></input>
        {Produtos.filter((val) =>{
            if (buscarNome == ""){
                return val
            }else if (val.nomeDoProduto.toLowerCase().includes(buscarNome.toLowerCase())) {
                return val
            }
            }).map((val, key)=>{
                return(
                    <div key={key}>
                        <p>{val.nomeDoProduto}</p>
                    </div>
                )
            })
        }
        </div>
       
       if(select.value != "crescente"){
        setPdFiltratos(pdPesquisado) 
        return
    }
    pdPesquisado.sort((p1, p2) => {
        if (p1.preco > p2.preco){
            return 1
        }
        if (p1.preco < p2.preco){
            return -1
        }
        return 0 
    })
    if(select.value != "decrescente"){
        setPdFiltratos(pdPesquisado) 
        return
    }
    pdPesquisado.sort((p1, p2) => {
        if (p1.preco < p2.preco){
            return 1
        }
        if (p1.preco > p2.preco){
            return -1
        }
        return 0 
    })
    if(select.value != "nome"){
        setPdFiltratos(pdPesquisado) 
        return
    }
    pdPesquisado.sort((p1, p2) => {
        if (p1.nomeDoProduto > p2.nomeDoProduto){
            return 1
        }
        if (p1.nomeDoProduto < p2.nomeDoProduto){
            return -1
        }
        return 0 
    })
    setPdFiltratos(pdPesquisado)
    )


}
 */
