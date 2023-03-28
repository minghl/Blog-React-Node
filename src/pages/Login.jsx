import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "" 
  })

  const [err,setError] = useState(null) // 现实已注册账号错误变量

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)


  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    // 防止单机刷新界面
    e.preventDefault()
    try {
      // await axios.post("/auth/login", inputs) //向服务器发请求
      await login(inputs)
      navigate("/")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input required type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <br />
          <Link to='/register'>
            Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login