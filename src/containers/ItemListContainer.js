import Item from "../components/Item";

const products = [
  {
    id:0,
    img:"./imgs/products/mian.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Mian Alfombra",
    price: 4100,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-mian",
    cantidad: 10,
  },
  {
    id:1,
    img:"./imgs/products/grecia.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Grecia",
    price: 4560,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-grecia",
    cantidad: 10
  },
  {
    id:2,
    img:"./imgs/products/mianyute.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Mian Yute",
    price: 5100,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-mian-yute-sisal",
    cantidad: 10
  },  
  {
    id:3,
    img:"./imgs/products/ivy.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Ivy",
    price: 8160,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-ivy",
    cantidad: 10
  },
  {
    id:4,
    img:"./imgs/products/atalaya.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Atalaya",
    price: 8160,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-atalaya",
    cantidad: 10
  },
  {
    id:5,
    img:"./imgs/products/nuagealfombra.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Nuage Alfombra",
    price: 11040,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-alfombra",
    cantidad: 10
  },
  {
    id:6,
    img:"./imgs/products/nuage.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Nuage Yute",
    price: 14160,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-yute",
    cantidad: 10
  },
  {
      id:7,
      img:"./imgs/products/kamui.png",
      marca:"Rumapets",
      tipo: "Rascador",
      modelo: "Kamui",
      price: 17400,
      link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-kamui",
      cantidad: 10
    },
  {
    id:8,
    img:"./imgs/products/ruma.png",
    marca:"Rumapets",
    tipo: "Rascador",
    modelo: "Ruma",
    price: 25200,
    link: "https://www.rumapets.com.ar/rascadores-grandes/rascador-ruma",
    cantidad: 10
  },
]

  const ItemListContainer = () => {    
  return (
    <div className="item-list-container">      
      {products.map(item =>
        <Item
          key={item.id}
          id={item.id}
          img={item.img}
          marca={item.marca}
          tipo={item.tipo}
          modelo={item.modelo}
          price={item.price}
          price2={item.price2}
          link={item.link}
          cantidad={item.cantidad}
        />
        )
      }
    </div>
  )
};

export default ItemListContainer;
