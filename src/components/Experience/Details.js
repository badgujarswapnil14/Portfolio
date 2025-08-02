import React from "react"
import style from "../../css/details.module.css"
import Reveal from "../Reveal"
import { useSelector } from "react-redux"

const content_2023 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal>
                <h3 className={style.expCompany}></h3>
            </Reveal>
            <Reveal>
                <p className={style.expDesignation}></p>
            </Reveal>
            <Reveal>
                <p className={style.expDuration}></p>
            </Reveal>
            <div className={style.expBrief}>
                <Reveal>
                    {/* <b>Skills:</b> Third-party API Integrations <b>·</b> CRM Integrations <b>·</b> UI development <b>·</b> UI/UX Design <b>·</b> Git <b>·</b> TailwindCSS <b>·</b> Blueprint JS <b>·</b> React <b>·</b> Redux <b>·</b> TypeScript <b>·</b> NodeJs <b>·</b> ExpressJs <b>·</b> NPM */}
                </Reveal>
                <br></br>
                {/* <b>Description:</b>  */}
                <ul>
                {/* <Reveal>
                    <li>
                        <b>Frontend Lead (Chatbot Builder SaaS Project): </b> 
                        Led front-end development, ensuring a user-centric interface and effective design for the Chatbot Builder SaaS project, enhancing usability by 40%.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Payment Gateway Integration: </b> 
                        Integrated PayU for Indian customers and Stripe for international transactions into the chatbot platform, enabling seamless in-bot payments. This feature helps businesses scale 40-70% faster.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Integration in Chatbot Flow Builder: </b> 
                        Integrated third-party system APIs, enabling seamless data push to CRM systems like ZOHO, Salesforce, Zendesk, and HubSpot, covering 80% of the market.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Calendly Integration: </b> 
                        Implemented Calendly integration, allowing users to schedule meetings directly through the chatbot, streamlining the booking process and improving user experience.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Optimized User Flow for React Project: </b> 
                        Enhanced user flow by addressing key challenges and implementing strategic improvements, resulting in a 35% increase in overall usability and user satisfaction.
                    </li>
                </Reveal> */}
                </ul>
            </div>
        </div>
    </div>
</div>

const content_2022 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Graduated From B-Tech</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Computer Science In Engineering</p></Reveal>
            <Reveal><p className={style.expDuration}>Aug 2022 - July 2025</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> UI development <b>·</b> UI/UX Design <b>·</b> Git <b>·</b> Web Services API <b>·</b> HTML5 <b>·</b> CSS3 <b>·</b> Tailwind <b>·</b> JavaScript <b>·</b> React <b>·</b> TypeScript <b>·</b> NodeJs <b>·</b> ExpressJs</Reveal>
                <br></br>
                <b>Description:</b>
                <ul>
                    <Reveal>
                        <li>
                            <b>UI/UX Design Enthusiast: </b>
                         Applied modern design principles to craft intuitive and user-friendly interfaces, significantly enhancing user satisfaction and engagement across multiple web projects.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>React Front-End Developer:</b>
                            Built dynamic and responsive single-page applications using React. Utilized hooks, state management, and component-based architecture to deliver seamless user experiences.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>Tailwind CSS Developer: </b>
                            Rapidly developed clean, responsive UIs using Tailwind CSS utility classes, enabling consistent design systems and faster development cycles.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>API Integration & Backend Developer: </b>
                            Developed and integrated RESTful APIs using Node.js and Express.js to support real-time data and secure communication between client and server.
                        </li>
                    </Reveal>
                </ul>
            </div>
        </div>
    </div>
</div>

const content_2021 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Humming Byte Technologies Private Limited</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Frontend Web Developer <b>·</b> Internship</p></Reveal>
            <Reveal><p className={style.expDuration}>Jan 2024 - Jun 2024</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> Design <b>·</b> User Experience Design (UXD) <b>·</b> User Interface Design(UID) <b>·</b> Git <b>·</b> Web Design <b>·</b> HTML5 <b>·</b> CSS3</Reveal>
                <br></br>
                <Reveal>
                    <b>Description:</b>
                    <ul>
                        <Reveal>
                            <li>
                                <b>Web Interface Development: </b>
                                Designed and constructed a user-friendly web interface for a high-impact campaign, emphasizing both visual appeal and
                                functional efficiency. Ensured the online presence aligned with campaign objectives, providing an engaging and effortless experience for users.
                            </li>
                        </Reveal>
                        <Reveal>
                            <li>
                                <b>Design Layout Proficiency: </b>
                                Acquired valuable expertise in crafting effective design layouts for webpages, enhancing the visual appeal and overall user
                                experience of online content. Demonstrated a keen eye for design principles, contributing to the creation of visually compelling and intuitive web
                                layouts.
                            </li>
                        </Reveal>
                    </ul>
                </Reveal>
            </div>
        </div>
    </div>
    
</div>

const content_2020 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Started learning Web development</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Got Certifications</p></Reveal>
            <Reveal><p className={style.expDuration}></p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> HTML <b>·</b> CSS <b>·</b> JavaScript</Reveal>
            </div>
        </div>
    </div>
</div>

const content_2019 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Graduated From Diploma</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Computer Science</p></Reveal>
            
        </div>
    </div>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Got into College</h3></Reveal>
            <Reveal><p className={style.expDesignation}>B-Tech. Computer Science In Enginearing</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Sandip University</b></Reveal>
            </div>
        </div>
    </div>
</div>

const Details = ({ year }) => {
    const darkMode = useSelector((state) => state.navstate.darkMode)
    switch (year) {
        case '2023': return <div className={darkMode ? style.darkMode : ''}>{content_2023}</div>
        case '2022': return <div className={darkMode ? style.darkMode : ''}>{content_2022}</div>
        case '2021': return <div className={darkMode ? style.darkMode : ''}>{content_2021}</div>
        case '2020': return <div className={darkMode ? style.darkMode : ''}>{content_2020}</div>
        case '2019': return <div className={darkMode ? style.darkMode : ''}>{content_2019}</div>
        default: return content_2023
    }
}

export default Details