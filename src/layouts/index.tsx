import { Outlet } from 'umi'
import styles from './index.less';
import { MenuBar } from '@/components';
import { useLocation } from 'umi';

export default function Layout() {
  const location = useLocation();
  const paths = ['', '/order', '/user'];

  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.bottom}>
        <MenuBar
          show={paths.includes(location.pathname)}
          pathname={location.pathname}
        />
      </div>
    </div>
  );
}
