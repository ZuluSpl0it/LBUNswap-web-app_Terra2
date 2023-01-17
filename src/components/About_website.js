//import React from "react"
//import { useEffect, useMemo, useState } from "react"



function About_website() {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Landing page for LBUN" />
      <meta name="author" content="LBUN Developers" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
      />
      {/* Styles */}
      <link rel="stylesheet" href="../index.scss" />
      <title>LUNC Burn Token</title>
      {/* Main header */}
      <header class="main-header">
        <div class="header-container">
          {/* Header navbar */}
          <nav className="main-header-navbar">
            <img
              src="/images/LogoName_big.png"
              alt="LBUN logo"
              class="main-header-navbar__logo"
            />
          </nav>
          <nav class="main-header-navbar">
            <ul class="main-header-navbar__nav">
              <li class="main-header-navbar__nav__item">
                <a href="https://lbunproject.github.io/LBUN_whitepaper_terra2.github.io/?page=1" class="main-header-navbar__nav__link">
                  Whitepaper
                </a>
              </li>
              <li class="main-header-navbar__nav__item">
                <a href="#components" class="main-header-navbar__nav__link">
                  Elements
                </a>
              </li>
              <li class="main-header-navbar__nav__item">
                <a href="#features" class="main-header-navbar__nav__link">
                  Features
                </a>
              </li>
              <li class="main-header-navbar__nav__item">
                <a href="#team" class="main-header-navbar__nav__link">
                  Team
                </a>
              </li>
            </ul>
            <div class="main-header-navbar__login"></div>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="main-header-content-container">
          <div className="main-header-content-principal">
            <h1 className="main-header-content-principal__title">
              Accelerated <span>LUNC Burning </span> via Community based
              <span> Token Bonding Curve.</span>
            </h1>
            <p className="main-header-content-principal__description">
              <br></br>
              Burning LUNC for fun and profit...
              <br></br>
              and donating 75% of TX fees to Devs,
              <br></br>
             Burns and Raffles!
            </p>
          </div>
          <img
            src="/images/header-assets/header-Illustration.svg"
            alt=""
            className="main-header-content-principal__illustration"
          />
        </div>

        <section className="why-us-wrapper">
          <div className="stats-section">
            <div className="stats-section__reference">
              <i className="fas fa-fire"></i>
              <h3 className="stats-section__reference__title">
                Goal 1 Trillion
              </h3>
              <p className="stats-section__reference__description">
                LUNC Burned
              </p>
            </div>
            <div className="stats-section__reference">
              <i className="fas fa-wallet"></i>
              <h3 className="stats-section__reference__title">56</h3>
              <p className="stats-section__reference__description">
                Community Wallets
              </p>
            </div>
            <div className="stats-section__reference">
              <i className="fas fa-ticket-alt"></i>
              <h3 className="stats-section__reference__title">
                $100M Possible
              </h3>
              <p className="stats-section__reference__description">
                Raffle Winnings
              </p>
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-section__reference">
              <i className="fas fa-dollar-sign"></i>
              <h3 className="stats-section__reference__title">$0.4144 USD</h3>
              <p className="stats-section__reference__description">
                LBUN Price
              </p>
            </div>
            <div className="stats-section__reference">
              <i className="fas fa-coins"></i>
              <h3 className="stats-section__reference__title">5883.4</h3>
              <p className="stats-section__reference__description">
                LBUN Supply
              </p>
            </div>
          </div>

          <div className="why-us-section" id="about">
            <div className="why-us-section__content">
              <h2 className="why-us-section__content__title">
                Why should you choose
                <span> LBUN </span>
                for your LUNC burning contributions?
              </h2>
              <p className="why-us-section__content__description">
                The LBUN project seeks to return the power to the LUNC
                community. No more begging Centralized Exchanges to implement
                or sustain the burn tax.
              </p>
            </div>
            <img
              src="/images/why-us-section-assets/LBUN.svg"
              alt=""
              className="why-us-section__illustration"
            />
          </div>

          <div className="benefits-section">
            <h2 className="benefits-section__title">
              Participate in weekly <span>Raffles </span> to win a portion of{" "}
              <span>$123.8M </span>in rewards!
            </h2>
            <p className="benefits-section__description">
              Each week a lucky community member (must hold LBUN in wallet) will
              win 1% of all buy & sell orders.
            </p>
          </div>
        </section>

        <section className="cryptocurrencies-section" id="components">
          <h2 className="cryptocurrencies-section__title">
            Enhancing the LUNC Burn by Integrating Optimal Technologies,
            Protocols and Algorithms.
          </h2>
          <div className="cryptocurrencies-info-cards">
            <div className="info-card">
              <img
                src="/images/others/solana.svg"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">Solana</h3>
              <p className="info-card__description">
                Low fees, Fast Transactions
              </p>
              <a href="https://solana.com/" className="info-card__btn">
                Explore <i className="fas fa-angle-right"></i>
              </a>
            </div>
            <div className="info-card">
              <img
                src="/images/others/strata.svg"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">Strata Protocol</h3>
              <p className="info-card__description">
                Launch Project Based Tokens
              </p>
              <a href="https://strataprotocol.com/" className="info-card__btn">
                Learn <i className="fas fa-angle-right"></i>
              </a>
            </div>
            <div className="info-card">
              <img
                src="/images/others/tbc.svg"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">Token Bonding Curve </h3>
              <p className="info-card__description">
                Instant Liquidity, Quick Swaps
              </p>
              <a
                href="https://app.strataprotocol.com/swap/6Ngy7fpgovC8NasbBWLTJfEKb4tQJQfE9B5G5hDs9abm"
                className="info-card__btn"
              >
                Trade <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <h2 className="features-section__title">
            LUNC Burn Token Project Features:
          </h2>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
                LUNC Burning
              </h3>
              <p className="grow-profit-article__content__description">
                1. Each transaction provides 2X burns (2.4% tax)
                <br></br>
                <br></br>
                2. $595M raised for burns (@ 1.05M LBUN supply)
                <br></br>
                <br></br>
                3. Burn conducted weekly with verification
                <br></br>
                <br></br>
                4. Community activity determines burn amount
              </p>
            </div>
          </article>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
                Raffle Prizes
              </h3>
              <p className="grow-profit-article__content__description">
                1. $123.8M in prizes (@ 1.05M LBUN supply)
                <br></br>
                <br></br>
                2. Drawing conducted weekly (after LUNC burn)
                <br></br>
                <br></br>
                3. Odds of winning set by amount of LBUN in wallet
                <br></br>
                <br></br>
                4. Prize size determined by community activity
              </p>
            </div>
          </article>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
                Token Bonding Curve
              </h3>
              <p className="grow-profit-article__content__description">
                1. Instant Liquidity
                <br></br>
                <br></br>
                2. Decentralized fund raising
                <br></br>
                <br></br>
                3. LBUN value determined solely by community
                <br></br>
                <br></br>
                4. Uncapped market (limitless supply)
              </p>
            </div>
          </article>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
                Strata Protocol
              </h3>
              <p className="grow-profit-article__content__description">
                1. Open source, permissionless, decentralized
                <br></br>
                <br></br>
                2. Leverage the deployed smart contracts
                <br></br>
                <br></br>
                3. Handles complex math required by TBC
                <br></br>
                <br></br>
                4. Royalties (buy/sell tax) funds LUNC burns
              </p>
            </div>
          </article>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
                Solana Blockchain
              </h3>
              <p className="grow-profit-article__content__description">
                1. Uses well-known languages (C, C++, and Rust)
                <br></br>
                <br></br>
                2. Handles {">"} 50,000 TPS
                <br></br>
                <br></br>
                3. Utilizes a 400ms block time
                <br></br>
                <br></br>
                4. Extremely low transaction fees
              </p>
            </div>
          </article>
        </section>


        <section className="team-section" id="team">
          <h2 className="team-section__title">
          Small Team creating big impact!
          </h2>
          <div className="team-info-cards">
            <div className="info-card">
              <img
                src="/images/team/Renzo.png"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">Renzo</h3>
              <p className="info-card__description">
                Lead Developer
              </p>
            </div>
            <div className="info-card">
              <img
                src="/images/team/Eric.png"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">Eric</h3>
              <p className="info-card__description">
                Jr Developer & Social Media
              </p>
            </div>
            <div className="info-card">
              <img
                src="/images/team/David.png"
                alt=""
                className="info-card__icon"
              />
              <h3 className="info-card__title">David</h3>
              <p className="info-card__description">
                LUNC Validator & Marketing
              </p>
            </div>
          </div>
        </section>

  


        </main>
    </div>

  )
}

export default About_website
