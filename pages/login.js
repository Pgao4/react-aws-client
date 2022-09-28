import Layout from '../components/Layout'
import { useState, useEffect } from "react"
import Link from 'next/link'
import Router from 'next/router'
import axios from "axios";
import { showSuccessMessage, showErrorMessage} from '../helpers/alert'
import {API} from '../config'

const Login = () => {
  const [state, setState] = useState({
    email: "kyrogao97@gmail.com",
    password: "ws980811",
    error: "",
    success: "",
    buttonText: "Login",
  })

  const { email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setState({...state, buttonText: 'Logging in'})
    try {
      const response  = await axios.post(`${API}/login`, {
        email,
        password,
      })
      console.log(response)//user token
    } catch (error) {
      console.log(error)
      setState({...state, buttonText:'Login', error: error.response.data.error})
    }
  }

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          placeholder="Type your email"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          placeholder="Type your password"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );
    return (
      <Layout>
      {success && showSuccessMessage(success)}
      {error && showErrorMessage(error)}
        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
          <br />
          {loginForm()}
          {/* <hr />
          {JSON.stringify(state)} */}
        </div>
      </Layout>
    );
}
  
export default Login