export type Item = {
    id: number;
    nome: string;
    ano: number;
    descricao: string;
    imagem: string;
}

export const listaData: Item[] = [
    { id: 1, imagem: '/imagens/modelo1.jpg', nome: 'Ferrari 250 GTO', ano: 1962 ,descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit earum voluptatum sapiente vel incidunt.'},
    { id: 2, imagem: '/imagens/modelo2.jpg', nome: 'Ferrari 365 “Daytona”', ano: 1968,descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit earum voluptatum sapiente vel incidunt.'},
    { id: 3, imagem: '/imagens/modelo3.jpg', nome: 'Ferrari Dino GT', ano: 1968 ,descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit earum voluptatum sapiente vel incidunt.'},
    { id: 4, imagem: '/imagens/modelo4.jpg', nome: 'Ferrari 308 GTS', ano: 1975 ,descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit earum voluptatum sapiente vel incidunt.'},
    { id: 5, imagem: '/imagens/modelo5.jpg', nome: 'Ferrari Berlinetta Boxer', ano: 1973 ,descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit earum voluptatum sapiente vel incidunt.'}
];
