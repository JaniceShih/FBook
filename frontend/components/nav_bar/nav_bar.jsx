import React from "react";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {

        return(
            <nav>
                Hello {this.props.currentUser.fname} 
               <button onClick={this.props.logout}>Logout</button>
            </nav>
        );
    };
};

export default NavBar;