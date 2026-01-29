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
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Mission Section - Three-part narrative: Challenge → Solution → Call to Action
function MissionSection(): JSX.Element {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContent}>
        <h2 className={styles.missionHeadline}>Making AI speak telecom.</h2>

        {/* The Challenge */}
        <div className={styles.missionBlock}>
          <h3 className={styles.missionBlockLabel}>The Challenge</h3>
          <p>
            Connectivity underpins modern society, yet today's most advanced AI
            systems falter when applied to telecommunications. Frontier models
            produce 30-40% incorrect responses on telecom-specific queries,
            hallucinate spectrum regulations, and struggle with the precision
            required for autonomous network operations. General-purpose AI does
            not speak the language of 3GPP standards, ITU protocols, or
            real-world network troubleshooting. This domain gap threatens to
            delay the industry's path toward zero-touch, self-healing networks.
          </p>
        </div>

        {/* The Solution */}
        <div className={styles.missionBlock}>
          <h3 className={styles.missionBlockLabel}>The Solution</h3>
          <p>
            Open Telco AI is the industry's response—an open, neutral hub where
            leading operators, research institutions, and technology providers
            collaborate to build telco-grade AI foundations. Supported by
            Deutsche Telekom, SK Telecom, Huawei, Hugging Face, and the Linux
            Foundation, this GSMA-led initiative delivers open benchmarks,
            shared datasets, and community-driven model development. Through the
            Telco Capability Index and rigorous evaluation frameworks, we are
            establishing the standard of truth for AI performance in
            telecommunications.
          </p>
        </div>

        {/* The Call to Action */}
        <div className={styles.missionBlock}>
          <h3 className={styles.missionBlockLabel}>Join Us</h3>
          <p>
            Whether you are a network engineer seeking better tools, a
            researcher advancing AI capabilities, or a developer building
            next-generation telco applications, Open Telco AI provides the
            resources, benchmarks, and community to accelerate your work. Join
            challenges like the AI Telco Troubleshooting competition, contribute
            to open-source evaluations, or benchmark your models against
            industry standards. The future of intelligent networks is being
            built in the open—and your expertise belongs here.
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
      </main>
    </Layout>
  );
}
