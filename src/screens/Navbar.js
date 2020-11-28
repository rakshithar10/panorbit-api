import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const { title,image,name } = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <h4 className="navbar-brand"> { title } </h4>
                    </div>
                    <div className="navbar-collapse collapse" id="menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <img src={ image } alt="" className="img-responsive img-circle"/>
                                <h4> { name } </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
