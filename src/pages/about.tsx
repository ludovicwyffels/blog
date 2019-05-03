import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
        <PostFullHeader>
            <PostFullTitle>Bonjour tout le monde. C'est Ludovic</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Dans mes cinq années d'expérience en tant que développeur de logiciel, j'ai travaillé pour une startup pendant 2 ans, en tant que développeur mobile. J'ai eu la chance d'expérimenter ce qu'est écrire un MVP puis le réécrire en utilisant les meilleurs pratiques du marché tout en ayant à le faire évoluer, tel que du Node.js et du AWS.
                <div>
                  Puis je suis rentré chez IBM, où j'ai participé à plusieurs petits et grands projets.
                </div>
              </p>
              <p>
                J'ai commancé en bas de l'echelle en tant que simple développeur mais je suis rappidement monté pour finir actuellement leader technique de la factory.
                <div>
                  Mes compétences vont du fullstack javascript au devops.
                </div>
              </p>
              <p> 
              Ma vision pour ce blog est d'être une source de connaissances pour plusieurs sujet de développement de logiciel principalement javascript, node.js, typescript, cloud computing, AWS, GCP, intégration continue et livraison continue.
              </p>
              <p> 
                Si vous voulez en savoir plus sur mon expérience professionnelle antérieure, consultez mon profil <a href="https://www.linkedin.com/in/ludovicwyffels/">LinkedIn</a>.
              </p>
              <p> 
                Ce blog est Open Source, donc si vous pensez que quelque chose peut être amélioré, ouvrez simplement une issue ou une pull request.
              </p>
              <p> 
              J'espère que vous trouverez ce blog utile.
              </p>
              <p> 
              Ludovic Wyffels - Avril 2019
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
