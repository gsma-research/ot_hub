import React from 'react';
import Layout from '@theme/Layout';
import FeatureCard from '@site/src/components/FeatureCard';
import styles from './index.module.css';

// Collaborators data
const collaborators = [
  { name: 'Huawei', logo: '/img/collaborators/huawei.png', url: 'https://huawei.com', scale: 1 },
  { name: 'Nvidia', logo: '/img/collaborators/nvidia.png', url: 'https://nvidia.com', scale: 1 },
  { name: 'Khalifa University', logo: '/img/collaborators/khalifa-university.png', url: 'https://ku.ac.ae', scale: 2 },
  { name: 'AT&T', logo: '/img/collaborators/att.png', url: 'https://att.com', scale: 1 },
  { name: 'Orange', logo: '/img/collaborators/orange.png', url: 'https://orange.com', scale: 1 },
  { name: 'Vodafone', logo: '/img/collaborators/vodafone.png', url: 'https://vodafone.com', scale: 1 },
  { name: 'Google', logo: '/img/collaborators/google.png', url: 'https://google.com', scale: 1 },
  { name: 'SoftBank', logo: '/img/collaborators/softbank.svg', url: 'https://softbank.com', scale: 1 },
];

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
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Collaborators Section - Partner logos
function CollaboratorsSection(): JSX.Element {
  return (
    <section className={styles.collaboratorsSection}>
      <h3 className={styles.collaboratorsTitle}>Our Collaborators</h3>
      <div className={styles.collaboratorsGrid}>
        {collaborators.map((collab) => (
          <a
            key={collab.name}
            href={collab.url}
            className={styles.collaboratorLogo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={collab.logo}
              alt={collab.name}
              style={collab.scale !== 1 ? { transform: `scale(${collab.scale})` } : undefined}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

// Mission Section - Atomicwork-style split layout
function MissionSection(): JSX.Element {
  return (
    <section className={styles.missionSection}>
      {/* The Challenge card */}
      <div className={styles.missionHeroCard}>
        <h3 className={styles.missionBlockTitle}>The Challenge</h3>
        <p>
          <strong>Connectivity</strong> underpins modern society, yet today's
          most advanced AI systems <strong>falter</strong> when applied to
          telecommunications. Frontier models produce{' '}
          <strong>30-40% incorrect responses</strong> on telecom-specific
          queries, <strong>hallucinate</strong> spectrum regulations, and
          struggle with the precision required for{' '}
          <strong>autonomous network operations</strong>. General-purpose AI
          does not speak the language of <strong>3GPP standards</strong>,{' '}
          <strong>ITU protocols</strong>, or real-world network troubleshooting.
          This domain gap threatens to delay the industry's path toward{' '}
          <strong>zero-touch, self-healing networks</strong>.
        </p>
      </div>

      {/* THE SOLUTION - Text Left, Placeholder Right */}
      <div className={styles.splitSection}>
        <div className={styles.splitTextColumn}>
          <h3 className={styles.missionBlockTitle}>The Solution</h3>
          <p>
            GSMA Open-Telco is where operators, researchers, and tech providers
            build telco-grade AI together.
          </p>
        </div>
        <div className={styles.splitImageColumn}>
          <img
            src="/videos/everyone.png"
            alt="Open Telco AI collaboration"
            className={styles.splitImage}
          />
        </div>
      </div>

      {/* JOIN US - Image Left, Text Right */}
      <div className={`${styles.splitSection} ${styles.splitSectionGap}`}>
        <div className={styles.splitImageColumn}>
          <img
            src="/videos/join_us.png"
            alt="Join the Open Telco AI community"
            className={styles.splitImage}
          />
        </div>
        <div className={styles.splitTextColumn}>
          <h3 className={styles.missionBlockTitle}>Join Us</h3>
          <p>
            We offer resources, benchmarks, and community to accelerate your
            work. Join competitions, contribute evaluations, or benchmark your
            models.
          </p>
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
        <MissionSection />
        <CollaboratorsSection />
      </main>
    </Layout>
  );
}
