/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { UserService } from "../../services";
import "./index.css";

function App() {
  const [users, setUsers] = useState([{}]);
  useEffect(() => {
    const async = async () => {
      const data = await UserService.getAll();
      setUsers(data);
    };
    async();
  });

  return (
    <>
      {users.map((user: any, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
