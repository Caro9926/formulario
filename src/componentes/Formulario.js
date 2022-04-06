import React from "react";

const Formulario = (props) =>{
    const {inputs, setInputs} = props;
    const onChange = (e) =>{
        setInputs({
            ...inputs,  
            [e.target.id] : e.target.value 
        });
    }
    

    return ( 
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" value={inputs.firstName} onChange={onChange}/>
                {
                    (inputs.firstName.length>0 && inputs.firstName.length<2) ? <p>First Name must be at least 2 characters</p> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" value={inputs.lastName} onChange={onChange}/>
                {
                    (inputs.lastName.length>0 && inputs.lastName.length<2) ? <p>Last Name must be at least 2 characters</p> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="Email" value={inputs.email} onChange={onChange}/>
                {
                    (inputs.email.length>0 && inputs.email.length<5) ? <p>Email must be at least 5 characters</p> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={inputs.password} onChange={onChange}/>
                {
                    (inputs.password.length>0 && inputs.password.length<8) ? <p>Password must be at least 8 characters</p> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" value={inputs.confirmPassword} onChange={onChange}/>
                {
                    (inputs.confirmPassword.length>0 && inputs.confirmPassword.length<8) ? <p>Confirm password must be at least 8 characters</p> : ""
                }
                {
                    (inputs.confirmPassword.length>0 && (inputs.password !== inputs.confirmPassword)) ? <p>Passwords must match</p> : ""
                    
                }
            </div>
        </form>
    )

}

export default Formulario;