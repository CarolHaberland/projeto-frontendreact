import React, {useState, useEffect} from "react";
import Select from "react-select"
import {Produtos} from "../../produtos"
import {Produto} from "./produto"
import "./shop.css"




export const Shop = () => {


    const [buscarNome, setBuscarNome] = useState("")
    
    const [select, setSelect] = useState("")

    const [pdFiltrados, setPdFiltratos] = useState(Produtos)

    /* const Precos = Produtos.sort((p1, p2) => {
        if (p1.preco > p2.preco){
            return 1
        }
        if (p1.preco < p2.preco){
            return -1
        }
        return 0 
    })  */

    const options = [
        /* { value: "", label: "Selecione uma opção" }, */
        { value: "crescente", label: "Preço Crescente" },
        { value: "decrescente", label: "Preço Decrescente" },
        { value: "nome", label: "A-Z" },
    ];

    const filtroFinal = () => {
       /*  if(buscarNome == ""){
            setPdFiltratos(Produtos)
            return
        }  */
        let pdPesquisado = Produtos.filter((val) => {
            if (buscarNome == ""){
                return val
            }else if (val.nomeDoProduto.toLowerCase().includes(buscarNome.toLowerCase())) {
                return val
            }
        })
        console.log(select)
        console.log(pdPesquisado)
        console.log(Produtos)

        if (select == "" || select.value == "") {
            setPdFiltratos(pdPesquisado)
            return
        }
        console.log("oi")
    setPdFiltratos(filtrarProdutos(pdPesquisado))}
    
    

    const filtrarProdutos = (produtos) => {
        if(select.value == "crescente"){
            return ordenaCrescente(produtos)
        }
        if (select.value == "decrescente"){
            return ordenaDecrescente(produtos)
        }
        if (select.value == "nome"){
            return ordenaNome(produtos)
        }  
    }

    const ordenaCrescente = (produtos) =>{
        produtos.sort((produto, produto2) => {
            if (produto.preco > produto2.preco){
                return 1
            }
            if (produto.preco < produto2.preco){
                return -1
            }
            return 0
        })
        return produtos
    }

    const ordenaDecrescente = (produtos) =>{
        produtos.sort((produto, produto2) => {
            if (produto.preco < produto2.preco){
                return 1
            }
            if (produto.preco > produto2.preco){
                return -1
            }
            return 0
        })
        return produtos
    }

    const ordenaNome = (produtos) =>{
        produtos.sort((produto, produto2) => {
            if (produto.nomeDoProduto > produto2.nomeDoProduto){
                return 1
            }
            if (produto.nomeDoProduto < produto2.nomeDoProduto){
                return -1
            }
            return 0
        })
        return produtos
    }
    

    useEffect(() => {
        filtroFinal()

    }, [select, buscarNome]);



    return ( <div className="shop">
        <div className="shopTitle">
            <h1>Into Space</h1>
        </div>
        <input className="barraPesquisa" type="text" placeholder="Navegue aqui..." onChange={event => {setBuscarNome(event.target.value)}}></input>
        <div>
        <Select className="select" options={options} onChange={(option) => setSelect(option)} />
        </div>
       
        <div className="produtos"> 
            {pdFiltrados?.map((produto) => (
        <Produto key={produto.id} data={produto}/>
        ))} 
        </div>
    </div>
    )
}