import React, { Component } from 'react';
import Axios from 'axios';
const URI = "https://panorbit.in/api/users.json";

const UserContext = React.createContext();

class UserProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: null
        }
      }
    
      componentDidMount(){
        Axios.get(`${URI}`)
          .then(result => {
            console.log('data',result.data.users);
            this.setState({
              users: result.data.users
            })
          }).catch(err => console.log(err));
      }

      getUser = (id) => {
          return this.state.users.find((item) => item.id === id);
      }

      singleUser = (id) => {
          let tempUser = [...this.state.users];
          const index = tempUser.indexOf(this.getUser(id));
          const user = tempUser[index];
          this.setState(
              () => {
                  return {
                      user: user
                  }
              }
          )
      }

    render() {
        return (
            <UserContext.Provider value={{ 
                ...this.state,
                singleUser: this.singleUser
             }}>
                { this.props.children }
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
