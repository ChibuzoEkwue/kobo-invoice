import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
  return (
		<main className={styles.homepage}>
			<div className="container">
				<div className={styles.content}>
					<h2>
						Welcome to Kobo Invoices, where streamlined invoicing meets
						effortless financial management. Experience the ease of creating,
						sending, and tracking invoices with precision and style.
					</h2>
					<h3> Sign up now to transform your billing experience.</h3>

          <Link href={'/auth/signup'} className='cta'>Sign Up</Link>
				</div>
			</div>
		</main>
	);
}
