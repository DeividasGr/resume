import { useState } from 'react';
import Pill from './components/BtnPill';
import Select from './components/Select';
import ContentBox from './components/ContentBox';
import SocialLinks from './components/SocialLinks';
import PersonalInfo from './components/PersonalInfo';
import Footer from './components/Footer';
import Education from './components/Education';
import Header from './components/Header';
import language from './data';
import './index.css';

function App() {
  const [lang, setLang] = useState('en');

  const changeLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <Select
          changeLanguage={changeLanguage}
          options={[
            { value: 'en', children: 'English' },
            { value: 'lt', children: 'Lietuviškai' },
          ]}
        />
      </header>
      <main>
        <Header name="DEIVIDAS" title={language[lang].jobTitle} />
        <section className="first-row">
          <ContentBox className="links" title="LINKS">
            <SocialLinks
              href="https://www.linkedin.com/"
              image="https://freepngimg.com/thumb/linkedin/5-2-linkedin-picture.png"
              alt="linkedin img"
            >
              LINKEDIN
            </SocialLinks>
            <SocialLinks
              href="https://twitter.com/"
              image="https://www.cbronline.com/wp-content/uploads/2016/06/twitter2.png"
              alt="twitter img"
            >
              TWITTER
            </SocialLinks>
            <SocialLinks
              href="https://github.com/"
              image="https://avatars1.githubusercontent.com/u/9919?s=200&v=4"
              alt="github img"
            >
              GITHUB
            </SocialLinks>
            <SocialLinks
              href="https://dev.to/"
              image="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/84_Dev_logo_logos-512.png"
              alt="blog img"
            >
              BLOG
            </SocialLinks>
          </ContentBox>
          <ContentBox className="about-me" title={language[lang].aboutMe.title}>
            <p>{language[lang].aboutMe.text}</p>
          </ContentBox>
          <ContentBox
            className="education"
            title={language[lang].education.title}
          >
            <Education educationInfo={language[lang].education.skills} />
          </ContentBox>
          <ContentBox className="skills" title={language[lang].personal.title}>
            <Pill pillInfo={language[lang].personal.skills} />
          </ContentBox>
          <ContentBox
            className="tech-skills"
            title={language[lang].technical.title}
          >
            <Pill pillInfo={language[lang].technical.skills} />
          </ContentBox>
        </section>
        <section>
          <ContentBox
            className="tech-skills"
            title={language[lang].experience.title}
          >
            <div className="work-row">
              <PersonalInfo experiences={language[lang].experience.data} />
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Footer footerInfo={language[lang].footerBox} />
      </footer>
    </div>
  );
}

export default App;
