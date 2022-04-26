import React from "react";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {

        return(
            <nav className="nav collapsible">
                <div> Hello {this.props.currentUser.fname} 
               <button onClick={this.props.logout}>Logout</button> </div>
               
            </nav>
        );
    };
};

export default NavBar;