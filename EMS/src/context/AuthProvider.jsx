import { createContext, useEffect, useState } from "react"
import { GetLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employees, admin } = GetLocalStorage()
    setUserData({ employees, admin })
  }, [])


  return (
    <AuthContext.Provider value={userData} >
      <div>{children}</div>
    </AuthContext.Provider>
  )
}

export default AuthProvider