import { useState} from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  let history = useHistory();

  const usersDatabase =
    [{ name: "Adetunji Aramide", email: "tunji@gmail.com", password: "12345"},
    { name: "Glory Aramide", email: "glory@gmail.com", password: "12345"}]
   

  const [authUser, getAuthUser ] = useState({ name:"", email: "", password: "" });

  const loginUsers = (profile) => {
    if (!profile.email && !profile.password) return null;

    let person = usersDatabase.find((user) => {
          return user.email === profile.email;
    })

    if(!person) return null;

    if(profile.email === person.email && profile.password === person.password){
           getAuthUser({name: person.name, ...profile});
           history.push('/dashboard');
        } else {
           console.log('User details incorrect');
    }
  }


  const LogoutUsers = () => {
    getAuthUser({name:"", email: "", password: "" })
    history.push('/');
  }

  const RegisterUsers = (details) => {
    usersDatabase.push(details);
    history.push('/');
  }
 
  const Welcome = () => {
    return <div>Welcome <span>{authUser.name}</span> <button onClick={LogoutUsers}>Logout</button></div>;
  }

  return (
    <div className="App">
      <Route path="/" component={() => <LoginForm profile={loginUsers} />} exact />
      <Route path="/register"  component={() => <RegisterForm profile={RegisterUsers}/>} exact />
      <ProtectedRoute path="/dashboard" auth={authUser} component={Welcome} exact />
    </div>
  );
}

export default App;
