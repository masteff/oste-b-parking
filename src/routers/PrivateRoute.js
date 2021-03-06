import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';
import DatePicker from '../components/DatePicker'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header floor={props.match.path.substring(1,3)} />
                    <div className='content_container_color'>
                        <div className= 'main_content'>
                            <Component {...props}/>
                            <DatePicker />
                        </div>
                    </div>
                </div>
            ) : (
                    <Redirect to='/' />
                )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)