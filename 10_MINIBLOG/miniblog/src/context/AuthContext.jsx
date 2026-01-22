import { useContext, createContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({children, value}) {
    return <AuthContext.Provier value={value}>{children}</AuthContext.Provier>
}

export function useAuthValue() {
    return useContext(AuthContext)
}