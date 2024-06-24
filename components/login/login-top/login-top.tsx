import Image from 'next/image';
import styles from './login-top.module.scss';

export default function LoginTop() {
  return (
    <dl className={styles.container}>
      <dt className={styles.imgBox}>
        <Image src="/images/login/logo.png" alt="로고" layout="fill" />
      </dt>
      <dd className={styles.text}>
        동그리나에서 <b>가족, 친구, 연인</b>과 함께 반려동물의 일상을 공유해보세요.
      </dd>
    </dl>
  );
}
