import { SideNav } from "../components/navBar/SideNav";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <main>
        <SideNav />
        {children}
      </main>
    </html>
  );
}
