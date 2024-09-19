import {Hello} from '@frontend/ui/Hello';
import styles from './page.module.scss';
import {Suspense} from 'react';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        NextJS front-end
        <hr />
        Hello:
        <Suspense fallback={<div>Loading...</div>}>
          <Hello />
        </Suspense>
      </main>
    </div>
  );
}
