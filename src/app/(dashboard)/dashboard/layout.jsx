import DashboardNav from "@/components/Dashboard-Nav/Dashboard-Nav";

export const metadata = {
	title: "Dashboard - Kobo",
	description: "An invoice generator and payment platform",
};

export default function DashboardLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<DashboardNav />
				{children}
			</body>
		</html>
	);
}
