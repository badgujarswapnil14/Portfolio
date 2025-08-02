import styles from '../../css/intro.module.css';
import img from '../../assets/images/new4.png';
import { TypeAnimation } from 'react-type-animation';
import {ReactComponent as Github} from '../../assets/images/github.svg'
import {ReactComponent as Insta} from '../../assets/images/instagram.svg'
import {ReactComponent as Fb} from '../../assets/images/facebook.svg'
import {ReactComponent as Twitter_X} from '../../assets/images/twitter-x.svg'
import {ReactComponent as LinkedIn} from '../../assets/images/linkedin.svg'
import {ReactComponent as Youtube} from '../../assets/images/youtube.svg'
import { useEffect } from 'react';
import { switchViewHandler } from '../NavigationHandler';
import { setLoading } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Reveal from '../Reveal'

const urls = {
    github: 'https://github.com/badgujarswapnil14',
    insta: 'https://www.instagram.com/swapnil_xd_/?next=%2F',
    linkedin: 'https://www.linkedin.com/in/swapnil-badgujar-5a5b00268/',
    youtube: 'badgujarswapnil14@gmail.com'
}

const Intro = ({ isActive }) => {

    const openUrl = (url_for) => {
        window.open(urls[url_for], '_blank')
    }

    const darkMode = useSelector((state) => state.navstate.darkMode)
    const loading = useSelector((state) => state.navstate.loading)
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('intro', navState, dispatch)
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 2000);
    }, [])

    return (
        isActive ?
            <>
                <Loader loading={loading} />
                { !loading ? <>
                    <div className={`${darkMode ? styles.darkMode : ''} ${styles.introWrapper}`}>
                        <div className={styles.introLines}>
                            <Reveal>
                                <p className={styles.greet}>Hola!</p>
                            </Reveal>
                            <Reveal>
                                <code className={styles.code}>&lt;<span style={{ color: 'var(--primary-blue)' }}>Code</span> + <span style={{ color: 'var(--primary-blue)' }}>Design</span>/&gt;</code>
                            </Reveal>
                            <Reveal>
                                <p className={styles.bigFont}>I'm
                                    <TypeAnimation
                                        className={styles.name}
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            " Swapnil.",
                                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                                            " a Software Engineer."
                                        ]}
                                        wrapper="span"
                                        speed={{type: "keyStrokeDelayInMs", value: 200}}
                                        deletionSpeed={2}
                                        preRenderFirstString={true}
                                        repeat={Infinity}
                                    />
                                </p>
                            </Reveal>
                            <Reveal type="horizontal">
                                <span className={styles.feel}><i>Glad to have you here</i> :)</span>                        
                            </Reveal>
                            <div className={`${darkMode ? styles.darkMode : ''} ${styles.socialAccounts}`}>
                                <Github onClick={() => openUrl('github')}/> 
                                <Insta onClick={() => openUrl('insta')}/>
                                
            
                                <LinkedIn onClick={() => openUrl('linkedin')}/>
                            </div>

                        </div>
                        <div className={styles.imgWrapper}>
                            {/* <div className={styles.meImg}> */}
                            <img src={img} alt={"Swapnil"}></img>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className={`${darkMode ? styles.darkMode : ''} ${styles.brief}`}>
                        <Reveal>
                            <div>
                                <h1>
                                    About
                                </h1>
                            </div>
                        </Reveal>
                        <div style={{fontFamily: 'Poppins'}}>
                            <Reveal>
                                <p>
                                    <b>Welcome</b> to my portfolio! 
                                    <br />
                                    <br />
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                    I am a passionate and <b>versatile Software Engineer</b> based in Nashik, India, I have strong foundation in languages such as <b>C++, JavaScript, TypeScript, React, HTML, and CSS</b>. 
                                    I specialize in frontend development, API integration.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                I am a passionate and self-driven frontend developer with a strong foundation in <b>HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS.</b> I enoy creating clean, responsive, and user-friendly web interfaces that deliver great user experiences. Currently, I’m focused on building real-world projects that showcase my skills and creativity.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                Over time, I’ve developed a solid understanding of frontend fundamentals including DOM manipulation, event handling, component lifecycle, and responsive design. I’ve spent consistent time mastering JavaScript, React, and Tailwind CSS, and I enjoy solving real-world UI challenges and bringing static designs to life through code.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                My goal is to grow as a frontend developer by continuously learning new technologies, writing clean and scalable code, and contributing to impactful products. I’m excited to join a team where I can apply my skills, collaborate with experienced developers, and contribute to meaningful web experiences.
                                </p>
                            </Reveal>
                            <Reveal>
                                <div style={{paddingTop: '20px'}}>
                                    <h3>Technologies I have worked on</h3>
                                    <img className={styles.stack} src={`https://skillicons.dev/icons?i=expressjs,react,nodejs,python,js,ts,redux,html,css,bootstrap,cpp,c,gitlab,htmx,ai,sublime,visualstudio,postman,tailwind,git,github,vscode,windows,npm,vite,windows,gsap&perline=15&theme=${darkMode ? 'dark' : 'light'}`} />
                                </div>
                            </Reveal>
                            <Reveal>
                                <div style={{paddingTop: '40px'}}>
                                    <a style={{padding: '10px', background: 'var(--primary-blue)', borderRadius: '4px'}} href='' target='_blank'>View Resume</a>
                                </div>
                            </Reveal>
                        </div>
                    </div></> : ''
                }
                
            </>
        : ''
    )
}

export default Intro