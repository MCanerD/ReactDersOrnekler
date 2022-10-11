import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "Mahir Caner",
    surname: "Doğan",
    gender: "Erkek",
  });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <hr />
      <div>Ad: </div>
      <input
        placeholder="AD"
        name="name"
        autoComplete="off"
        // value={form.name}
        onChange={handleChange}
      />
      <br />
      <input placeholder="SOYAD" name="surname" onChange={handleChange} />
      <br />
      <div>Cinsiyet: </div>
      <select value={form.gender} name="gender" onChange={handleChange}>
        <option value={"0"}>Erkek</option>
        <option value={"1"}>Kadın</option>
        <option value={"2"}>Diğer</option>
      </select>
      <div>
        İsim
        <br />
        <strong>Kalın İsim</strong>
      </div>
      <br />
      <div>
        Ad Soyad
        <br />
        Cinsiyet
        <br />
        <strong>
          {form.name} {form.surname} <br />
          <strong>
            {form.gender === "1"
              ? "Kadın"
              : form.gender === "0"
              ? "Erkek"
              : "Diğer"}
          </strong>
        </strong>
      </div>
    </div>
  );
}

export default Form;
