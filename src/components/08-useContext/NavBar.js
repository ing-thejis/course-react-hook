import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">useContext</Link>

			<div className="collapse navbar-collapse">
			
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link" to="/">Home</NavLink>
					<NavLink className="nav-item nav-link" to="/about">About</NavLink>
					<NavLink className="nav-item nav-link" to="/login">Login</NavLink>
				</div>
			
			</div>
		</nav>
	)
}

export default NavBar