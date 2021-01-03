import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "assets/img/logo.svg";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<a className="mainLogo" href="/">
				<img src={logo} width={198} height={28} alt="Logo"/>
			</a>
			<nav>
				<ul>
					<li>
						<Link to="/login">Auth</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
