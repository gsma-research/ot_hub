import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  ctaText?: string;
  animationDelay?: number;
  videoSrc?: string;
  imageSrc?: string;
}

export default function FeatureCard({
  title,
  description,
  href,
  ctaText,
  animationDelay = 0,
  videoSrc,
  imageSrc,
}: FeatureCardProps): JSX.Element {
  const isExternal = href.startsWith('http');
  const linkProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href };

  const CardWrapper = isExternal ? 'a' : Link;
  const hasMedia = videoSrc || imageSrc;

  return (
    <CardWrapper
      className={`${styles.card} ${hasMedia ? styles.cardWithMedia : ''}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      {...linkProps}
    >
      {videoSrc && (
        <video
          className={styles.cardMedia}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {imageSrc && !videoSrc && (
        <img
          className={styles.cardMedia}
          src={imageSrc}
          alt=""
          aria-hidden="true"
        />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {ctaText && (
          <div className={styles.cardFooter}>
            <span className={styles.cardCta}>
              {ctaText}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </span>
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
