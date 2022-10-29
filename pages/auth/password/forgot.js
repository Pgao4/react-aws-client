import {useState} from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage} from '../../../helpers/alert'
import {API} from '../../../config'
import {withRouter} from 'next/router'
import Layout from '../../../components/Layout'
import Router from 'next/router'

const ForgotPassword = () => {
    const [state, setState] = useState({
        name:'',
        token:'',
        buttonText: 'Forgot Password',
        success:'',
        error:''
    })

    const {email, token, buttonText, success, error} = state

    const handleChange = e => {
        setState({...state, email: e.target.value, success:'', error: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        //console.log('post email to ', email)
        try {
            const response = await axios.put(`${API}/forgot-password`, {email})
            //console.log('FORGORT PASSWORD', response)
            setState({
                ...state, email:'', buttonText: 'Done', success: response.data.message
            })
        }catch(error) {
            console.log('Forgot pw error', error)
            setState({
                ...state, buttonText: 'Forgot Password', error: error.response.data.error
            })
        }
    }

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>    
                <input type="email" 
                className='form-control' 
                onChange={handleChange} 
                value= {email} 
                placeholder="Type your email" 
                required/>
            </div>
            <div>
                <button className="btn btn-outline-warning">{buttonText}</button>
            </div>
        </form>
    )

    return(
        <Layout>
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <h1>Forgot Password</h1>
                    <br/>
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {passwordForgotForm()}
                </div> 
            </div>
        </Layout>
    )
}

export default ForgotPassword