import React from 'react';

class LogINorLogOUT extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn:true,
        };
        this.handleclick = this.handleclick.bind(this)
    }    
    handleclick() {
        this.setState(previusState => {
            console.log(previusState);
            return {isLoggedIn :!previusState.isLoggedIn}
        })
    }
    render() {
            let buttonText = this.state.isLoggedIn ? "login" : "logout"
        return (
        <div> 
        <button onClick={this.handleclick}>{buttonText}
            
        </button>
        </div>)
    }
}


export default LogINorLogOUT;
