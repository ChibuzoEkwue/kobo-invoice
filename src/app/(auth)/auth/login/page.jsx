import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";

const LoginPage = () => {
	return (
		<main className={styles.loginPage}>
			<Link href="/" className={styles.back}>
				<FaArrowLeft /> <span> Go Back</span>
			</Link>
			<div className={styles.content}>
				<form className={styles.form}>
					<h3>Login</h3>
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
					Login with Google
				</button>
				<p className={styles.footer}>
					Don&apos;t Have an account{" "}
					<Link href={"/auth/signup"}>create one</Link>
				</p>
			</div>
		</main>
	);
};

export default LoginPage;
