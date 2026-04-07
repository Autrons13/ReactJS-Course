import { useState } from "react";
function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      {/*navbar*/}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {" "}
        <div className="col-md-3 mb-2 mb-md-0">
          {" "}
          <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            {" "}
            <i className="fa-solid fa-book fa-2xl" style={{ color: "rgb(116, 192, 252)" }}></i>
            <span className="ms-2 fs-3">MangaStore</span>
          </a>{" "}
        </div>{" "}
        <ul className="nav col-12 col-md-auto mb-3 justify-content-center mb-md-0 me-auto">
          {" "}
          <li>
            <a href="#" className={`nav-link px-2 ${page === "Home" ? "link-secondary" : ""}`} onClick={() => setPage("Home")}>
              Home
            </a>
          </li>{" "}
          <li>
            <a href="#" className={`nav-link px-2" ${page == "Contact" ? "link-secondary" : ""}`} onClick={() => setPage("Contact")}>
              Contact
            </a>
          </li>{" "}
          <li>
            <a href="#" className={`nav-link px-2" ${page == "Team" ? "link-secondary" : ""}`} onClick={() => setPage("Team")}>
              Tim
            </a>
          </li>{" "}
        </ul>{" "}
        <div className="col-md-5 text-end d-flex align-items-center justify-content-end">
          {/* Search Input */}
          <form className="me-3" role="search">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="file-shrink-0 d-flex align-items-center">
            {" "}
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>{" "}
            <button type="button" className="btn btn-primary text-nowrap">
              Sign-up
            </button>{" "}
          </div>{" "}
        </div>
      </header>{" "}
      {/*content*/}
      <div className="container">
        {page === "Home" && <Home />}
        {page === "Contact" && <Contact />}
        {page === "Team" && <Team />}
      </div>
    </>
  );
}

import Cover from "./assets/Roshidere_light_novel_volume_1_cover.jpg";
import Cover2 from "./assets/Overlord.jpg";
import Cover3 from "./assets/gachiakuta.jpg";
import Cover4 from "./assets/Mushoku Tensei.jpg";
function Home() {
  return (
    <div className="container">
      {" "}
      {/*hero*/}
      <div className="container my-5">
        {" "}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {" "}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            {" "}
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Alya Sometimes Hides Her Feeling in Russian</h1>{" "}
            <p className="lead">
              Cerita ini mengikuti seorang gadis muda Rusia-Jepang yang cantik dan berbakat bernama Alisa Kujou yang merupakan siswi pindahan di sekolah menengah barunya di Jepang. Cerita ini juga mengikuti seorang siswa laki-laki yang
              cerdas namun malas bernama Masachika Kuze.
            </p>{" "}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              {" "}
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Beli
              </button>{" "}
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                Sampel
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            {" "}
            <img className="rounded-lg-3" src={Cover} alt="" width="265" height="376" />{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Content */}
      <div>
        <h1 className="mb-4">Welcome to MangaStore 📚</h1>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <img src={Cover2} className="card-img-top" alt="Overlord" />
                <h5 className="card-title">Overlord</h5>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <img src={Cover3} className="card-img-top" alt="gachiakuta" />
                <h5 className="card-title">Gachiakuta</h5>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 ">
            <div className="card shadow-sm">
              <div className="card-body">
                <img src={Cover4} className="card-img-top" alt="Mushoku Tensei" />
                <h5 className="card-title">Mushoku Tensei</h5>

                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Aboout us */}
      <div className="p-5 mb-5 bg-light rounded-3">
        <div className="container-fluid py-3 gap-3">
          <h2>About Us</h2>
          <p>mangastore adalah tempat beli manga dan light novel terpecaya yang memiliki lisensi secara resmi </p>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-dark text-white text-center py-5 mt-5">
        <p className="mb-1">© 2026 MangaStore | Powered by MangaStore</p>
      </footer>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1 className="mb-4">Contact</h1>
      <div className="card p-4 shadow">
        <form>
          <input className="form-control mb-3" placeholder="Nama" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" placeholder="Pesan"></textarea>

          <button className="btn btn-primary w-100">Kirim</button>
        </form>
      </div>
      {/* footer */}
      <footer className="bg-dark text-white text-center py-5 mt-5 ">
        <p className="mb-1">© 2026 MangaStore | Powered by MangaStore</p>
      </footer>
    </div>
  );
}

function Team() {
  return (
    <div>
      <h1 className="mb-4">Tim Kami</h1>
      <div className="d-flex gap-4 flex-wrap">
        <div className="col-md-4">
          <div className="card text-center p-3 " style={{ width: "200px" }}>
            <div className="card-body">
              <h2>Tono</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center p-3" style={{ width: "200px" }} v>
          <div className="card-body">
            <h2>Mukushi</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center p-3" style={{ width: "200px" }}>
          <div className="card-body">
            <h2>Hendra</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center p-3" style={{ width: "200px" }}>
          <div className="card-body">
            <h2>Jeremy</h2>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-dark text-white text-center py-5 ">
        <p className="mb-1">© 2026 MangaStore | Powered by MangaStore</p>
      </footer>
    </div>
  );
}

export default App;
