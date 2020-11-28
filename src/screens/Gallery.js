import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserConsumer } from '../Context';
import "./profile.css";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            blkStatus: false
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
                                <li>
                                    <Link to={`/profile/${this.state.id}`}> Profile</Link>
                                </li>
                                <li>
                                    <Link to={`/posts/${this.state.id}`}>Posts</Link>
                                </li>
                                <li className="active">
                                    <Link to={`/gallery/${this.state.id}`}>Gallery</Link>
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </li>
                                <li>
                                    <Link to={`/todo/${this.state.id}`}>ToDo</Link>
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
                                <h5> Gallery </h5>
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
                            <div className="profile-content">
                                <h3 className="title text-center">Coming Soon</h3>
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

export default Gallery;
