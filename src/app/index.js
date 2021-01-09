import Pill from './components/BtnPill';
import Select from './components/Select';
import ContentBox from './components/ContentBox';
import SocialLinks from './components/SocialLinks';
import PersonalInfo from './components/PersonalInfo';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Select
          options={[
            { value: 'lt', children: 'Lietuviškai' },
            { value: 'en', children: 'English' },
          ]}
        />
      </header>
      <main>
        <div className="hero">
          <h1 className="hero-name">Deividas</h1>
          <h3 className="hero-job-title">Programmer</h3>
        </div>
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
          <ContentBox className="about-me" title="ABOUT ME">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              quisquam corrupti molestiae dicta facere distinctio fuga obcaecati
              iusto deleniti voluptas explicabo repellendus ducimus, ex dolor
              nam necessitatibus voluptatibus numquam id molestias. Dolores
              inventore totam obcaecati nobis esse cum debitis et sed soluta
              adipisci minus aut maiores, porro quo explicabo nisi. Dolores
              inventore totam obcaecati nobis esse cum debitis et sed soluta
              adipisci minus aut maiores, porro quo explicabo nisi.
            </p>
          </ContentBox>
          <ContentBox className="education" title="EDUCATION">
            <div>
              <p>SCHOOL NAME</p>
              <p>2009-2013</p>
              <p>Degree</p>
            </div>
            <div className="line"></div>
            <div>
              <p>SCHOOL NAME</p>
              <p>2009-2013</p>
              <p>Degree</p>
            </div>
          </ContentBox>
          <ContentBox className="skills" title="PERSONAL SKILLS">
            <Pill color="green">TEAMWORK</Pill>
            <Pill color="yellow">COMMUNICATION</Pill>
            <Pill color="red">ORGANIZATION</Pill>
          </ContentBox>
          <ContentBox className="tech-skills" title="TECHNICAL SKILLS">
            <Pill color="green">HTML</Pill>
            <Pill color="green">CSS/SCSS</Pill>
            <Pill color="yellow">JAVASCRIPT</Pill>
            <Pill color="yellow">REACT.JS</Pill>
          </ContentBox>
        </section>
        <section>
          <ContentBox
            className="tech-skills"
            title="TECHNICAL SKILLS"
          ></ContentBox>
          <div className="work-row">
            <PersonalInfo
              jobPosition="JOB POSITION #1"
              jobInfo={[{ company: 'Company #1', date: '2018-present' }]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              non alias eius aliquid obcaecati quaerat consectetur suscipit
              consequuntur incidunt tempora."
              list={[
                {
                  listItem: 'Lorem, ipsum dolor.',
                  listItem2: 'Lorem, ipsum dolor.',
                },
              ]}
            />
            <PersonalInfo
              jobPosition="JOB POSITION #2"
              jobInfo={[{ company: 'Company #2', date: '2017 - 2018' }]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              non alias eius aliquid obcaecati quaerat consectetur suscipit
              consequuntur incidunt tempora."
              list={[
                {
                  listItem: 'Lorem, ipsum dolor.',
                  listItem2: 'Lorem, ipsum dolor.',
                },
              ]}
            />
            <PersonalInfo
              jobPosition="JOB POSITION #3"
              jobInfo={[{ company: 'Company #3', date: '2015 - 2017' }]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              non alias eius aliquid obcaecati quaerat consectetur suscipit
              consequuntur incidunt tempora."
              list={[
                {
                  listItem: 'Lorem, ipsum dolor.',
                  listItem2: 'Lorem, ipsum dolor.',
                },
              ]}
            />
          </div>
        </section>
      </main>
      <footer className="footer">
        <Footer title="ADDRESS" isLink={false} />
        <Footer title="CONTACT" isLink />
        <Footer title="SOCIAL" isLink />
        {/* <div className="footer-box">
          <h3>ADDRESS</h3>
          <p>Imaginery St. 52</p>
          <p>Vilnius, Narnia</p>
        </div>
        <div className="footer-box">
          <h3>CONTACT</h3>
          <a href="tel:+370639650000">+370639650000</a>
          <a href="mailto:email@ytest.com">email@ytest.com</a>
        </div>
        <div className="footer-box">
          <h3>SOCIAL</h3>
          <a href="https://www.linkedin.com/">Linkedin/username</a>
          <a href="https://twitter.com/">Twitter/@username</a>
        </div> */}
      </footer>
    </div>
  );
}

export default App;
