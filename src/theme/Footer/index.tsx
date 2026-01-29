import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  const logoSrc = useBaseUrl('/img/footer/gsma-logo.svg');
  const xLogoSrc = useBaseUrl('/img/footer/x-logo-black.png');
  const linkedinSrc = useBaseUrl('/img/footer/linkedin.png');
  const youtubeSrc = useBaseUrl('/img/footer/youtube.png');
  const instagramSrc = useBaseUrl('/img/footer/instagram.png');
  const appleLogoSrc = useBaseUrl('/img/footer/logo_apple.png');
  const googlePlayLogoSrc = useBaseUrl('/img/footer/logo_google_play.png');
  const huaweiLogoSrc = useBaseUrl('/img/footer/logo_huawei.png');

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.innerFooter}>
        {/* Logo Column */}
        <div className={styles.column}>
          <a href="https://www.gsma.com/" target="_blank" rel="noopener noreferrer">
            <img src={logoSrc} alt="GSMA logo" className={styles.logo} />
          </a>
        </div>

        {/* Solutions and Impact Column */}
        <div className={styles.column}>
          <div className={styles.columnName}>
            <a href="https://www.gsma.com/solutions-and-impact/">Solutions and impact</a>
          </div>
          <ul>
            <li><a href="https://www.gsma.com/solutions-and-impact/industry-services/">Industry Services</a></li>
            <li><a href="https://www.gsma.com/solutions-and-impact/training-and-consulting/">Training and consulting</a></li>
            <li><a href="https://www.gsma.com/solutions-and-impact/connectivity-for-good/">Connectivity for Good</a></li>
            <li><a href="https://www.gsma.com/solutions-and-impact/technologies/">Technologies</a></li>
            <li><a href="https://www.gsma.com/solutions-and-impact/industries/">Industries</a></li>
          </ul>
        </div>

        {/* Get Involved Column */}
        <div className={styles.column}>
          <div className={styles.columnName}>
            <a href="https://www.gsma.com/get-involved/">Get involved</a>
          </div>
          <ul>
            <li><a href="https://www.gsma.com/get-involved/gsma-membership/">Membership</a></li>
            <li><a href="https://www.gsma.com/get-involved/gsma-foundry/">GSMA Foundry</a></li>
            <li><a href="https://www.gsma.com/events/">Events</a></li>
            <li><a href="https://www.gsma.com/gsma-app/">Download the GSMA app</a></li>
            <li className={styles.logoList}>
              <a href="https://apps.apple.com/ie/app/gsma/id6448799002" target="_blank" rel="noopener noreferrer">
                <img src={appleLogoSrc} alt="Apple app logo" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.gsma.memberships" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayLogoSrc} alt="Google play logo" />
              </a>
              <a href="https://appgallery.huawei.com/app/C109144597" target="_blank" rel="noopener noreferrer">
                <img src={huaweiLogoSrc} alt="Huawei gallery logo" />
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Column */}
        <div className={styles.column}>
          <div className={styles.columnName}>
            <a href="https://www.gsma.com/about-us/">About us</a>
          </div>
          <ul>
            <li><a href="https://www.gsma.com/wp-content/uploads/2025/06/GSMA_Annual-report-2024_FINAL.pdf" target="_blank" rel="noopener noreferrer">Annual report 2024</a></li>
            <li><a href="https://www.gsma.com/about-us/contact-us/">Contact us</a></li>
            <li><a href="https://www.gsma.com/about-us/contact-us/regional-sites/">Regional sites</a></li>
            <li><a href="https://www.gsma.com/about-us/contact-us/worldwide-offices/">Worldwide offices</a></li>
            <li><a href="https://www.gsma.com/about-us/careers/">Careers</a></li>
          </ul>
        </div>

        {/* Newsroom Column */}
        <div className={styles.column}>
          <div className={styles.columnName}>
            <a href="https://www.gsma.com/newsroom/">Newsroom</a>
          </div>
          <ul>
            <li><a href="https://www.gsma.com/newsroom/">Latest news</a></li>
            <li><a href="https://www.gsma.com/newsroom/press-releases/">Press releases</a></li>
            <li><a href="https://www.gsma.com/newsroom/resources/">The archive</a></li>
          </ul>
        </div>

        {/* Quick Links & Legal & Social Column */}
        <div className={styles.column}>
          <div className={styles.columnName}>Quick links</div>
          <ul>
            <li><a href="https://www.gsma.com/solutions-and-impact/industry-services/imei-database/">IMEI Database</a></li>
          </ul>
          <div className={styles.columnNameLegal}>
            <a href="https://www.gsma.com/about-us/legal/">Legal</a>
          </div>
          <ul>
            <li>
              <button className={styles.cookieButton}>Manage Cookies</button>
            </li>
          </ul>
          <div className={styles.socialButtons}>
            <a href="https://twitter.com/gsma" target="_blank" rel="noopener noreferrer">
              <img src={xLogoSrc} alt="Twitter X logo" />
            </a>
            <a href="https://www.linkedin.com/company/gsma/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinSrc} alt="LinkedIn logo" />
            </a>
            <a href="https://www.youtube.com/gsma" target="_blank" rel="noopener noreferrer">
              <img src={youtubeSrc} alt="YouTube logo" />
            </a>
            <a href="https://www.instagram.com/gsmaglobal/" target="_blank" rel="noopener noreferrer">
              <img src={instagramSrc} alt="Instagram logo" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Copyright */}
      <div className={styles.bottomFooter}>
        <div>
          © Copyright 2026 GSM Association. The GSM logo is registered and owned by the GSM Association.
        </div>
      </div>
    </footer>
  );
}
