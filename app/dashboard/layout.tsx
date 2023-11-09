import Avatar from "@/components/Avatar";
import { SideNav } from "../../components/navBar/SideNav";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full ">
      <SideNav />
      <div className="flex flex-col h-[100vh] absolute">
        <TopNav />
        {children}
        <div className="relative bg-red-600 w-full bottom-100">
        <MobileNav />
        </div>
      </div>
     
    </main>
  );
}
