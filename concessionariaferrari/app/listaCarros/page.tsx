import { listaData } from "@/data/carrosData";
import Link from "next/link";
import style from "@/app/globals.module.css";

function exibirLista() {
    return (
        <>
            <h1>LISTA DE CARROS EM TABELA</h1>
            <table >
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {listaData.map(function (item) {
                        return (
                            
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    <Link href={'/detalhesCarros/' + item.id}>VER DETALHES </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default exibirLista;