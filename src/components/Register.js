import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm ({ profile }) {

    const [registerUser, getRegisterUser] = useState({ name: "", email: "", password: ""});

    const handleForm = (e) => {
        e.preventDefault();
        if(registerUser.name && registerUser.email && registerUser.password) {
            profile(registerUser);
        } else {
            console.log('error')
        }
    }

    return (
        <div className="container">
            <h2>Register Here</h2>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label>Full Name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter full name" 
                    name="name" value={registerUser.name} 
                    onChange={(e) => getRegisterUser({...registerUser, name: e.target.value})}
                    />     
                 </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    name="email" 
                    value={registerUser.email} 
                    onChange={(e) => getRegisterUser({...registerUser, email: e.target.value})}
                    />     
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control"  
                    placeholder="Password"
                    name="password" 
                    value={registerUser.password} 
                    onChange={(e) => getRegisterUser({...registerUser, password: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                or <Link to="/">Login</Link>
            </form>
        </div>
    )
}

export default RegisterForm