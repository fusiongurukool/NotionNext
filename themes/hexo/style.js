/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * è¿™é‡Œçš„cssæ ·å¼åªå¯¹å½“å‰ä¸»é¢˜ç”Ÿæ•ˆ
 * ä¸»é¢˜å®¢åˆ¶åŒ–css
 * @returns
 */
const Style = () => {
  // ä»Žé…ç½®ä¸­èŽ·å–ä¸»é¢˜è‰²ï¼Œå¦‚æžœæ²¡æœ‰é…ç½®åˆ™ä½¿ç”¨é»˜è®¤å€¼ #928CEE
  const legacyThemeColor = siteConfig('HEXO_THEME_COLOR', '#928CEE', CONFIG)
  const primary = siteConfig('HEXO_COLOR_PRIMARY', legacyThemeColor, CONFIG)
  const primaryDark = siteConfig('HEXO_COLOR_PRIMARY_DARK', primary, CONFIG)
  const background = siteConfig('HEXO_COLOR_BG', '#f5f5f5', CONFIG)
  const backgroundDark = siteConfig('HEXO_COLOR_BG_DARK', '#000000', CONFIG)
  const surface = siteConfig('HEXO_COLOR_CARD', '#ffffff', CONFIG)
  const surfaceDark = siteConfig('HEXO_COLOR_CARD_DARK', '#101414', CONFIG)
  const title = siteConfig('HEXO_COLOR_TITLE', '#4b5563', CONFIG)
  const titleDark = siteConfig('HEXO_COLOR_TITLE_DARK', '#f3f4f6', CONFIG)
  const text = siteConfig('HEXO_COLOR_TEXT', '#374151', CONFIG)
  const textDark = siteConfig('HEXO_COLOR_TEXT_DARK', '#d1d5db', CONFIG)
  const textSecondary = siteConfig('HEXO_COLOR_TEXT_SECONDARY', '#9ca3af', CONFIG)
  const textSecondaryDark = siteConfig('HEXO_COLOR_TEXT_SECONDARY_DARK', '#6b7280', CONFIG)
  const border = siteConfig('HEXO_COLOR_BORDER', '#e5e7eb', CONFIG)
  const borderDark = siteConfig('HEXO_COLOR_BORDER_DARK', '#000000', CONFIG)

  return (
    <style jsx global>{`
      /* FUSION GURUKOOL BRANDING */
      #theme-hexo .fg-blog-brand {
        display: inline-flex;
        align-items: center;
        gap: 11px;
        color: #0a3d91;
        text-decoration: none;
      }

      #theme-hexo .fg-blog-brand-icon {
        width: 43px;
        height: 43px;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        border-radius: 12px;
        background: linear-gradient(135deg, #0a3d91, #1b75bc 65%, #f37021);
        color: white;
      }

      #theme-hexo .fg-blog-brand-text strong {
        display: block;
        font-size: 17px;
        font-weight: 900;
        letter-spacing: -0.6px;
        line-height: 1.2;
      }

      #theme-hexo .fg-blog-brand-text em {
        color: #f37021;
        font-style: normal;
      }

      #theme-hexo .fg-blog-brand-text small {
        display: block;
        margin-top: 3px;
        font-size: 8px;
        letter-spacing: 0.15px;
        color: #667c99;
      }

      @media (max-width: 480px) {
        #theme-hexo .fg-blog-brand-text strong {
          font-size: 14px;
        }
        #theme-hexo .fg-blog-brand-text small {
          font-size: 7px;
        }
      }
      /* FUSION GURUKOOL ENTERPRISE NAVBAR */
      #theme-hexo #sticky-nav {
        background: rgba(255,255,255,0.97) !important;
        border-bottom: 1px solid #e6edf5 !important;
        box-shadow: 0 2px 14px rgba(10,25,47,0.06) !important;
        backdrop-filter: blur(14px);
        color: #10233d !important;
      }

      #theme-hexo #sticky-nav > div {
        max-width: 1440px;
        margin: 0 auto;
        min-height: 66px;
        padding-left: 24px;
        padding-right: 24px;
      }

      #theme-hexo #sticky-nav nav {
        color: #23344d !important;
      }

      #theme-hexo #sticky-nav nav a,
      #theme-hexo #sticky-nav nav button {
        color: #23344d;
      }

      #theme-hexo #sticky-nav nav a:hover,
      #theme-hexo #sticky-nav nav button:hover {
        color: #f37021 !important;
      }

      #theme-hexo #sticky-nav .fg-blog-brand {
        color: #0a3d91 !important;
      }

      @media (max-width: 768px) {
        #theme-hexo #sticky-nav > div {
          min-height: 60px;
          padding-left: 14px;
          padding-right: 14px;
        }
      }
      /* FUSION GURUKOOL DISCOVERY CTA */
      #theme-hexo .fg-blog-discovery-cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        margin-left: 20px;
        padding: 12px 17px;
        border-radius: 9px;
        background: linear-gradient(135deg, #f37021, #ff9c36);
        color: #ffffff !important;
        font-size: 12px;
        font-weight: 700;
        text-decoration: none;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(243,112,33,0.18);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      #theme-hexo .fg-blog-discovery-cta:hover {
        color: #ffffff !important;
        transform: translateY(-1px);
        box-shadow: 0 7px 18px rgba(243,112,33,0.25);
      }
      /* FUSION GURUKOOL ENTERPRISE HERO */
      #theme-hexo .fg-enterprise-hero {
        min-height: 680px;
        height: 85vh;
        overflow: hidden;
        background:
          radial-gradient(circle at 85% 20%, rgba(243,112,33,0.24), transparent 30%),
          radial-gradient(circle at 10% 85%, rgba(27,117,188,0.35), transparent 38%),
          linear-gradient(130deg, #07172f, #0a3d91 70%, #1357a8);
      }

      #theme-hexo .fg-enterprise-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
        background-size: 54px 54px;
        pointer-events: none;
      }

      #theme-hexo .fg-enterprise-hero-content {
        z-index: 2;
        padding: 110px 24px 80px;
        text-align: center;
      }

      #theme-hexo .fg-enterprise-hero-title {
        max-width: 1050px;
        line-height: 1.15;
        letter-spacing: -1.5px;
        color: #ffffff;
      }

      #theme-hexo .fg-enterprise-hero .shadow-text {
        text-shadow: none !important;
      }

      #theme-hexo .fg-enterprise-hero .fg-enterprise-hero-content > div:nth-child(2) {
        color: #c5d7f0;
      }

      #theme-hexo .fg-enterprise-hero a {
        transition: all 0.2s ease;
      }

      @media (max-width: 768px) {
        #theme-hexo .fg-enterprise-hero {
          min-height: 680px;
          height: auto;
        }

        #theme-hexo .fg-enterprise-hero-title {
          font-size: 34px;
          letter-spacing: -0.7px;
        }
      }
      /* FUSION GURUKOOL PREMIUM CATEGORY CARDS */
      #theme-hexo .fg-enterprise-hero #home-nav-button {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        gap: 16px;
        width: 100%;
        max-width: 1180px;
        margin: 38px auto 0;
        padding: 16px 20px;
        height: auto;
        max-height: none;
        overflow: visible;
      }

      #theme-hexo .fg-enterprise-hero #home-nav-button > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 185px;
        width: auto;
        min-width: 170px;
        max-width: 220px;
        min-height: 100px;
        height: auto;
        margin: 0;
        padding: 18px 15px;
        border: 1px solid rgba(255,255,255,0.25);
        border-radius: 16px;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        text-shadow: none;
        transition:
          background 0.2s ease,
          border-color 0.2s ease,
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      #theme-hexo .fg-enterprise-hero #home-nav-button > a:hover {
        background: rgba(243,112,33,0.95);
        border-color: #f37021;
        color: #ffffff;
        transform: translateY(-5px);
        box-shadow: 0 14px 32px rgba(243,112,33,0.22);
      }

      #theme-hexo .fg-enterprise-hero #home-nav-button > a:focus-visible {
        outline: 3px solid #ff9c36;
        outline-offset: 3px;
      }

      @media (max-width: 768px) {
        #theme-hexo .fg-enterprise-hero #home-nav-button {
          gap: 12px;
          margin-top: 24px;
          padding: 12px;
        }

        #theme-hexo .fg-enterprise-hero #home-nav-button > a {
          flex: 1 1 140px;
          min-width: 130px;
          max-width: none;
          min-height: 85px;
          font-size: 12px;
        }
      }

      @media (max-width: 480px) {
        #theme-hexo .fg-enterprise-hero #home-nav-button > a {
          flex-basis: 100%;
          min-height: 58px;
        }
      }
      /* FUSION GURUKOOL MOBILE DRAWER */
      #theme-hexo #sidebar-drawer {
        background: #ffffff;
        color: #0a192f;
        border-left: 1px solid #e6edf5;
      }

      #theme-hexo .fg-blog-mobile-section {
        margin: 12px 16px 20px;
        padding: 20px 16px;
        border: 1px solid #e6edf5;
        border-radius: 14px;
        background: #f4f7fb;
      }

      #theme-hexo .fg-blog-mobile-heading span {
        display: block;
        color: #0a3d91;
        font-size: 17px;
        font-weight: 900;
      }

      #theme-hexo .fg-blog-mobile-heading em {
        color: #f37021;
        font-style: normal;
      }

      #theme-hexo .fg-blog-mobile-heading small {
        display: block;
        margin-top: 4px;
        color: #667c99;
        font-size: 11px;
      }

      #theme-hexo .fg-blog-mobile-cta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 18px;
        padding: 13px 10px;
        border-radius: 9px;
        background: linear-gradient(135deg, #f37021, #ff9c36);
        color: #ffffff !important;
        font-size: 12px;
        font-weight: 700;
        text-decoration: none;
        text-align: center;
      }

      #theme-hexo .fg-blog-mobile-cta:hover {
        background: #e45f13;
        color: #ffffff !important;
      }
      /* FUSION GURUKOOL PREMIUM ARTICLE CARDS */

      #theme-hexo #blog-post-card {
        background: #ffffff;
        border: 1px solid #e3eaf3;
        border-radius: 18px;
        box-shadow: 0 8px 28px rgba(10, 25, 47, 0.06);
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      #theme-hexo #blog-post-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 40px rgba(10, 61, 145, 0.12);
        border-color: #c9d9ee;
      }

      #theme-hexo #blog-post-card article {
        background: #ffffff;
        padding: 26px 30px;
      }

      #theme-hexo #blog-post-card h2 .menu-link {
        color: #0a192f;
        font-size: 23px;
        font-weight: 800;
        line-height: 1.35;
        transition: color 0.2s ease;
      }

      #theme-hexo #blog-post-card h2 a:hover .menu-link {
        color: #0a3d91;
      }

      #theme-hexo #blog-post-card main,
      #theme-hexo #blog-post-card p {
        color: #667c99;
        font-size: 14px;
        line-height: 1.8;
      }

      #theme-hexo #blog-post-card header a[href^="/category/"] {
        color: #f37021;
        font-size: 12px;
        font-weight: 700;
      }

      #theme-hexo #blog-post-card .text-gray-400 {
        color: #718096;
      }

      #theme-hexo #blog-post-card img {
        transition: transform 0.35s ease;
      }

      #theme-hexo #blog-post-card:hover img {
        transform: scale(1.035);
      }

      @media (max-width: 768px) {
        #theme-hexo #blog-post-card {
          height: auto;
          border-radius: 14px;
        }

        #theme-hexo #blog-post-card article {
          padding: 20px;
        }

        #theme-hexo #blog-post-card h2 .menu-link {
          font-size: 19px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #theme-hexo #blog-post-card,
        #theme-hexo #blog-post-card img {
          transition: none;
        }
      }
      /* FUSION GURUKOOL ARTICLE TITLE COLOR FIX */
      #theme-hexo #blog-post-card h2 a,
      #theme-hexo #blog-post-card h2 a:link,
      #theme-hexo #blog-post-card h2 a:visited,
      #theme-hexo #blog-post-card h2 a .menu-link {
        color: #0a192f !important;
        text-decoration: none !important;
      }

      #theme-hexo #blog-post-card h2 a:hover,
      #theme-hexo #blog-post-card h2 a:hover .menu-link {
        color: #f37021 !important;
      }
      /* FUSION GURUKOOL LEARNING HUB */
      #theme-hexo .fg-learning-hub {
        background: #fff;
        border: 1px solid #e3eaf3;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 8px 28px rgba(10,25,47,.06);
      }
      #theme-hexo .fg-learning-hub-header {
        padding: 22px 20px;
        background: linear-gradient(135deg,#0a192f,#0a3d91);
        color: #fff;
      }
      #theme-hexo .fg-learning-hub-header span {
        display: block;
        color: #ffad75;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1px;
      }
      #theme-hexo .fg-learning-hub-header h3 {
        margin-top: 8px;
        color: #fff;
        font-size: 19px;
        font-weight: 800;
      }
      #theme-hexo .fg-learning-hub-header p {
        margin-top: 8px;
        color: #d5e3f6;
        font-size: 12px;
      }
      #theme-hexo .fg-learning-hub-links {
        display: flex;
        flex-direction: column;
        gap: 7px;
        padding: 12px;
      }
      #theme-hexo .fg-learning-hub-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 12px;
        background: #f4f7fb;
        border-radius: 10px;
        color: #0a192f;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
      }
      #theme-hexo .fg-learning-hub-link:hover {
        background: #fff0e5;
        color: #f37021;
      }
      #theme-hexo .fg-learning-hub-footer {
        display: flex;
        justify-content: space-between;
        padding: 16px 20px;
        background: #fff7f0;
        color: #e76518;
        font-size: 12px;
        font-weight: 800;
        text-decoration: none;
      }
      /* FUSION GURUKOOL CORPORATE FOOTER */

      #theme-hexo .fg-corporate-footer {
        width: 100%;
        background: #0a192f;
        color: #b6c7de;
        padding: 60px 24px 24px;
      }

      #theme-hexo .fg-footer-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      #theme-hexo .fg-footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 40px;
        padding-bottom: 40px;
      }

      #theme-hexo .fg-footer-logo {
        text-decoration: none;
        font-size: 24px;
        font-weight: 900;
        color: #ffffff;
      }

      #theme-hexo .fg-footer-logo em {
        color: #f37021;
        font-style: normal;
      }

      #theme-hexo .fg-footer-tagline {
        margin-top: 10px;
        font-size: 12px;
        color: #ffad75;
      }

      #theme-hexo .fg-footer-description {
        margin-top: 20px;
        max-width: 330px;
        font-size: 13px;
        line-height: 1.8;
        color: #b6c7de;
      }

      #theme-hexo .fg-footer-column {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      #theme-hexo .fg-footer-column h3 {
        color: #ffffff;
        font-size: 15px;
        font-weight: 800;
        margin-bottom: 8px;
      }

      #theme-hexo .fg-footer-column a {
        color: #b6c7de;
        text-decoration: none;
        font-size: 13px;
        transition: color 0.2s ease;
      }

      #theme-hexo .fg-footer-column a:hover {
        color: #f37021;
      }

      #theme-hexo .fg-footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        padding-top: 24px;
        border-top: 1px solid #31435d;
        color: #8fa5c1;
        font-size: 12px;
      }

      #theme-hexo .fg-footer-credits {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      @media (max-width: 900px) {
        #theme-hexo .fg-footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
      }

      @media (max-width: 540px) {
        #theme-hexo .fg-corporate-footer {
          padding: 42px 20px 24px;
        }

        #theme-hexo .fg-footer-grid {
          grid-template-columns: 1fr;
          gap: 28px;
        }

        #theme-hexo .fg-footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      #theme-hexo {
        --hexo-color-primary-light: ${primary};
        --hexo-color-primary-dark: ${primaryDark};
        --hexo-color-bg-light: ${background};
        --hexo-color-bg-dark: ${backgroundDark};
        --hexo-color-card-light: ${surface};
        --hexo-color-card-dark: ${surfaceDark};
        --hexo-color-title-light: ${title};
        --hexo-color-title-dark: ${titleDark};
        --hexo-color-text-light: ${text};
        --hexo-color-text-dark: ${textDark};
        --hexo-color-text-secondary-light: ${textSecondary};
        --hexo-color-text-secondary-dark: ${textSecondaryDark};
        --hexo-color-border-light: ${border};
        --hexo-color-border-dark: ${borderDark};
        --theme-color: var(--hexo-color-primary-light);
        --hexo-color-bg: var(--hexo-color-bg-light);
        --hexo-color-card: var(--hexo-color-card-light);
        --hexo-color-title: var(--hexo-color-title-light);
        --hexo-color-text: var(--hexo-color-text-light);
        --hexo-color-text-secondary: var(--hexo-color-text-secondary-light);
        --hexo-color-border: var(--hexo-color-border-light);
      }

      .dark #theme-hexo {
        --theme-color: var(--hexo-color-primary-dark);
        --hexo-color-bg: var(--hexo-color-bg-dark);
        --hexo-color-card: var(--hexo-color-card-dark);
        --hexo-color-title: var(--hexo-color-title-dark);
        --hexo-color-text: var(--hexo-color-text-dark);
        --hexo-color-text-secondary: var(--hexo-color-text-secondary-dark);
        --hexo-color-border: var(--hexo-color-border-dark);
      }

      #theme-hexo,
      #theme-hexo .bg-hexo-background-gray {
        background-color: var(--hexo-color-bg);
      }

      #theme-hexo #blog-post-card,
      #theme-hexo .card,
      #theme-hexo #announcement-wrapper,
      #theme-hexo .article {
        background-color: var(--hexo-color-card);
        border-color: var(--hexo-color-border);
      }

      #theme-hexo #blog-post-card h2 .menu-link {
        color: var(--hexo-color-title);
      }

      #theme-hexo #blog-post-card main,
      #theme-hexo #blog-post-card p {
        color: var(--hexo-color-text);
      }

      #theme-hexo #blog-post-card .text-gray-400 {
        color: var(--hexo-color-text-secondary);
      }

      /*  èœå•ä¸‹åˆ’çº¿åŠ¨ç”» */
      #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(
          var(--theme-color),
          var(--theme-color)
        );
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }

      #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: var(--theme-color);
      }

      /* æ–‡ç« åˆ—è¡¨ä¸­æ ‡é¢˜è¡Œæ‚¬æµ®æ—¶çš„æ–‡å­—é¢œè‰² */
      #theme-hexo h2:hover .menu-link {
        color: var(--theme-color) !important;
      }
      .dark #theme-hexo h2:hover .menu-link {
        color: var(--theme-color) !important;
      }

      /* ä¸‹æ‹‰èœå•æ‚¬æµ®èƒŒæ™¯è‰² */
      #theme-hexo li[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* tagæ ‡ç­¾æ‚¬æµ®èƒŒæ™¯è‰² */
      #theme-hexo a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }

      /* ç¤¾äº¤æŒ‰é’®æ‚¬æµ®é¢œè‰² */
      #theme-hexo i[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-hexo i[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* MenuGroup æ‚¬æµ®é¢œè‰² */
      #theme-hexo #nav div[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-hexo #nav div[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* æœ€æ–°å‘å¸ƒæ–‡ç« æ‚¬æµ®é¢œè‰² */
      #theme-hexo div[class*='hover:text-indigo-600']:hover,
      #theme-hexo div[class*='hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* åˆ†é¡µç»„ä»¶é¢œè‰² */
      #theme-hexo .text-indigo-400 {
        color: var(--theme-color) !important;
      }
      #theme-hexo .border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      #theme-hexo a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }
      /* ç§»åŠ¨è®¾å¤‡ä¸‹ï¼Œæœç´¢ç»„ä»¶ä¸­é€‰ä¸­åˆ†ç±»çš„é«˜äº®èƒŒæ™¯è‰² */
      #theme-hexo div[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-hexo .hover\:bg-indigo-400:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-hexo .bg-indigo-400 {
        background-color: var(--theme-color) !important;
      }
      #theme-hexo a[class*='hover:bg-indigo-600']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }

      /* å³ä¸‹è§’æ‚¬æµ®æŒ‰é’®èƒŒæ™¯è‰² */
      #theme-hexo .bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-hexo .dark\:bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }

      // ç§»åŠ¨è®¾å¤‡èœå•æ é€‰ä¸­èƒŒæ™¯è‰²
      #theme-hexo div[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* æ–‡ç« æµè§ˆè¿›åº¦æ¡é¢œè‰² */
      #theme-hexo .bg-indigo-600 {
        background-color: var(--theme-color) !important;
      }
      /* å½“å‰æµè§ˆä½ç½®æ ‡é¢˜é«˜äº®é¢œè‰² */
      #theme-hexo .border-indigo-800 {
        border-color: var(--theme-color) !important;
      }
      #theme-hexo .text-indigo-800 {
        color: var(--theme-color) !important;
      }
      .dark #theme-hexo .dark\:text-indigo-400 {
        color: var(--theme-color) !important;
      }
      .dark #theme-hexo .dark\:border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      .dark #theme-hexo .dark\:border-white {
        border-color: var(--theme-color) !important;
      }
      /* ç›®å½•é¡¹æ‚¬æµ®æ—¶çš„å­—ä½“é¢œè‰² */
      #theme-hexo a[class*='hover:text-indigo-800']:hover {
        color: var(--theme-color) !important;
      }
      /* æ·±è‰²æ¨¡å¼ä¸‹ç›®å½•é¡¹çš„é»˜è®¤æ–‡å­—é¢œè‰²å’Œè¾¹æ¡†çº¿é¢œè‰² */
      .dark #theme-hexo .catalog-item {
        color: white !important;
        border-color: white !important;
      }
      .dark #theme-hexo .catalog-item:hover {
        color: var(--theme-color) !important;
      }
      /* æ·±è‰²æ¨¡å¼ä¸‹å½“å‰é«˜äº®æ ‡é¢˜çš„è¾¹æ¡†çº¿é¢œè‰² */
      .dark #theme-hexo .catalog-item.font-bold {
        border-color: var(--theme-color) !important;
      }

      /* æ–‡ç« åº•éƒ¨ç‰ˆæƒå£°æ˜Žç»„ä»¶å·¦ä¾§è¾¹æ¡†çº¿é¢œè‰² */
      #theme-hexo .border-indigo-500 {
        border-color: var(--theme-color) !important;
      }

      /* å½’æ¡£é¡µé¢æ–‡ç« åˆ—è¡¨é¡¹æ‚¬æµ®æ—¶å·¦ä¾§è¾¹æ¡†çº¿é¢œè‰² */
      #theme-hexo li[class*='hover:border-indigo-500']:hover {
        border-color: var(--theme-color) !important;
      }

      /* è‡ªå®šä¹‰å³é”®èœå•æ‚¬æµ®é«˜äº®é¢œè‰² */
      #theme-hexo .hover\:bg-blue-600:hover {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-hexo li[class*='dark:hover:border-indigo-300']:hover {
        border-color: var(--theme-color) !important;
      }
      /* æ·±è‰²æ¨¡å¼ä¸‹ï¼Œå½’æ¡£é¡µé¢æ–‡ç« åˆ—è¡¨é¡¹é»˜è®¤çŠ¶æ€å·¦ä¾§è¾¹æ¡†çº¿é¢œè‰² */
      .dark #theme-hexo li[class*='dark:border-indigo-400'] {
        border-color: var(--theme-color) !important;
      }
      /* æ·±è‰²æ¨¡å¼ä¸‹ï¼Œå½’æ¡£é¡µé¢æ–‡ç« æ ‡é¢˜æ‚¬æµ®æ—¶çš„æ–‡å­—é¢œè‰² */
      .dark #theme-hexo a[class*='dark:hover:text-indigo-300']:hover {
        color: var(--theme-color) !important;
      }

      /* è®¾ç½®äº†ä»Žä¸Šåˆ°ä¸‹çš„æ¸å˜é»‘è‰² */
      #theme-hexo .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      /* Custem */
      .tk-footer {
        opacity: 0;
      }

      // é€‰ä¸­å­—ä½“é¢œè‰²
      ::selection {
        background: color-mix(in srgb, var(--theme-color) 30%, transparent);
      }

      // è‡ªå®šä¹‰æ»šåŠ¨æ¡
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--theme-color);
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: var(--theme-color) transparent;
      }

      ${themeConsoleStyle('hexo', CONFIG)}

      #theme-hexo #home-nav-button a {
        color: #fff !important;
      }

      #theme-hexo #home-nav-button a:hover {
        color: #000 !important;
      }
  `}</style>
  )
}

export { Style }










