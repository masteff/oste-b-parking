import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ signOut, floor }) => (
    <header>
        <div className="header">
            <div className="content_container">
                <div className="header_content">
                    <h1 className="header__title">oste-b parking</h1>
                    <button className="button button--link" onClick={signOut}>Logout</button>
                </div>
            </div>
        </div>
        <div className="page-header">
        <div className="header__link_button content_container" >
            <Link className="header__link" to='/u1' >
                <div className={floor !== "u1" ? "u1" : "u1_border"}>
                    U1
                </div>
            </Link>
            <Link className="header__link" to='/u2' >
                <div className={floor !== "u2" ? "u2" : "u2_border"}>
                    U2
                </div>
            </Link>
        </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
