import './App.css'
import { CV } from "./data/data.cv"
import Hero from "./components/Hero/Hero"
import About from './components/About/About'
import Education from "./components/Education/Education"
import Experience from './components/Experience/Experience'
import More from './components/More/More'

import { useState } from 'react'

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />

      {showHorizontalLine('About Me')}

      <About hero={hero} />

      <div className='education-experience-btns'>
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>

        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}
        >
          Experience
        </button>
      </div>

      {/* <div>
        { if (showEducation) {
          showHorizontalLine('Education')
          <Education education={education} />
         } else {}
          <Experience experience={experience} />
        }
      </div> */}
      {showEducationOrExperience(
        showEducation,
        education,
        experience
      )
      }

      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />

    </div>
  );
}

const showEducationOrExperience = (showEducation) =>
  (showEducation)
    ?
    <>
      {showHorizontalLine('Education')}
      <Education education={education} />
    </>
    :
    <>
      {showHorizontalLine('Experience')}
      <Experience experience={experience} />
    </>

const showHorizontalLine = (text) =>
  <div className='horizontal-line-container'>
    <hr className='horizontal-line'></hr>
    {text}
    <hr className='horizontal-line'></hr>
  </div>


export default App;
