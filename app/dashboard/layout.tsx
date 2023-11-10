import Avatar from "@/components/Avatar";
import { SideNav } from "../../components/navBar/SideNav";
import TopNav from "@/components/TopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full mobile:max-sm:flex-col ">
      <div className=" mobile:max-sm:hidden">
      <SideNav />
      </div>
      <div className="flex flex-col h-[100vh]">
        <TopNav />
        {children}
        
      </div>
      <div className=" mobile:max-sm:visible sm:hidden fixed bg-slate-200 bottom-0 w-full">
      <SideNav />
      </div>
    </main>
  );
}
