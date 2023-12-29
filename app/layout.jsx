import "@/app/globals.css";
import NavBar from "@/components/NavBar/navbar";

export const metadata = {
  title: "SATS",
  description: "Simple Applicant Tracking System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="dark:bg-black h-full bg-gray-100">
        <NavBar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
