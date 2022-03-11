import React from 'react'
import './navbar.css'

export const Navbar = () => {
	return (
		<>
			<div className="nav-col-1">
				<a>
					<div className="logo"></div>
				</a>
				<input className="searchbar" placeholder="busqueda"></input>
			</div>
			<div className="nav-col-2">
				<ul>
					<li>Address</li>
					<li>Categories</li>
					<li>Offers</li>
					<li>History</li>
					<li>Market</li>
					<li>Fashion</li>
					<li>Sell</li>
					<li>Support</li>
				</ul>
			</div>
		</>
	)
}
