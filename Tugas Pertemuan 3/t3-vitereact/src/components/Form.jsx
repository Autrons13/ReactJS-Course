export default function Form() {
  return (
    <>
      <div>
        <div className=" mt-5">
          <h1 className="text-center mb-4 fw-bold">Contact</h1>
        </div>
        <div className="card p-4 shadow">
          <form>
            <input className="form-control mb-3" placeholder="Nama" />
            <input className="form-control mb-3" placeholder="Email" />
            <textarea className="form-control mb-3" placeholder="Pesan"></textarea>

            <button className="btn btn-primary w-100">Kirim</button>
          </form>
        </div>
      </div>
    </>
  );
}
