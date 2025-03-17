import ListaDeCarros from "@/components/listaDeCarros"
import { listaData } from "@/data/carrosData"

export default function Page() {
  return(
    <>
      <div className="Main">
        <h2>VENHA CONHECER OS CARROS MAIS ICÔNICOS DA FERRARI</h2>
        <ListaDeCarros itens={listaData} />
      </div>
    </>
  )
}