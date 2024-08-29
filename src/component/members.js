import React,{Component} from "react";



class Members extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
   
    

  
    render(){
          return(
    <div>
        <h1>Members</h1>
        <div>
            <div>Total school students <b>{this.props.total}</b></div>
            <div>Total department students <b>{this.props.DPtotal}</b></div>
            <div>Male<b>{this.props.departmentMale}</b></div>
            <div>Female<b>{this.props.departmentFemale}</b></div>
            
        </div>
    </div>
   )

}
}




export default Members;