import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Hey! I'm a CS major taking ECO 211. Figured I'd share my notes to help people out - I know how tough it can be juggling different subjects !!! 😬
        </p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={`container ${styles.contentContainer}`}>
      <div className={styles.cardGrid}>
        <div className={styles.featureCard}>
          <h2>📖 Notes</h2>
          <p>Access detailed Macroeconomics 211 summaries and explanations.</p>
          <Link className="button button--outline button--primary" to="/docs/summaries">
            View Notes
          </Link>
        </div>
        <div className={styles.featureCard}>
          <h2>❓ Practice Questions</h2>
          <p>Quiz yourself with questions pulled straight from the slides.</p>
          <Link className="button button--outline button--primary" to="/docs/practice/">
            View Questions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Macroeconomics 211 Notes">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
