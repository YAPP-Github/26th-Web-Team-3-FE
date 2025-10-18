"use client";

import * as styles from "./page.css";

const Privacy = () => {
  return (
    <div className={styles.privacyPage}>
      <h1 className={styles.title}>개인정보 처리방침</h1>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 수집하는 정보</h2>
          <p className={styles.text}>
            당 서비스는 다음과 같은 정보를 수집할 수 있습니다: • 로그인 정보 (이메일)
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 정보 사용 목적</h2>
          <p className={styles.text}>
            수집된 정보는 다음 목적으로 사용됩니다: • 서비스 제공 및 개선 • 사용자 인증 • 고객 지원
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 정보 저장 및 보안</h2>
          <p className={styles.text}>
            • 당 서비스는 적절한 기술적, 관리적 조치를 통해 정보를 보호합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 제3자 공유</h2>
          <p className={styles.text}>
            • 당사는 사용자의 개인정보를 제3자와 공유하지 않습니다. 단, 법적 요구가 있는 경우는 예외입니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. 사용자 권리</h2>
          <p className={styles.text}>
            • 사용자는 자신의 계정 정보에 대한 삭제를 요청할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. 정책 변경</h2>
          <p className={styles.text}>
            • 본 정책은 변경될 수 있으며, 중요한 변경사항이 있을 경우 사용자에게 통지합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. 문의</h2>
          <p className={styles.text}>
            • 개인정보 관련 문의사항은 lettie.team@gmail.com로 연락주시기 바랍니다.
          </p>
        </section>

        <div className={styles.infoBox}>
          <p><strong>마지막 업데이트: 2025-08-13</strong></p>
          <p><strong>로그인 정보 (이메일 또는 Google)</strong></p>
          <ul className={styles.list}>
            <li>• 구독 내역</li>
            <li>• 서비스 제공 및 개선</li>
            <li>• 사용자 인증</li>
            <li>• 고객 지원</li>
            <li>• 당사는 적절한 기술적, 관리적 조치를 통해 정보를 보호합니다.</li>
          </ul>
        </div>

        <div className={styles.footer}>
          <p>Contact: lettie.team@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;