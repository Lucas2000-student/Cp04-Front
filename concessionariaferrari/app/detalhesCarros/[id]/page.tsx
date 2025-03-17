
import { listaData } from "@/data/carrosData";


type detalhesProdutoProps = {
    params: {
        id: string;
    }
}

function detalhesProduto(props: detalhesProdutoProps) {
    var produtoID = parseInt(props.params.id);
    var produto = listaData.find(function (item) {
        return item.id === produtoID;
    });
    return (
        <>
            <div>
                <div>
                    <h2>Detalhes do veículo</h2>
                    <img src={produto?.imagem} alt={produto?.nome} style={{ width: '700px', height: 'auto', borderRadius: '15px'}}/> 
                    <div>
                        <p><strong>Nome: </strong>{produto?.nome}</p>
                        <p><strong>Ano do modelo: </strong>{produto?.ano}</p>
                        <p><strong>História: </strong>{produto?.descricao}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default detalhesProduto;