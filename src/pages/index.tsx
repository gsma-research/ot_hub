import React from 'react';
import Layout from '@theme/Layout';
import FeatureCard from '@site/src/components/FeatureCard';
import styles from './index.module.css';

// Feature card data
const features = [
  {
    title: 'Telco Capability Index',
    description:
      'Track performance over time in frontier models on telecommunication tasks',
    href: '/leaderboard/tci',
    videoSrc: '/videos/telco_capability.mp4',
  },
  {
    title: 'Models',
    description:
      'To achieve L5 autonomous level in telecoms, we need specialised models that can be deployed at scale',
    href: '/models',
    videoSrc: '/videos/telco_models.mp4',
  },
  {
    title: 'Data',
    description:
      'We bring together experts across the industry to open-source massive datasets',
    href: '/data',
    videoSrc: '/videos/dataa.mp4',
  },
  {
    title: 'Compute',
    description:
      'We make compute available for developers building open-source models',
    href: '/resources',
    videoSrc: '/videos/compute.mp4',
  },
];

// Features Section - 4 horizontal cards
function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              videoSrc={feature.videoSrc}
              imageSrc={feature.imageSrc}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Homepage Component
export default function Home(): JSX.Element {
  return (
    <Layout
      title="Open Telco - AI Benchmarks for Telecommunications"
      description="GSMA's industry-standard benchmark suite for evaluating language models on telecom-specific tasks. Measure reasoning, troubleshooting, and network management capabilities."
    >
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
