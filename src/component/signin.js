import React,{Component} from "react";




class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            inputEmail:'',
            inputPass:''

        }
    }

    onEmailChange=(event)=>{
        this.setState({
             inputEmail:event.target.value
        })

    }
    onPasswordChange=(event)=>{
        this.setState({
             inputPass:event.target.value
        })

    }

   onclicklogin=(event)=>{
    event.preventDefault();
      fetch('http://localhost:3012/signin',{
        method : 'post',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
            email : this.state.inputEmail,
            password : this.state.inputPass
        })
      })
      .then(res => res.json())
      .then(users => {
        if(users.id){
             this.props.loadusers(users);
            this.props.onClickRoute('home');
             this.props.totalstudent();
        }
       
      })

   }


    render(){
        return(
    <div>
      <form>
        <div>
            <label>Email</label><br/>
           <input  type="email" name="Email"  placeholder="enter email" onChange={this.onEmailChange} required/>
        </div>
        <div>
            <label>Password</label><br/>
            <input type="password" name="password" placeholder="enter password" onChange={this.onPasswordChange} required/>
        </div>
         <input type="button"  name="login" value={'login'} onClick={this.onclicklogin}/>
        </form>
        <button onClick={this.props.onClickRoute}>Register</button>
    </div>
    )
    }

 }
    









export default Signin;