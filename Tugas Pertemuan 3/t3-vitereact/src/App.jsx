import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home";
import booksData from "./utils/books";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookPage from "./page/BookPage";
import Contact from "./page/Contact";
import Team from "./page/Team";

import { useState } from "react";
function App() {
  const [books, setBooks] = useState(booksData);

  const handleAdd = () => {
    const newBook = {
      id: Date.now(),
      title: "Manga Baru " + (books.length + 1),
      author: "Unknown",
      year: 2026,
      description: "Deskripsi buku baru.",
      image: books[0].image,
    };
    setBooks([newBook, ...books]);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home books={books} onAdd={handleAdd} />} />
            <Route path="/Books" element={<BookPage books={books} />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
