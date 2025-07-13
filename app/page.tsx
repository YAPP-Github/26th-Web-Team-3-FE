import NavHome from "@/shared/ui/nav-home/nav-home";
import Link from "next/link";

const Home = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <header>
        <NavHome />
      </header>
      <main style={{ marginTop: "6.4rem" }}>
        <h1>Home</h1>
      </main>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;
