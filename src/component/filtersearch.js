import React from "react";
import SearchDisplay from "./searchDisplay";
import './filtersearch.css';





const Filtersearch = ({searchDB}) =>{
  

    const filtersearchArrary = searchDB.map((_data,i)=>{
        return(<div><SearchDisplay
            key={i}
            email={searchDB[i].email}
            othername={searchDB[i].othername}
            surname={searchDB[i].surname}
            
            />
            </div>
            
        )
    })
return(<div className="searchFilter">
       {filtersearchArrary}
    </div>)
 

}


export default Filtersearch;