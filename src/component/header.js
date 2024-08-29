import React from "react";
import './header.css';





const Header = ({department,surname,firstname,search}) => {
    return(
        <div>
            <div className="head">
                 <div className="department">
                   <h1>{`Department of ${department}`}</h1>
                </div>
                <div className="search">
                     <h2 >
                       <input type="search"
                       placeholder="Search your name"
                       name="search" 
                       onChange={search}
                       />
                 </h2>
                </div>
                 
            </div>
            <div>
                <b> {`Welcome ${surname} ${firstname}`}</b>
           
            </div>
           
            <div className="departmentNav">
                <div>Department staffs</div>
                <div>Information</div>
                <div>About</div>
                <div>Payment</div>
                <div>chat</div>
            </div>

        </div>
    )
}


export default Header;