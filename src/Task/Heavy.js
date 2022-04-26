import React, { useEffect } from "react";
import axios from "axios";
const Heavy = () => {
  useEffect(() => {
    Axios.get(dataUrl)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      getContactData = () =>{
          console.log(post);
          setUpdate(post);
      }
  });
  return (
    <>
      <h1>Helloo</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
              <tr>
                  <td></td>
              </tr>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Heavy;
