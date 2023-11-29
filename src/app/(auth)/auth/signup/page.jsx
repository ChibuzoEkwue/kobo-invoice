import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";


const SignUpPage = () => {
	return (
		<main className={styles.loginPage}>
			<Link href="/" className={styles.back}>
				<FaArrowLeft /> <span> Go Back</span>
			</Link>
			<div className={styles.content}>
				<form className={styles.form}>
					<h3>Create Account</h3>
					<div className={styles.usersName}>
						<div className={styles.inputContainer}>
							<label>First Name</label>
							<input type="text" />
						</div>
						<div className={styles.inputContainer}>
							<label>Last Name</label>
							<input type="text" />
						</div>
					</div>
					<div className={styles.inputContainer}>
						<label>Email address</label>
						<input type="email" />
					</div>
					<div className={styles.inputContainer}>
						<label>Password</label>
						<input type="password" />
					</div>
					<button className={styles.submit} type="submit">
						Submit
					</button>
				</form>
				<h4>Or</h4>

				<button className={styles.google}>
					<FcGoogle />
					Sign up with Google
				</button>
				<p className={styles.footer}>
					Have an account <Link href={"/auth/login"}>login</Link>
				</p>
			</div>
		</main>
	);
};

export default SignUpPage;
