import React from "react";
import styles from "./Header.module.scss";
import logo from "assets/img/logo.svg";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<a className="mainLogo" href="/">
				<img src={logo} width={198} height={28} alt="Logo"/>
			</a>
		</header>
	)
}

export default Header
