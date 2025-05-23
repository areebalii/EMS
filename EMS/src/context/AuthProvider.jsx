import { createContext, useEffect, useState } from "react"
import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    // Only set if not already present
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      SetLocalStorage()
    }

    const { employees, admin } = GetLocalStorage()
    setUserData({ employees, admin })
  }, [])



  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      <div>{children}</div>
    </AuthContext.Provider>
  )
}

export default AuthProvider