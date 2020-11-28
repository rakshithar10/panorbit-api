import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';
import Navbar from './Navbar';
import { UserConsumer } from '../Context';
import "./profile.css";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            blkStatus: false,
            viewport: {
                width: 400,
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
              }
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
           blkStatus: !this.state.blkStatus
        })
    }

    render() {
        return (
                 <div className="container-fluid">
                    <div className="row">
                            <div className="col-md-3 sidebar">
                            <nav className="nav nav-pills nav-stacked">
                                <li className="active">
                                    <Link to={`/profile/${this.state.id}`}> Profile</Link>
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </li>
                                <li>
                                    <Link to={`/posts/${this.state.id}`}> Posts</Link>
                                </li>
                                <li>
                                    <Link to={`/gallery/${this.state.id}`}> Gallery</Link>
                                </li>
                                <li>
                                    <Link to={`/todo/${this.state.id}`}> ToDo</Link>
                                </li>
                            </nav>
                        </div>
                        <UserConsumer>
                        {
                            (value) => {
                                console.log(value.users);
                                var user = value.users.find((obj)=> {
                                    return obj.id == this.props.match.params.id;
                                });
                                console.log('single', user);
                                return (

                        <div className="col-md-9 profile-body">
                            <div className="heading">
                                        <h5> Profile </h5>
                                        <div className="profile-heading pull-right" onClick={this.toggle} >
                                            <img src={user.profilepicture} alt="" className="img-responsive img-circle user"/>
                                            <p> { user.name } </p>
                                        </div>
                                        {
                                            this.state.blkStatus ? (
                                         <div className="profile-block text-center">
                                                <img src={user.profilepicture} alt="" className="img-responsive img-circle block-img"/>
                                                <h5> { user.name } </h5>
                                                <p> { user.email } </p>
                                                <Link className="btn btn-danger" to={'/'}>SignOut</Link>
                                        </div>
                                            ) : null
                                        }
                                        <div className="hr"></div>
                            </div>

                            <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                          <img src={user.profilepicture} alt="" className="img-circle img-responsive proImg" />
                                                <h6 className="text-center"> {user.name } </h6>
                                                    <div className="userinfo">
                                                            <p><span>Username : </span> {user.username }</p>
                                                            <p><span>e-mail : </span> {user.email }</p>
                                                            <p><span>Phone : </span> {user.phone }</p>
                                                            <p><span>Website : </span> {user.website }</p>
                                                    </div>
                                                        <div className="hr"></div>
                                                        <br/>
                                                    <div className="company">
                                                      <h6 className="text-center">Company</h6>
                                                        <p><span>Name : </span> {user.company.name }</p>
                                                        <p><span>catchPhrase : </span> {user.company.catchPhrase }</p>
                                                        <p><span>bs : </span> {user.company.bs }</p>
                                                        </div>
                                                     </div>
                                                     
                                        <div className="col-md-8">
                                            <h6>Address</h6>
                                                <p><span>Street :</span> { user.address.street } </p>
                                                <p><span>Suite :</span> { user.address.suite } </p>
                                                <p><span>City :</span> { user.address.city } </p>
                                                <p><span>Zipcode :</span> { user.address.zipcode } </p>
                                            <ReactMapGL
                                                {...this.state.viewport}
                                                onViewportChange={(viewport) => this.setState({viewport})}
                                              />
                                        </div>
                                    </div>
                            </div>

                            <div className="chat">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                    <a data-toggle="collapse" href="#collapse1">
                                        <h5> <span className="glyphicon glyphicon-comment"></span> Chats <span className="glyphicon glyphicon-menu-up pull-right"></span> </h5>
                                    </a>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul className="list-group">
                                                {
                                                    value.users.map((item,key) => {
                                                        return (
                                                            <li className="list-group-item chatList" key={key}>
                                                                <img src={item.profilepicture} alt="" className="img-responsive img-circle chat-img"/>
                                                                <p> { item.name } </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            }
                        }
                        </UserConsumer>
                    </div>
                 </div>
        );
    }
}

export default Profile;
