import Cover2 from "../assets/Overlord.jpg";
import Cover3 from "../assets/gachiakuta.jpg";
import Cover4 from "../assets/Mushoku Tensei.jpg";

export default function ProductList() {
  return (
    <>
      <div>
        <h1 className="display-5 fw-bold ">Welcome to MangaStore 📚</h1>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 justify-content-center">
            <div className="card shadow-sm  justify-content-center">
              <div className="card-body">
                <img src={Cover2} className="card-img-top" alt="Overlord" />
                <h5 className="card-title">Overlord</h5>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 justify-content-center">
            <div className="card shadow-sm  justify-content-center">
              <div className="card-body">
                <img src={Cover3} className="card-img-top" alt="gachiakuta" />
                <h5 className="card-title">Gachiakuta</h5>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 ">
            <div className="card shadow-sm justify-content-center">
              <div className="card-body">
                <img src={Cover4} className="card-img-top" alt="Mushoku Tensei" />
                <h5 className="card-title">Mushoku Tensei</h5>

                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
