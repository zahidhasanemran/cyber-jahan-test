import { createContext, useContext, useMemo, useState } from "react"
import { useMeData } from "store/Others/User/useMeData"

const authContextDefaultValues = {
  user: null,
  setAuth: (status) => {},
  saveUser: (info) => {},
  isAuth: null,
}

const AuthContext = createContext(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(null)

  const setAuth = (status) => {
    setIsAuth(status)
  }
  const saveUser = (info) => {
    setUser(info)
  }

  const { data } = useMeData()

  const value = useMemo(
    () => ({ isAuth, setAuth, user, saveUser }),
    [user, isAuth]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
