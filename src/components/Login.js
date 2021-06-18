import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm ({ profile }) {

    const [loginUser, getLoginUser] = useState({ email: "", password: ""});

    const handleForm = (e) => {
        e.preventDefault();
        if(loginUser.email === '' & loginUser === '') {
            console.log('No name inputted')
        }
        profile(loginUser);
    }

    return (
        <div className="container">
            <h2>Login Here</h2>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    name="email" 
                    value={loginUser.email} 
                    onChange={(e) => getLoginUser({...loginUser, email: e.target.value})}
                    />     
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control"  
                    placeholder="Password"
                    name="password" 
                    value={loginUser.password} 
                    onChange={(e) => getLoginUser({...loginUser, password: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button> 
                 or <Link to="/register">Register here</Link>
            </form>
        </div>
    )
}

export default LoginForm