import ProductCard from "./components/ProductCard";

function App() {
  return (
      <ProductCard
          nombre="Mouse"
          precio={20}
          stock={5}
          imagen="/Imagenes/mouse.jpeg"
      />
  );
}

export default App;