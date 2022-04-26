import React, { Component } from "react";
class Light extends Component {
  constructor(porps) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    let dataUrl = "https://jsonplaceholder.typicode.com/users";
    Axios.get(dataUrl)
      .then((res) => {
        this.setState({
          contacts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state.contacts)}</pre>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead className="thead-primary">
                  <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>email</th>
                      <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.contacts.length> 0 ? (
                        <React.Fragment>
                            {this.state.contacts.map((contact) =>{
                                return(
                                    <tr>
                                        <td>{contact.name}</td>
                                        <td>{contact.username}</td>
                                        <td>{contact.email}</td>
                                    </tr>
                                )
                            })
                            
                        <React.Fragment>
                    ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Light;
