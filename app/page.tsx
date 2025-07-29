import { mainLayout } from "@/shared/styles/base/global.css";
import NavbarMain from "@/shared/ui/navbar/navbar-main";
const Home = () => {
  return (
    <div className={mainLayout}>
      <NavbarMain />
      <main style={{ height: "20rem" }}>
        <h1>Home</h1>
      </main>
    </div>
  );
};

export default Home;
