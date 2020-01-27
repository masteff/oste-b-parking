import React, {useState} from 'react'
import { startLogin, startLogout, startCreate, startVerify } from '../actions/auth'
import { connect } from 'react-redux'

const SignIn = (props) => {

    let name

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onCreate = () => {
        if (/[a-z]+\_[a-z,\-]+\@gmx.de/.test(email) || /[a-z]+\.[a-z,\-]+\@olympus-oste.eu/.test(email)){
            setMessage('Bitte überprüfe dein Postfach!')
            name = (email.substr(0,1) + email.split('.')[1].substr(0,1)).toUpperCase()
            props.create(email, password, name)
        }
        else{
            setMessage('Bitte Olympus Adresse verwenden!')
        }
    }
    const onSignIn = () => {
        props.signIn(email, password)
    }
    const onVerify = () => {
        console.log('onVerify')
        props.verify()
    }

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">oste-b parking</h1>
                    <input type='text' placeholder='max.mustermann@olympus-oste.eu' onChange={onEmailChange} />
                    <input type='password' placeholder='Passwort' onChange={onPasswordChange} />
                    {/* <input type='text' placeholder='Username' onChange={onNameChange} /> */}
                    <button className="button" onClick={onSignIn}>Einloggen</button>
                    <button className="button" onClick={onCreate}>Registrieren</button>
                    <label style={{height: '2rem', marginTop: '2rem'}}>{message}</label>
                    {/* <button onClick={onVerify}>Verify</button> */}
                </div>
            </div>
        )
}

const matchDispatchToProps = (dispatch) => ({
    signIn: (email, password) => dispatch(startLogin(email, password)),
    signOut: () => dispatch(startLogout()),
    create: (email, password, name) => dispatch(startCreate(email, password, name)),
    verify: () => dispatch(startVerify())
})

export default connect(undefined, matchDispatchToProps)(SignIn)