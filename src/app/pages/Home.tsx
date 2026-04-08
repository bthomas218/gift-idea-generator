import { useState } from "react";
import "../css/Home.css";

type InterestButton = {
  label: string;
  active: boolean;
};

export default function Home() {
  const [interests, setInterests] = useState<InterestButton[]>([
    { label: "fashion", active: false },
    { label: "jewelry", active: false },
    { label: "tech", active: false },
    { label: "outdoors", active: false },
    { label: "home", active: false },
    { label: "fitness", active: false },
    { label: "gaming", active: false },
  ]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [budget, setBudget] = useState<number>(0);

  const handleToggleInterest = (index: number) => {
    setInterests((prevInterests) =>
      prevInterests.map((interest, i) =>
        i === index ? { ...interest, active: !interest.active } : interest,
      ),
    );
  };

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                  type="number"
                  className="form-control"
                  placeholder="e.g. 50"
                  aria-label="First name"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                ></input>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label
                  htmlFor="interests"
                  className="form-label fs-6 text-uppercase text-secondary"
                >
                  their interests
                </label>
                <div className="d-flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`btn btn-outline-dark ${interest.active ? "active" : ""}`}
                      aria-pressed={interest.active}
                      onClick={() => handleToggleInterest(index)}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 text-uppercase"
              onClick={() =>
                console.log({
                  name,
                  age,
                  budget,
                  interests: interests
                    .filter((i) => i.active)
                    .map((i) => i.label),
                })
              }
            >
              find gifts →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
