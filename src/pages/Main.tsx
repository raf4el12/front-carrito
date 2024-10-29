import Layout from "../components/Layout";
import carritoImg from "../assets/carrito.png";

const Main = () => {
  return (
    <Layout>
      <h1>Bienvenido al carrito de compras!</h1>
      <p>Encuentra los mejores productos y disfruta de una experiencia de compra unica!</p>
      <img src={carritoImg} alt="imagen de carrito" />
    </Layout>
  );
}

export default Main;

