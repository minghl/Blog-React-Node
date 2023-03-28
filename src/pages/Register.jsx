import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [err,setError] = useState(null) // 现实已注册账号错误变量

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    // 防止单机刷新界面
    e.preventDefault()
    try {
      await axios.post("/auth/register", inputs) //向服务器发请求
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='email' onChange={handleChange} />
        <input required type="text" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <br />
          <Link to='/login'>
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register