import { SideNav } from "../components/navBar/SideNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideNav />
      {children}
    </main>
  );
}
