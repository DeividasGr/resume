import { useState } from 'react';
import Pill from './components/BtnPill';
import ContentBox from './components/ContentBox';
import SocialLinks from './components/SocialLinks';
import PersonalInfo from './components/PersonalInfo';
import Footer from './components/Footer';
import Education from './components/Education';
import Header from './components/Header';
import Divider from './components/Divider';
import language from './data';
import './index.css';

function App() {
  const [lang, setLang] = useState('en');

  const changeLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="container">
      <Header
        name="DEIVIDAS GRUZDZEVIČIUS"
        title={language[lang].jobTitle}
        changeLanguage={changeLanguage}
      />
      <main className="main">
        <section className="grid__layout">
          <ContentBox className="links" title={language[lang].links.title}>
            <SocialLinks socialItems={language[lang].links.items} />
          </ContentBox>
          <ContentBox className="about-me" title={language[lang].aboutMe.title}>
            <p className="about-me__text">{language[lang].aboutMe.text}</p>
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
            <div className="experience">
              <PersonalInfo experiences={language[lang].experience.data} />
            </div>
            <Divider isFancy={false} />
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
