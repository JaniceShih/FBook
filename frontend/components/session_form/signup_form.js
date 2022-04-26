import React from "react";

class SignupFrom extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            year: '2022',
            month: '04',
            day: '25',
            gender: 'Other',
            bio: ''
        }    
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();

        let singupUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            birthday: `${this.state.year}-${this.state.month}-${this.state.day}`,         
            gender: this.state.gender,
            bio: ''
        } 
        // debugger
        this.props.signup(singupUser).then(
            () => this.props.closeModal()
        );;
    }


    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };
    


    render() {
        // debugger
        return (
           

            <div className="signup-box">

                <div className='signup-intro'>
                 <ul>
                        {this.props.errors.map((error, i) => {
                            return (<li key={`error-${i}`}>{error}</li>)
                        })}
                </ul>

                 <h2>Sign Up</h2>
                 <p>It’s quick and easy.</p>

                 </div>

                 <div onClick={this.props.closeModal} className="close-x">X</div> 
                 <form >           

                    <div>
                        <label>
                            <input 
                                type="text"
                                className="fname-field"
                                value={this.state.fname}
                                placeholder="First Name"  
                                onChange={this.handleInput("fname")}                             
                            />
                        </label>

                        <label>
                            <input 
                                type="text"
                                className="lname-field"
                                value={this.state.lname}
                                placeholder="Last Name" 
                                onChange={this.handleInput("lname")}                              
                            />
                        </label>

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
                                placeholder="New Password"  
                                onChange={this.handleInput("password")}                           
                            />
                        </label>

                        {/* <label> Birthday
                        <select id="month" className="form__input" onChange={this.handleInput("month")}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select id="day" className="form__input" onChange={this.handleInput("day")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                        </select>
                        <select id="year"  className="form__input"      onChange={this.handleInput("year")}>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                        </label> */}
                        {/* <label>Gender
                            <span>
                                <label>Female</label>
                                <input type="radio" className="form__input" name="gender"  value="Female" onChange={this.handleInput("gender")}                             
                                / >                            
                            </span>
                            <span>
                                <label>Male</label>
                                <input type="radio" name="gender"  value="Male" onChange={this.handleInput("gender")}/>                            
                            </span>
                            <span>
                                <label>Custom</label>
                                <input type="radio"  name="gender" value="Custom" onChange={this.handleInput("gender")}/>                            
                            </span>
                        </label> */}
                    </div>

                    <div>
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                    </div>

                    <div >
                      
                        <button  className="btn btn--create" onClick={this.handleSubmit}> 
                            Sing Up
                        </button>
                    </div>
                </form>
             </div>
            
        )
    }
}

export default SignupFrom;