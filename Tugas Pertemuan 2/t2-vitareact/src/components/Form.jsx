export default function Form() {
  return (
    <>
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
      </div>
    </>
  );
}
