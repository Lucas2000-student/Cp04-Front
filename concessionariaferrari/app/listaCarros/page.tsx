import { listaData } from "@/data/carrosData";
import Link from "next/link";

function exibirLista() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>LISTA DE CARROS EM TABELA</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                        <tr style={{ fontSize: '25px' }}>
                            <th style={{ paddingRight: '150px', paddingLeft: '150px', border: '1px solid black' }}>ID</th>
                            <th style={{ paddingRight: '150px', paddingLeft: '150px', border: '1px solid black' }}>Nome</th>
                            <th style={{ paddingRight: '150px', paddingLeft: '150px', border: '1px solid black' }}>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaData.map(function (item) {
                            return (

                                <tr key={item.id}>
                                    <td style={{ textAlign: 'center', border: '1px solid black' }}>{item.id}</td>
                                    <td style={{ textAlign: 'center', border: '1px solid black' }}>{item.nome}</td>
                                    <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
                                        <Link href={'/detalhesCarros/' + item.id}>Mais informações... </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default exibirLista;