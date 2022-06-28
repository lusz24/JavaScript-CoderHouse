const productos = [ {
    id: 1,
    title: "Lupulo Tonic",
    price: 560,
    descripcion: "Gin de Lúpulo Casa Rosa, tónica, rodaja de pomelo",
    image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/whatsapp-image-2021-09-08-at-10-14-331-9125d5cd9108b18f8f16311088218409-640-0.jpeg"
},
{
    id: 2,
    title: "Lavanda Tonic",
    price: 390,
    descripcion: "Gin de Lavanda Casa Rosa, tónica, rodaja de naranja y flor de lavanda",
    image: "https://whiskypedia.com.ar/wp-content/uploads/2021/03/casa-rosa-lavanda.jpg"
},
{
    id: 3,
    title: "Doble Enebro Tonic",
    price: 560,
    descripcion: "Gin Doble Enebro Casa Rosa, tónica, rodaja de limón",
    image: "https://whiskypedia.com.ar/wp-content/uploads/2022/05/Screenshot_20220528-123505.png"
},
{
    id: 4,
    title: "Ciruela Bombon Tonic",
    price: 560,
    descripcion: "Gin Ciruela Bombòn Casa Rosa, tónica",
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/ciruela-bombon-211-a27b0aceab378b40ac16391454958121-1024-1024.jpg"
},
{
    id: 5,
    title: "Ají Calchaquí Tonic",
    price: 560,
    descripcion: "Gin Ají Calchaquí Casa Rosa, tónica, moras",
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/088/products/img_42281-f88cb67df619a7dba516454849237782-1024-1024.png"
},
{
    id: 6,
    title: "Negroni Fuerza Rosa",
    price: 560,
    descripcion: "Gin Doble Enebro Casa Rosa, Campari, Vermù La Fuerza Roja",
    image: "https://www.filo.news/__export/1560972964369/sites/claro/chegusan/img/2019/06/19/negroni.jpg_1902800913.jpg"
}
]

const enJSON = JSON.stringify(productos);
console.log(enJSON)

localStorage.setItem("Productos del carrito", enJSON)