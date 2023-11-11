import Image from "next/image";
import NavBar from "../components/navBar/NavBar";

export default function Home() {
  return (
    <main className="px-16 mobile:max-sm:px-2">
      <NavBar />
      <h1>Welcome to PalseCamair</h1>
    </main>
  );
}
