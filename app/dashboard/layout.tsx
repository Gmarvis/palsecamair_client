import Avatar from "@/components/Avatar";
import { SideNav } from "../../components/navBar/SideNav";
import TopNav from "@/components/TopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full ">
      <SideNav />
      <div className="flex flex-col h-[100vh]">
        <TopNav />
        {children}
      </div>
    </main>
  );
}
