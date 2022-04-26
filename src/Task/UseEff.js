import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEff = (props) => {
  const [posts, setPosts] = useState([]);
  console.log("initial");
  const [getname, setGetName] = useState();
  const onInput = (event) => {
    setPosts(getname);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log("res--", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="col bg-success">
          <div className="col-lg">
            <thead className="thead-primary">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                {/* <th>Address</th> */}
              </tr>
            </thead>
            <tbody>
              {posts.map((person) => (
                <>
                  <td>{person.name}</td>
                  <td>{person.username}</td>
                  <td>{person.email}</td>
                  </>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEff;
