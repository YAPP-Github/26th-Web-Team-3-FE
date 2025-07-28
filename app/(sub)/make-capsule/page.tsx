"use client";

import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import { overlay } from "overlay-kit";
import PrivateStep from "./_components/steps/private-step";
import * as styles from "./page.css";

const MakeCapsule = () => {
  return (
    <>
      <NavbarDetail
        renderRight={() => (
          <button
            className={styles.closeButton}
            onClick={() =>
              overlay.open(({ isOpen, close }) => (
                <PopupCancelCreation isOpen={isOpen} close={close} />
              ))
            }
          >
            닫기
          </button>
        )}
      />
      <div className={styles.container}>
        {/* <IntroStep /> */}
        {/* <DateStep /> */}
        <PrivateStep />
      </div>
    </>
  );
};

export default MakeCapsule;
