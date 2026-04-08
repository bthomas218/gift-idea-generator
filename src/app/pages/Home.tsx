export default function Home() {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        {/* Header */}
        <header className="d-flex flex-column align-items-center text-center">
          <p className="text-uppercase text-primary">gift intelligence</p>
          <h1 className="fs-1">
            Find the <em className="text-primary-emphasis">perfect</em>{" "}
            gift{" "}
          </h1>
          <p className="text-secondary">
            Tell us about them -- we'll handle the rest{" "}
          </p>
        </header>

        {/* Form */}
        <div className="card p-4 mt-4" style={{ width: "600px" }}>
          <div className="card-body">
            <div className="mb-3 row">
              <div className="col">
                <label
                  htmlFor="name"
                  className="form-label fs-6 text-uppercase text-secondary"
                >
                  their name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Sarah"
                  aria-label="First name"
                ></input>
              </div>
              <div className="col">
                <label
                  htmlFor="age"
                  className="form-label fs-6 text-uppercase text-secondary"
                >
                  their age
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 26"
                  aria-label="First name"
                ></input>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label
                  htmlFor="budget"
                  className="form-label fs-6 text-uppercase text-secondary"
                >
                  your budget
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. $50"
                  aria-label="First name"
                ></input>
              </div>
            </div>
            <button className="btn btn-primary w-100 text-uppercase">
              find gifts →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
