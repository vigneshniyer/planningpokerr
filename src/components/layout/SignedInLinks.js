import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux"
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/enterRoom">Enter Room</NavLink></li>
            <li><NavLink to="/"><a onClick={props.signOut}>Log Out</a></NavLink></li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">
                    { props.profile.initials }
                </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);