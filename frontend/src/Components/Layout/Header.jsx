import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Search from './Search'
const Header = () => {
	return (
		<>
			<nav className="navbar row">
				<div className="col-12 col-md-3">
					<div className="navbar-brand">
						<img src="./images/shopit_logo.png" />
					</div>
				</div>
				<Search />
			
				<div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
					{/* <button className="btn" id="login_btn">Login</button> */}
					<Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
					<span id="cart" className="ml-3">Cart</span>
					<span className="ml-1" id="cart_count">2</span>
				</div>
			</nav>
		</>
	)
}

export default Header