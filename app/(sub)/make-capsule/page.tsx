"use client";

import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import { overlay } from "overlay-kit";

import * as styles from "./page.css";
const MakeCapsule = () => {
  return (
    <div>
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
    </div>
  );
};

export default MakeCapsule;
