"use client";

import NavbarMain from "@/shared/ui/navbar/navbar-main";
import PopupReport from "@/shared/ui/popup/popup-report";
import { overlay } from "overlay-kit";

const Home = () => {
  return (
    <div>
      <NavbarMain />
      <main>
        <h1>Home</h1>
        <div
          style={{
            height: "20rem",
          }}
        ></div>
        <button
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <PopupReport isOpen={isOpen} close={close} />;
            });
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          클릭 모달
        </button>
      </main>
    </div>
  );
};

export default Home;
