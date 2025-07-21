import NavbarMain from "@/shared/ui/navbar/navbar-main";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-capsule";
const Home = () => {
  return (
    <div>
      <NavbarMain />
      <main>
        <h1>Home</h1>
        <PopupWarningLetter />
      </main>
    </div>
  );
};

export default Home;
