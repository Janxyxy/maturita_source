import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Analytics } from "@vercel/analytics/react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Vstoupit do materiálů
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: "📚 Komplexní materiály",
      description:
        "Vše potřebné pro maturitu z informatiky na jednom místě - od základů po pokročilé témata.",
    },
    {
      title: "🎯 Zaměřeno na praxi",
      description:
        "Materiály připravené podle skutečných maturitních požadavků SPŠUL Liberec.",
    },
    {
      title: "🚀 Rychlé vyhledávání",
      description:
        "Intuitivní navigace a vyhledávání vám pomůže rychle najít potřebné informace.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4">
              <div className="text--center padding-horiz--md">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Domovská stránka"
      description="Materiály pro maturitní zkoušku z informatiky SPŠUL Liberec - Český jazyk, Anglický jazyk, Datové sítě, Počítačové vybavení"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Analytics />
    </Layout>
  );
}
