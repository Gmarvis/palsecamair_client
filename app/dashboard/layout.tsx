import Avatar from "@/components/Avatar";
import { SideNav } from "../../components/navBar/SideNav";
import TopNav from "@/components/TopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  flex-col">
        <TopNav />
      <div className="flex">
      <SideNav />
      {children}
      </div>
    </main>
  );
}
