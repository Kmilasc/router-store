import appleIPhone13 from '../assets/AppleIPhone13.jpg'
import appleIPhone1302 from '../assets/appleIPhone1302.jpg'
import appleIPhone1303 from '../assets/appleIPhone1303.jpg'
import samsungGalaxyA14 from '../assets/samsungGalaxyA14.jpg'
import samsungGalaxyA1402 from '../assets/samsungGalaxyA1402.jpg'
import samsungGalaxyA1403 from '../assets/samsungGalaxyA1403.jpg'
import smartphoneSamsungGalaxyS24 from '../assets/smartphoneSamsungGalaxyS24.jpg'
import smartphoneSamsungGalaxyS2402 from '../assets/smartphoneSamsungGalaxyS2402.jpg'
import smartphoneSamsungGalaxyS2403 from '../assets/smartphoneSamsungGalaxyS2403.jpg'
import motorolaMotoE22 from '../assets/motorolaMotoE22.jpg'
import motorolaMotoE2202 from '../assets/motorolaMotoE2202.jpg'
import motorolaMotoE2203 from '../assets/motorolaMotoE2203.jpg'
import ioga from '../assets/ioga.jpg'
import ioga02 from '../assets/ioga02.jpg'
import operaçãoFamília from '../assets/operaçãoFamília.jpg'
import operaçãoFamília02 from '../assets/operaçãoFamília02.jpg'
import operaçãoFamília03 from '../assets/operaçãoFamília03.jpg'
import umVerãoEmParis from '../assets/umVerãoEmParis.jpg'
import umVerãoEmParis02 from '../assets/umVerãoEmParis02.jpg'
import umVerãoEmParis03 from '../assets/umVerãoEmParis03.jpg'
import feriasNosHamptons from '../assets/feriasNosHamptons.jpg'
import feriasNosHamptons02 from '../assets/feriasNosHamptons02.jpg'
import feriasNosHamptons03 from '../assets/feriasNosHamptons03.jpg'
import casacoFeminino from '../assets/casacoFeminino.jpg'
import casacoFeminino02 from '../assets/casacoFeminino02.jpg'
import casacoFeminino03 from '../assets/casacoFeminino03.jpg'
import kitFrio from '../assets/kitFrio.jpg'
import kitFrio02 from '../assets/kitFrio02.jpg'
import kitFrio03 from '../assets/kitFrio03.jpg'
import camisetaLongline from '../assets/camisetaLongline.jpg'
import camisetaLongline02 from '../assets/camisetaLongline02.jpg'
import camisetaLongline03 from '../assets/camisetaLongline03.jpg'
import conjuntoPijama from '../assets/conjuntoPijama.jpg'
import conjuntoPijama02 from '../assets/conjuntoPijama02.jpg'
import conjuntoPijama03 from '../assets/conjuntoPijama03.jpg'

export const products = [
    { "id": 1, "category": "Eletronicos", "price": 6.374, "name": "Apple iPhone 13 mini (128 GB) - Verde", "img": appleIPhone13, "imgAlt": "iPhone 13 mini",
        "description": "Tela Super Retina XDR de 5,4 polegadas",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "iPhone 13 mini", src: appleIPhone1302 },
            { srOnly: "View Image 2", alt: "iPhone 13 mini", src: appleIPhone1303 },
        ] 
    },
    { "id": 2, "category": "Eletronicos", "price": 797, "name": "Samsung Galaxy A14 128GB 4G Wi-Fi Tela 6.6", "img": samsungGalaxyA1402, "imgAlt": "Samsung Galaxy A14",
        "description": "Dual Chip 4GB RAM Câmera Tripla de até 50MP + Selfie 13MP Bateria de 5000mAh - Preto",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Samsung Galaxy A14", src: samsungGalaxyA14 },
            { srOnly: "View Image 2", alt: "Samsung Galaxy A14", src: samsungGalaxyA1403 },
        ] 
    },
    { "id": 3, "category": "Eletronicos", "price": 6.999, "name": "Smartphone Samsung Galaxy S24", "img": smartphoneSamsungGalaxyS24 , "imgAlt": "Smartphone Samsung Galaxy S24",
        "description": "Galaxy AI, Tela de 6.7 1-120Hz, 256GB, 12GB RAM, Cinza - Neste Modelo de 256GB você não ganha o dobro da memória pelo mesmo preço",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Smartphone Samsung Galaxy S24", src: smartphoneSamsungGalaxyS2402 },
            { srOnly: "View Image 2", alt: "Smartphone Samsung Galaxy S24", src: smartphoneSamsungGalaxyS2403 },
        ] 
    },
    { "id": 4, "category": "Eletronicos", "price": 975, "name": "Smartphone Motorola Moto G53", "img": motorolaMotoE22, "imgAlt": "Smartphone Motorola Moto G53",
        "description": "5G 128GB 4GB RAM Prata",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Smartphone Motorola Moto G53", src: motorolaMotoE2202 },
            { srOnly: "View Image 2", alt: "Smartphone Motorola Moto G53", src: motorolaMotoE2203 },
        ] 
    },
    { "id": 5, "category": "Books", "price": 56, "name": "Ioga", "img": ioga, "imgAlt": "Livro Ioga",
        "description": "Este é um livro sobre ioga e meditação, mas também sobre depressão e terrorismo.",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Livro Ioga", src: ioga02 },
            { srOnly: "View Image 2", alt: "Livro Ioga", src: ioga02 }
        ] 
    },
    { "id": 6, "category": "Books", "price": 35, "name": "Operação Família", "img": operaçãoFamília, "imgAlt": "Livro Operação Família",
        "description": "conheça uma história inspiradora sobre relações familiares, segundas chances, amadurecimento e autodescobrimento no novo   de Sarah Morgan.",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Livro Operação Família", src: operaçãoFamília02 },
            { srOnly: "View Image 2", alt: "Livro Operação Família", src: operaçãoFamília03 },
        ] 
    },
    { "id": 7, "category": "Books", "price": 38, "name": "Um verão em Paris", "img": umVerãoEmParis, "imgAlt": "Livro Um verão em Paris",
        "description": "Uma livraria encantadora, duas amigas improváveis e férias que mudarão a vida delas para sempre... ",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Livro Um verão em Paris", src: umVerãoEmParis02 },
            { srOnly: "View Image 2", alt: "Livro Um verão em Paris", src: umVerãoEmParis03 },
        ] 
    },
    { "id": 8, "category": "Books", "price": 41, "name": "Férias nos Hamptons: Para Nova York, com Amor Livro 5", "img": feriasNosHamptons, "imgAlt": "Livro Férias nos Hamptons",
        "description": "Da série best-seller Para Nova York com Amor, de Sarah Morgan, conheça mais um casal que vai derreter o seu coração.",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Livro Férias nos Hamptons", src: feriasNosHamptons02 },
            { srOnly: "View Image 2", alt: "Livro Férias nos Hamptons", src: feriasNosHamptons03 },
        ] 
    },
    { "id": 9, "category": "Apparel", "price": 317, "name": "Casaco feminino aquecido com capuz", "img": casacoFeminino, "imgAlt": "Casaco feminino aquecido com capuz",
        "description": "removível de inverno quente casaco casaco vestuário",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Casaco feminino aquecido com capuz", src: casacoFeminino02 },
            { srOnly: "View Image 2", alt: "Casaco feminino aquecido com capuz", src: casacoFeminino03 },
        ] 
    },
    { "id": 10, "category": "Apparel", "price": 78, "name": "Kit Frio Conjunto Termico", "img": kitFrio, "imgAlt": "Kit Frio Conjunto Termico",
        "description": "Pelinho Elasticidade Segunda Pele Unissex",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Kit Frio Conjunto Termico", src: kitFrio02 },
            { srOnly: "View Image 2", alt: "Kit Frio Conjunto Termico", src: kitFrio03 },
        ] 
    },
    { "id": 11, "category": "Apparel", "price": 25, "name": "Camiseta Longline Plus Size Feminina", "img": camisetaLongline, "imgAlt": "Camiseta Longline Plus Size Feminina",
        "description": "Manga Curta (as2, alpha, xg, plus, Preto)",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Camiseta Longline Plus Size Feminina", src: camisetaLongline02 },
            { srOnly: "View Image 2", alt: "Camiseta Longline Plus Size Feminina", src: camisetaLongline03 },
        ] 
    },
    { "id": 12, "category": "Apparel", "price": 130, "name": "Conjunto Pijama Mash", "img": conjuntoPijama, "imgAlt": "Conjunto Pijama Mash                                                               ",
        "description": "Algodão Manga Longa Com Botão Masculino",
        "otherImgs": [
            { srOnly: "View Image 1", alt: "Conjunto Pijama Mash", src: conjuntoPijama },
            { srOnly: "View Image 2", alt: "Conjunto Pijama Mash", src: conjuntoPijama },
        ] 
    },
]