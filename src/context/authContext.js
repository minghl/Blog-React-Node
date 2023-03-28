import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext()

// localstorage 存储地点
export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")||null))

    const login = async(inputs)=>{
        const res = await axios.post("/auth/login",inputs)
        setCurrentUser(res.data)
    }
    const logout = async(inputs)=>{
        await axios.post("/auth/logout")
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>
    )
}