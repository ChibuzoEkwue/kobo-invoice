import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
const Navigation = () => {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<div className={styles.logo}>KOBO</div>
				<ul className={styles.navList}>
					<li>Home</li>
					<li>Blog</li>
					<li>Resources</li>
				</ul>
				<ul>
					<li>
						<Link href={"/auth/login"}>Login</Link>
					</li>
					<li className="cta">
						<Link href={"/auth/signup"}>Get Started</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
