import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserConsumer } from '../Context';
import "./master.css";

class Dashboard extends Component {
   
    render() {
        return (
            <div className="container dashboard">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                    <UserConsumer>
                          {
                            (value) => {
                              return (
                                  <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="text-center">Select an account</h4>
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group list">
                                            {
                                               value.users.map((item,key) => {
                                                  return <li className="list-group-item">
                                                            <img src={item.profilepicture} alt={item.name} className="img-responsive img-circle userImg"/>
                                                            <Link to={"/profile/"+ item.id}>
                                                             <p> { item.name }</p>
                                                            </Link>
                                                          </li>
                                               })
                                            }
                                        </ul>
                                    </div>
                                </div>
                              )
                            }
                          }
                     </UserConsumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
