import React from "react";
import './nav.css'






const Nav = ({onClickRoute,SignedIn}) => {
    if (SignedIn) {
                return(
                    <div className="nav">
                        <h2  onClick={()=>onClickRoute('signin')}>sign out</h2>
                    </div>
                )
            }else {
                // return(
                //     <div  className="nav">
                //            <h2 onClick={()=>onClickRoute('home')}>sign out</h2>
                //     </div>
                // )
             
            }
    
    
}


export default Nav;