import React,{Component} from "react";



class Register extends Component{

    constructor(props){
        super(props)
        this.state={
            matNoInput:'',
            surnameInput:'',
            otherNameInput:'',
            emailInput:'',
            passwordInput:'',
            departmentInput:'',
            statusInput:'',
            sex:'',
            birth:'',
            stateInput:'',



       }
    }
    onSearchChangeMatNo=(event)=>{
        this.setState({
            matNoInput:event.target.value
        })
    }
    onSearchChangeSurname=(event)=>{
            this.setState({
                surnameInput:event.target.value
            })
    } 
    otherName=(event)=>{
        this.setState({
            otherNameInput:event.target.value
        })
    } 
    email=(event)=>{
        
        this.setState({
            emailInput:event.target.value
        })
    }
    password=(event)=>{
            this.setState({
                passwordInput:event.target.value
            })
    }
    department=(event)=>{
        this.setState({
            departmentInput:event.target.value
        })
    }
    status=(event)=>{
            this.setState({
                statusInput:event.target.value
                
            })
        }
        
    sex=(event)=>{
                this.setState({
                    sex:event.target.value
                })
            }
            
    birth=(event)=>{
                this.setState({
                    
                    birth:event.target.value
                })
            }

    stateOfOrigin=(event)=>{
                this.setState({
                    stateInput:event.target.value
                })
            }
    Submit = (event) =>{
        event.preventDefault();
        fetch('http://localhost:3012/register',{
            method:'post',
            headers :{'content-type':'application/json'},
            body :JSON.stringify({
                mat: this.state.matNoInput,
                surnameInput:this.state.surnameInput,
                otherNameInput:this.state.otherNameInput,
                emailInput:this.state.emailInput,
                passwordInput:this.state.passwordInput,
                departmentInput:this.state.departmentInput,
                statusInput:this.state.statusInput,
                sex:this.state.sex,
                birth:this.state.birth,
                state:this.state.stateInput
               
             })
             
        })
        .then(res => res.json())
        .then(users => {
            if(users.id){
               this.props.onClickRoute('home');
               this.props.loadusers(users);
               this.props.totalstudent();
            }
        }
        )

        
        
    }
    





    render(){
         return(
        <div>
            <form>
                <div>
                    <label>Mat No</label>
                    <input onChange={this.onSearchChangeMatNo} name="matno" placeholder="DSUA/CS/24/" 
                    title="place enter your mat"/>
                </div>
                <div>
                <label>Surname</label>
                <input onChange={this.onSearchChangeSurname} name="surname" 
                placeholder="what is your surname" type="text" required/>
                </div>
                <div>
                    <label>Othernames</label>
                    <input onChange={this.otherName} name="otherName" type="text" placeholder="what is your othername"required/>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={this.email} type="email" placeholder="what is your email" required/>
                </div>
                <div>
                    <label>password</label>
                    <input onChange={this.password} type="password" placeholder="enter a password" min={6} max={10}required/>
                </div>
                <div>
                  <label>Department</label> 
                    <select onChange={this.department} required>
                        <option value={'slt'}>SLT</option>
                        <option value={'computer science'}>computer science</option>
                        <option value={'banking and finance'}>banking and finance</option>
                        <option value={'medicine and surgirel'}>medicine and surgery</option>
                        <option value={'law'}>law</option>
                        <option value={'accounting'}>accounting</option>
                    </select>
                </div>
                <div>
                   <p>Status:
                     <input onChange={this.status} type="radio" name="status" value={'single'} required/>
                     <label >single</label>
                   <input onChange={this.status} type="radio" name="status"  value={'married'} required/>
                     <label> married</label>
                    </p>
                  </div>
                <div>
                    <label>sex</label>
                    <div>
                        male<input onChange={this.sex} type="radio" name="sex" value={'male'} required/>
                        female<input onChange={this.sex} type="radio" name="sex" value={'female'} required/>
                    </div>
                </div>
                <div>
                Date of birth
                <input onChange={this.birth} type="date" name="date"/>
                </div>
                <div>
                    state of origin
                    <select  onChange={this.stateOfOrigin} name="state" required>
                        <option  value={'delta'}>Dalta</option>
                        <option   value={'lagos'}>Lagos</option>
                        <option   value={'abuja'}>Abuja</option>
                        <option  value={'edo'}>Edo</option>
                        <option  value={'abia'}>Abia</option>
                    </select>
                </div>
                <input onClick={ this.Submit} type="submit" value={'Submit'}/>
                
            </form>
        </div>
    )

    }
}




export default Register;