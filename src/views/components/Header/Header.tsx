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
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/leaderboard">Leaderboard</Link>
					</li>
					<li>
						<Link to="/network">Network</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
