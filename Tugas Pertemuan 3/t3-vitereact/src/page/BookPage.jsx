import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function BookPage({ books }) {
  return (
    <div className="py-5">
      <h1 className="text-center fw-bold">Halaman Daftar Buku</h1>
      <ProductList books={books} />
    </div>
  );
}
