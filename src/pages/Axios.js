import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function Axios() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((Response) => setUsers(Response.data))
    .finally(()=>setLoading(false)); //loading işlemi.
  }, []);//köşeli parantez olmazsa sonsuz döngüye giriyor.
  console.log(users);
  return (
    <div>
      <h2>Kullanıcılar</h2>
      {loading && <div>{" "}
      <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      </div>}
      <ul>
        {users.map((ayiklama) => (
          <li key={ayiklama.id}>{ayiklama.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Axios;
