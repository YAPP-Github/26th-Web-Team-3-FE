"use client";

import MenuIcon from "@/shared/assets/icon/menu.svg";
import Dropdown from "@/shared/ui/dropdown";
import LikeButton from "@/shared/ui/like-button";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";

const CapsuleDetailPage = () => {
  return (
    <div>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton isLiked={false} />
              <Dropdown>
                <Dropdown.Trigger>
                  <MenuIcon />
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item label="신고하기" />
                  <Dropdown.Item label="나기기" />
                </Dropdown.Content>
              </Dropdown>
            </>
          );
        }}
      />
    </div>
  );
};

export default CapsuleDetailPage;
