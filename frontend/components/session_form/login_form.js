import React from "react";


class LoginForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            email: '',
            password: ''
        }    
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state).then(
            () => this.props.history.push("./")
        );
    }

    loginDemo(e) {
        e.preventDefault();

        this.setState({
            email: "aastudent@gmail.com",
            password: "123456" }, 
        () => {
            this.props.login(this.state)
        });
    };

    openSignupModal(e) {
        e.preventDefault();
        this.props.openModal("create_user");
    };
    


    render(){
        return(
            <div className="login__page">
            <div className="grid grid--1x2 login"> 
                <div className="block block__header">
                    <div className="block__heading">
                        jacebook
                    </div>
                    <h2>
                        Connect with friends and the world around you on Jacebook.
                    </h2>                                  
                </div>

                <div className="block">
                    <form className="login__form"> 
                        {/* <ul>
                            {this.props.errors.map((error, i) => {
                                return (<li key={`error-${i}`}>{error}</li>)
                            })}
                        </ul>                */}

                        <div>
                            <label>
                                <input 
                                    type="text"
                                    className="form__input"
                                    value={this.state.email}
                                    placeholder="Email or phone number" 
                                    onChange={this.handleInput("email")}                               
                                />
                            </label>

                            <label>
                                <input
                                    type="password"
                                    className="form__input"
                                    value={this.state.password}
                                    placeholder="Password"  
                                    onChange={this.handleInput("password")}                              
                                />
                            </label>
                        </div>

                        <div >
                        
                            <button className="btn btn--primary" onClick={this.handleSubmit}> 
                                    Log In 
                            </button>
                        </div>
                        
                        <div>                        
                            <a onClick={this.loginDemo} className="link-demo"> Demo Log In? </a>                                                
                        </div>
    

                        <div>
                        
                            <button 
                                className="btn btn--create"
                                onClick={this.openSignupModal}>
                                Create new account 
                            </button>
                        </div>                 

                    </form>

                </div>

               

            </div>
            </div>
            
        )
    }
}

export default LoginForm;