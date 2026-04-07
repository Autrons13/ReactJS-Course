import styles from "../styles/books.module.css";
export default function ProductList({ books = [], onAdd }) {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h2 className="fw-bold">Koleksi Manga </h2>
          {/* Tombol untuk Nilai Tambah menggunakan Hooks */}
          {onAdd && (
            <button className="btn btn-success" onClick={onAdd}>
              + Tambah Data
            </button>
          )}
        </div>

        <div className={styles.bookGrid}>
          {Array.isArray(books) && books.length > 0 ? (
            books.map((book) => (
              <div className={styles.bookCard} key={book.id}>
                <img src={book.image} className={styles.bookImage} alt={book.title} />

                <div className={styles.cardBody}>
                  <h5 className="fw-bold">{book.title || "Judul hilang"}</h5>

                  <p className="text-muted small">
                    {book.author} ({book.year})
                  </p>

                  <button className="btn btn-primary btn-sm w-100">Detail</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">Data tidak tersedia</p>
          )}
        </div>
      </div>
    </>
  );
}
