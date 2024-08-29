import React,{Component} from "react";
import Scroll from "./Scroll";
import Signin from "./component/signin";
import Register from "./component/register";
import Nav from "./component/nav";
import Home from "./component/home";
import Header from "./component/header";
import Members from "./component/members";
import Filtersearch from "./component/filtersearch";




class App extends Component{
    constructor(){
        super()
        this.state={
            route : 'signin',
            SignedIn:false,
            users:{
                id:'',
                matno:'',
                surname:'',
                othername:'',
                department:'',
                sex:'',
                status:''
                },
            totalstudentsinput:'',
            departmentTotal:'',
            departmentMale:'',
            departmentFemale:'',
            searchDB:[]
           
        
        }
  }

  search=(event)=>{
    fetch('http://localhost:3012/search',{
        method : 'post',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
        search : event.target.value.toLowerCase()
        })
    }).then(res => res.json())
    .then(ss =>{
        console.log(ss);
        this.setState({
          searchDB:ss
        });
    })
   

  }
  department = (dep) => {
    fetch('http://localhost:3012/department',{
        method:'post',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
            department:dep
        })
    }).then(res => res.json())
    .then(num =>{
        this.setState({
            departmentTotal:num
        })
    })
    fetch('http://localhost:3012/departmentMale',{
            method:'post',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                department:dep
            })
        }).then(res => res.json())
        .then(num =>{
            this.setState({
                departmentMale:num
            })
        })
    fetch('http://localhost:3012/departmentFemale',{
            method:'post',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                department:dep
            })
        }).then(res => res.json())
        .then(num =>{
            this.setState({
                departmentFemale:num
            })
        })
  }
 
 
  totalstudent = () => {
   fetch('http://localhost:3012/total')
   .then(response => response.json())
   .then(sum => {
    this.setState({
        totalstudentsinput:sum
    })
   });
 
  
}
  loadusers = (users) =>{
   this.setState({
      users:{
        id :users.id,
        matno: users.mat,
        surname: users.surname,
        othername:users.othername,
        department:users.department,
        sex:users.sex,
        status:users.state
       } 
   })
  this.department(users.department)
  } 
  
    onClickRoute=(route)=>{
        if (route==='signin') {
          this.setState({
              SignedIn:false
                });
        }else if(route==='home'){
             this.setState({
                SignedIn:true
            });
        }
        this.setState({
            route:route
        });
    }
    
         
    render(){
       
  
        return(
            <div>
            <Nav onClickRoute={this.onClickRoute} SignedIn={this.state.SignedIn}/>
            {this.state.route==='signin'?
            <Signin onClickRoute={this.onClickRoute} loadusers ={this.loadusers} 
            totalstudent={this.totalstudent}
            />:(
                this.state.route==='home'? 
            <Home>
                <Header
                 search={this.search}
                 department={this.state.users.department}
                 surname={this.state.users.surname}
                 firstname={this.state.users.othername}
                />
                <Filtersearch searchDB ={this.state.searchDB}/>
                <Scroll><Members 
                total ={this.state.totalstudentsinput}
                DPtotal={this.state.departmentTotal}
                departmentMale={this.state.departmentMale}
                departmentFemale={this.state.departmentFemale}/></Scroll>
                
            </Home>:
            <Register onClickRoute={this.onClickRoute}
             loadusers={this.loadusers}
             totalstudent={this.totalstudent}
             />
             )}
            
           
           
               
            
                
                
            </div>
        );
    }
    }
  
        export default App;