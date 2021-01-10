import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {selectAuthorized} from "state/ducks/meta";
import {signOut} from "state/ducks/user";
import styles from "./Header.module.scss";
import logo from "assets/img/logo.svg";

const Header = () => {

	const dispatch = useDispatch()

	const [open, setOpen] = useState(false)

	const isAuthorized = useSelector(selectAuthorized)

	return (
		<header className='headerContainer'>
			<a className="mainLogo" href="/">
				<img src={logo} width={198} height={28} alt="Logo"/>
			</a>

			{isAuthorized ?
				<div className={`nav ${styles.nav}`}>
					<nav>
						<Link to="/leaderboard">Leaderboard</Link>
						<Link to="/network">Network</Link>
					</nav>
					<div className={styles.profileContainer}>
						<div className={styles.dropdown}>
							<div className='d-flex'>
								<div className={styles.imageBox}>
									<Link to="/profile">
										<div className={styles.image} />
									</Link>
								</div>
								<button className={styles.button} onClick={() => setOpen(prevState => !prevState)}>
									Viktor Gorosh
									<span className={styles.icon}>
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
											<path fill="#788B99" fill-rule="evenodd" d="M8 .5c0-.273-.227-.5-.5-.5h-7C.227 0 0 .227 0 .5c0 .133.055.258.148.352l3.5 3.5A.497.497 0 0 0 4 4.5a.497.497 0 0 0 .352-.148l3.5-3.5A.497.497 0 0 0 8 .5z" />
										</svg>
									</span>
								</button>
							</div>
							<div className={`${styles.dropdownPanel} ${open ? styles.active : ''}`}>
								<Link to="/profile" onClick={() => setOpen(false)}>My Profile</Link>
								<Link to="/login" onClick={() => {
									dispatch(signOut())
									setOpen(false)
								}}>Sign out</Link>
							</div>
						</div>
					</div>
				</div>
			:
				<Redirect to='/login'/>
			}

		</header>
	)
}

export default Header
