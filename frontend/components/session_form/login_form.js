import React from "react";

class LoginForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            email: '',
            password: ''
        }    
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e){
        e.preventDefault();
        // log in user
        // this.props.history.push: used to move from the current page to another one.
           this.props.login(this.state).then(
            () => this.props.history.push("./")
        );;
    }

    render(){
        return(
            <div> 

                <div>
                    <div>
                        Fbook
                    </div>
                    <div>
                        Connect with friends and the world around you on Facebook.
                    </div>                
                </div>

                <form > 
                    <ul>
                        {this.props.errors.map((error, i) => {
                            return (<li key={`error-${i}`}>{error}</li>)
                        })}
                    </ul>               

                    <div>
                        <label>
                            <input 
                                type="text"
                                value={this.state.email}
                                placeholder="Email or phone number" 
                                onChange={this.handleInput("email")}                               
                            />
                        </label>

                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                placeholder="Password"  
                                onChange={this.handleInput("password")}                              
                            />
                        </label>
                    </div>

                    <div >
                        <button
                             onClick={this.handleSubmit}> 
                                Log In 
                        </button>
                    </div>
                    
                    <div>                  
                            Demo Log In?                     
                    </div>

                    <div>                     
                        <button > Create new account  </button>
                    </div>

                </form>

            </div>
            
        )
    }
}

export default LoginForm;