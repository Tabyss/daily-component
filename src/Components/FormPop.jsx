import React, { useState } from "react";
import { uid } from "uid";

function App() {
  const [active, setActive] = useState(false);

  const pop = () => setActive(!active);

  function List({ data, controlEdit, controlDelete }) {
    return (
      <div className="list-group">
      <h1 className="px-3 py-3">My Contact List</h1>
        {data.map((base, index) => {
          const [active, setActive] = useState(false);

          const pop = () => setActive(!active);
          return (
            <div className="list-group-item list-group-item-action" key={index}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{base.name}</h5>
                <div>
                  <button
                    onClick={() => controlEdit(base.id)}
                    className="btn btn-sm btn-link"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => controlDelete(base.id)}
                    className="btn btn-sm btn-link"
                  >
                    Del
                  </button>
                  {active ? <Form /> : ""}
                </div>
              </div>
              <p className="mb-1">{base.nomor}</p>
            </div>
          );
        })}
      </div>
    );
  }

  const [base, setBase] = useState([
    {
      id: 1,
      name: "Shabbah Athabiyyu",
      nomor: "20014533",
    },
    {
      id: 2,
      name: "farhan",
      nomor: "029138120",
    },
  ]);

  const [update, setUpdate] = useState({ id: null, status: false });

  const [form, setForm] = useState({
    name: "",
    nomor: "",
  });

  function controlChange(e) {
    let data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  }

  function controlSubmit(e) {
    e.preventDefault();
    alert("Jajal");

    let data = [...base];

    if (form.name === "") {
      return false;
    }
    if (form.nomor === "") {
      return false;
    }

    if (update.status) {
      data.forEach((base) => {
        if (base.id === update.id) {
          base.name = form.name;
          base.nomor = form.nomor;
        }
      });
    } else {
      data.push({ id: uid(), name: form.name, nomor: form.nomor });
    }

    setBase(data);
    setForm({ name: "", nomor: "" });
    setUpdate({ id: null, status: false });
  }

  function controlEdit(id) {
    let data = [...base];
    let find = data.find((base) => base.id === id);
    setForm({ name: find.name, nomor: find.nomor });
    setUpdate({ id: id, status: true });
  }

  function controlDelete(id) {
    let data = [...base];
    let filter = data.filter((base) => base.id !== id);
    setBase(filter);
  }

  function Form() {
    return (
      <>
        
        <form onSubmit={controlSubmit} className="px-3 py-4">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={controlChange}
              className="form-control"
              value={form.name}
              name="name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">Nomor</label>
            <input
              type="text"
              onChange={controlChange}
              className="form-control"
              value={form.nomor}
              name="nomor"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <div className="App">
      <List
        data={base}
        controlEdit={controlEdit}
        controlDelete={controlDelete}
        onClick={pop}
      />
      <button onClick={pop} className="btn btn-primary w-100 mt-3">add</button>
      {active ? <Form /> : ""}
    </div>
  );
}

export default App;
