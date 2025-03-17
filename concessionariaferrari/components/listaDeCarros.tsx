import { Item } from '../data/carrosData';
import styles from '@/components/listaDeCarros.module.css'

type listaDeCarrosProps = {
    itens: Item[];
}

function listaDeCarros(props: listaDeCarrosProps) {
    return (
        <>
            {props.itens.map(function (item) {
                return (
                    <div key={item.id} className={styles.card}>
                        <img src={item.imagem} alt={item.nome}/>
                        <div>
                            <p><strong>Nome:</strong> {item.nome}</p>
                            <p><strong>Ano do modelo:</strong> {item.ano}</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default listaDeCarros;