import ItemList from "../components/ItemList";

const products = [
  {
    id: 0,
    img: "./imgs/products/mian.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Mian Alfombra",
    price: 4100,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-mian",
    height: "55cm",
    width: "40cm",
    depth: "40cm",
    weight: "6kg",
    material_de_tubos: "alfombra",
    material_de_estructura: "polar soft",
    stock: 10,
  },
  {
    id: 1,
    img: "./imgs/products/grecia.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Grecia",
    price: 4560,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-grecia",
    height: "50cm",
    width: "30cm",
    depth: "30cm",
    weight: "4.5kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 5,
  },
  {
    id: 2,
    img: "./imgs/products/mianyute.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Mian Yute",
    price: 5100,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-mian-yute-sisal",
    height: "55cm",
    width: "40cm",
    depth: "40cm",
    weight: "8kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 8,
  },
  {
    id: 3,
    img: "./imgs/products/ivy.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Ivy",
    price: 8160,
    link: "https://www.rumapets.com.ar/rascadores-chicos/rascador-ivy",
    height: "60cm",
    width: "44cm",
    depth: "44cm",
    weight: "10kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 2,
  },
  {
    id: 4,
    img: "./imgs/products/atalaya.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Atalaya",
    price: 8160,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-atalaya",
    height: "75cm",
    width: "55cm",
    depth: "55cm",
    weight: "11kg",
    material_de_tubos: "alfombra",
    material_de_estructura: "polar soft",
    stock: 7,
  },
  {
    id: 5,
    img: "./imgs/products/nuagealfombra.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Nuage Alfombra",
    price: 11040,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-alfombra",
    height: "100cm",
    width: "60cm",
    depth: "55cm",
    weight: "15kg",
    material_de_tubos: "alfombra",
    material_de_estructura: "polar soft",
    stock: 10,
  },
  {
    id: 6,
    img: "./imgs/products/nuage.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Nuage Yute",
    price: 14160,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-yute",
    height: "100cm",
    width: "60cm",
    depth: "55cm",
    weight: "19kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 10,
  },
  {
    id: 7,
    img: "./imgs/products/kamui.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Kamui",
    price: 17400,
    link: "https://www.rumapets.com.ar/rascadores-medianos/rascador-kamui",
    height: "90cm",
    width: "50cm",
    depth: "55cm",
    weight: "16kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 10,
  },
  {
    id: 8,
    img: "./imgs/products/ruma.png",
    marca: "Rumapets",
    tipo: "Rascador",
    modelo: "Ruma",
    price: 25200,
    link: "https://www.rumapets.com.ar/rascadores-grandes/rascador-ruma",
    height: "120cm",
    width: "50cm",
    depth: "55cm",
    weight: "22kg",
    material_de_tubos: "yute",
    material_de_estructura: "polar soft",
    stock: 10,
  },
];

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      {products.map((item) => (
        <ItemList
          key={item.id}
          img={item.img}
          marca={item.marca}
          tipo={item.tipo}
          modelo={item.modelo}
          price={item.price}
          price2={item.price2}
          link={item.link}
          height={item.height}
          width={item.width}
          depth={item.depth}
          weight={item.weight}
          material_de_tubos={item.material_de_tubos}
          material_de_estructura={item.material_de_estructura}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
