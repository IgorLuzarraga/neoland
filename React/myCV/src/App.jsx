import './App.css'
import { CV } from "./data/data.cv"
import Hero from "./components/Hero/Hero"
import About from './components/About/About'
import Education from "./components/Education/Education"
import Experience from './components/Experience/Experience'
import More from './components/More/More'

import { useState } from 'react'

const { hero, education, experience, languages, habilities, volunteer } = CV;

//const { hero, education } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      {/* <Education education={education} />
      <Experience experience={experience} /> */}

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

      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />

    </div>
  );
}

export default App;
