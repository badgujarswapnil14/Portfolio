import react from 'react'
import '../../css/educationTimeline.css'
import Reveal from '../Reveal'
import { useSelector } from 'react-redux'

const TimeLine = () => {
    const darkMode = useSelector((state) => state.navstate.darkMode)
    return (

        <div className={`${darkMode ? 'darkMode' : ''} timeline`}>
            <ul>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>Humming Byte Technologies Private Limited</h2>
                            <p>
                                Frontend Intership - <span><a href='https://drive.google.com/file/d/1zCyBPZXNtgMzk6ivVi81y8jx-G61Z7tu/view?usp=sharing' target="_blank" rel="noopener noreferrer" >Certificate</a></span>
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Jan 2024</h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>Coding Seekho Institute</h2>
                            <p>
                                Web Development - <span><a href='https://drive.google.com/file/d/1ts0fkOtTYhJJWobRjbmmJ_wklyMcEgGJ/view?usp=sharing' target="_blank" rel="noopener noreferrer" >Certificate</a></span>
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Feb 2023-24 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>Sandip University</h2>
                            <p>
                                B-Tech. Computer Science
                                                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Aug 2022-25</h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>K K Wagh Polytechnic</h2>
                            <p>
                                Diploma In Computer Science
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Aug 2019-22 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>K Narkhede Vidyalaya</h2>
                            <p>
                                10th
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>June 2018-19</h3>
                    </div>
                </li>
                <div style={{ clear: 'both' }}></div>
            </ul>
        </div>
    )
}

export default TimeLine