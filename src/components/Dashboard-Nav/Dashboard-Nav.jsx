import React from "react";
import styles from "./Dashboard-Nav.module.css";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import Image from "next/image";

const DashboardNav = () => {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<div className={styles.logo}>KOBO</div>
				<ul className={styles.navList}>
					<li className={styles.active}>
						<MdDashboard />
						<span>Dashboard</span>
					</li>
					<li>
						<BsFillPeopleFill />
						<span>Clients</span>
					</li>
					<li>
						<FaFileInvoiceDollar />
						<span>Invoices</span>
					</li>
				</ul>
				<div className={styles.userDetails}>
					<h3>Welcome, Chibuzo</h3>
					<Image
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						height={40}
						width={40}
						alt=''
					/>
				</div>
			</nav>
		</header>
	);
};

export default DashboardNav;
