import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

import { Favorites } from "./favorites.js";

import { ScrollingProvider, Section } from "react-scroll-section";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light m-1 pl-5">
			<div className="container main p-1 m-0">
				<Link to="/">
					<img src="https://cdn.iconscout.com/icon/free/png-512/starwars-5-555964.png" />
				</Link>
			</div>
			<Favorites />
		</nav>
	);
};
