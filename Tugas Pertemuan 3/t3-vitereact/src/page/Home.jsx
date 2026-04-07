import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

export default function Home({ books, onAdd }) {
  return (
    <>
      <Hero />

      <ProductList books={books} onAdd={onAdd} />
    </>
  );
}
