"use client";

import LettieImage from "@/shared/assets/character/lettie_animate.png";
import GoogleIcon from "@/shared/assets/icon/google.svg";
import NaverIcon from "@/shared/assets/icon/naver.svg";
import LogoImage from "@/shared/assets/logo/logo_symbol_wordmark.svg";
import { maxWidth } from "@/shared/styles/base/global.css";
import { getOAuthUrl } from "../_api/auth.api";

import Image from "next/image";

import * as styles from "./page.css";

const LoginPage = () => {
  const handleGoToOAuth = (provider: "naver" | "google") => {
    getOAuthUrl(provider).then((url) => {
      const encodedUrl = encodeURI(url);
      window.location.href = encodedUrl;
    });
  };

  return (
    <div className={maxWidth}>
      <header className={styles.header}>
        <LogoImage />
      </header>
      <div className={styles.contentsContainer}>
        <h1 className={styles.title}>
          타임캡슐을 만들고 <br />
          친구들과 추억을 나눠요
        </h1>
        <p className={styles.caption}>로그인하고 모든 기능을 사용해보세요!</p>
        <Image src={LettieImage} alt="Lettie" className={styles.lettieImage} />
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="button"
            aria-label="네이버 계정으로 계속하기"
            onClick={() => handleGoToOAuth("naver")}
          >
            <NaverIcon />
            네이버 계정으로 계속하기
          </button>
          <button
            className={styles.button}
            type="button"
            aria-label="구글 계정으로 계속하기"
            onClick={() => handleGoToOAuth("google")}
          >
            <GoogleIcon />
            구글 계정으로 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
