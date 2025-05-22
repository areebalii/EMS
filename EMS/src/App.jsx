import './App.css'
import './index.css'; // Or './main.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useContext, useEffect, useState } from 'react';
import { GetLocalStorage, SetLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

function App() {

  // useEffect(() => {
  //   SetLocalStorage();
  //   GetLocalStorage();
  // }, [])

  const [user, setUser] = useState(null)
  
  const authData = useContext(AuthContext);
  console.log(authData);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
    } else if (email == "emp1@example.com" && password == "123") {
      setUser("employee")
    } else {
      alert("invalid");
    }
  }

  


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : ""}
    </>
  )
}

export default App
