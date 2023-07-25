import { Container, Aside, Main,Beside,Behind,Bottom } from "./Resume.styles";
import Education from "./components/Education/education.jsx";
import Skills  from "./components/Skills/skills.jsx";
import Certification from "./components/Certification/certification.jsx";
import Contacts from "./components/Contacts/contacts.jsx";
import Profile from "./components/Profile/profile.jsx";
import Experience from "./components/Experience/experience.jsx";

const Resume = (props) => {
    return (
        <Container>
            <Aside>
                <img src={props.img} alt="hijabi.jpg"
                    style={{ width: "100%" , height:"23%" }} />
                <Education />
                <Beside>
                <Skills/>
                <Certification/>
            </Beside>
            </Aside>
            <Main>
                <div className="description">
                    <h1 className="hero-text">NOUR CAITLYN</h1>
                    <p>Your Professional Title</p>
                </div>
                <Contacts/>
                <Behind>
                     <Profile/>
                </Behind>
                <Bottom>
                    <Experience/>
                </Bottom>
               
            </Main>
        </Container>

    );
};
export default Resume;