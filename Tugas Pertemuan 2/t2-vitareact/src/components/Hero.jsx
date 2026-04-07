import Cover from "../assets/Roshidere_light_novel_volume_1_cover.jpg";

export default function Hero() {
  return (
    <>
      <div className="container my-5">
        {" "}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {" "}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            {" "}
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Alya Sometimes Hides Her Feeling in Russian</h1>{" "}
            <p className="lead mb-3">
              Cerita ini mengikuti seorang gadis muda Rusia-Jepang yang cantik dan berbakat bernama Alisa Kujou yang merupakan siswi pindahan di sekolah menengah barunya di Jepang. Cerita ini juga mengikuti seorang siswa laki-laki yang
              cerdas namun malas bernama Masachika Kuze.
            </p>{" "}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              {" "}
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Beli
              </button>{" "}
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
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
    </>
  );
}
