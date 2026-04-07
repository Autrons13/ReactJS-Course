import { Link } from "react-router";
export default function Header() {
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
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>{" "}
          <li>
            <Link to="/Contact" className="nav-link px-2 link-secondary">
              Contact
            </Link>
          </li>{" "}
          <li>
            <Link to="/Team" className="nav-link px-2 link-secondary">
              Tim
            </Link>
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
    </>
  );
}
