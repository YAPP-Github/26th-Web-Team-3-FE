"use client";

import * as styles from "./page.css";

const Terms = () => {
  return (
    <div className={styles.termsPage}>
      <h1 className={styles.title}>이용약관</h1>
      <div className={styles.content}>
        <p className={styles.subtitle}>본 이용약관은 Lettie (이하 "서비스")의 이용 조건을 규정합니다.</p>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 서비스 이용</h2>
          <p className={styles.text}>
            사용자는 이메일 계정, Google 계정, Naver 계정을 통해 로그인해야 서비스를 이용할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 사용자 의무</h2>
          <p className={styles.text}>
            사용자는 타인의 권리를 침해하거나 불법적인 목적으로 서비스를 사용해서는 안 됩니다.<br />
            사용자는 자신의 계정 정보를 안전하게 관리해야 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 지적재산권</h2>
          <p className={styles.text}>
            서비스와 관련된 모든 지적재산권은 당사에 귀속됩니다.<br />
            사용자는 서비스를 통해 생성한 콘텐츠를 개인적, 비상업적 목적으로만 사용할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 서비스 변경 및 중단</h2>
          <p className={styles.text}>
            당사는 사전 통지 없이 서비스를 변경하거나 중단할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. 책임 제한</h2>
          <p className={styles.text}>
            당사는 서비스 이용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. 준거법 및 관할</h2>
          <p className={styles.text}>
            본 약관은 대한민국 법률에 따라 해석되며, 관련 분쟁은 관할 법원의 전속관할로 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. 약관 변경</h2>
          <p className={styles.text}>
            당사는 본 약관을 변경할 수 있으며, 중요한 변경사항이 있을 경우 사용자에게 통지합니다.
          </p>
        </section>

        <div className={styles.footer}>
          <p>마지막 업데이트: 2025-04-15</p>
          <p>Contact: lettie.team@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;