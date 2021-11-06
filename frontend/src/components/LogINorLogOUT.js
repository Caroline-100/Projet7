import React from 'react';
import {Redirect} from 'react-router-dom';

class LogINorLogOUT extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn:false,
        };
        this.handleclick = this.handleclick.bind(this)
    }    
    handleclick() {
        this.setState(previusState => {
            console.log(previusState);
            return {isLoggedIn :!previusState.isLoggedIn}
        })

    }
    renderRedirect() {
        if(this.state.isLoggedIn)
        {
            return <Redirect to='/LogIn'/>
        }
    }
    render() {
            let buttonText = this.state.isLoggedIn ? "login" : "logout"
        return (
        <div> 
            {this.renderRedirect()}
        <button onClick={this.handleclick}>{buttonText}
            
        </button>
        </div>)
    }
}


export default LogINorLogOUT;
