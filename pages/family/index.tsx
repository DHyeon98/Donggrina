import CalendarInstance from '@/utils/date/date.utils';
import styles from './index.module.scss';
import FamilyDiary from '@/components/family/diary/family-diary';
import FamilyGrowth from '@/components/family/growth/family-growth';
import FamilySchedule from '@/components/family/schedule/family-schedule';
import { deleteCookie, getCookie } from 'cookies-next';

export default function Family() {
  console.log(getCookie('AccessToken'));
  function deleteCookies(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  const handleDelete = () => {
    deleteCookies('AccessToken');
    console.log('a');
  };
  return (
    <section className={styles['family-section']}>
      <div className={styles.today}>{CalendarInstance.getToday()}</div>
      <button onClick={handleDelete}>버튼</button>
      <FamilyDiary />
      <FamilyGrowth />
      <FamilySchedule />
    </section>
  );
}
