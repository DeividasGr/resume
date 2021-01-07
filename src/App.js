import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <select className="header-lang" name="languages" id="languages">
          <option value="lithuanian">Lietuviškai</option>
          <option value="english">English</option>
        </select>
      </header>
      <main>
        <div className="hero">
          <h1 className="hero-name">Deividas</h1>
          <h3 className="hero-job-title">Programmer</h3>
        </div>
        <section className="first-row">
          <div className="links">
            <h3>LINKS</h3>
            <div className="border"></div>
            <div className="links-container">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <img
                  src="https://freepngimg.com/thumb/linkedin/5-2-linkedin-picture.png"
                  alt="linkedin img"
                />
              </a>
              <p>LINKEDIN</p>
            </div>
            <div className="links-container">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.cbronline.com/wp-content/uploads/2016/06/twitter2.png"
                  alt="twitter img"
                />
              </a>
              <p>TWITTER</p>
            </div>
            <div className="links-container">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4"
                  alt="github img"
                />
              </a>
              <p>GITHUB</p>
            </div>
            <div className="links-container">
              <a href="https://dev.to/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/84_Dev_logo_logos-512.png"
                  alt="blog img"
                />
              </a>
              <p>BLOG</p>
            </div>
          </div>
          <div className="about-me">
            <h3>ABOUT ME</h3>
            <div className="border"></div>
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
          </div>
          <div className="education">
            <h3>EDUCATION</h3>
            <div className="border"></div>
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
          </div>
          <div className="skills">
            <h3>PERSONAL SKILLS</h3>
            <div className="border"></div>
            <p>
              <span className="green">TEAMWORK</span>
            </p>
            <p>
              <span className="yellow">COMMUNICATION</span>
            </p>
            <p>
              <span className="red">ORGANIZATION</span>
            </p>
          </div>
          <div className="tech-skills">
            <h3>TECHNICAL SKILLS</h3>
            <div className="border"></div>
            <p>
              <span className="green">HTML</span>
            </p>
            <p>
              <span className="green">CSS/SCSS</span>
            </p>
            <p>
              <span className="yellow">JAVASCRIPT</span>
            </p>
            <p>
              <span className="yellow">REACT.JS</span>
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3>WORK EXPERIENCE</h3>
            <div className="border"></div>
          </div>
          <div className="work-row">
            <div className="work-box">
              <div>
                <h4>JOB POSITION</h4>
                <p>Company</p>
                <p>2018 - present</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non alias eius aliquid obcaecati quaerat consectetur suscipit
                consequuntur incidunt tempora.
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="work-box">
              <div>
                <h4>JOB POSITION</h4>
                <p>Company</p>
                <p>2017 - 2018</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non alias eius aliquid obcaecati quaerat consectetur suscipit
                consequuntur incidunt tempora.
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="work-box">
              <div>
                <h4>JOB POSITION</h4>
                <p>Company</p>
                <p>2015 - 2017</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non alias eius aliquid obcaecati quaerat consectetur suscipit
                consequuntur incidunt tempora.
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-box">
          <h3>ADDRESS</h3>
          <p>Imaginery St. 52,</p>
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
        </div>
      </footer>
    </div>
  );
}

export default App;
