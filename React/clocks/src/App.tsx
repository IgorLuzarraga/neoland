import DigitalClock from './components/digitalClock'
import CountDown from './components/countDown'
import './index.css'
import Chronometer from './components/chronometer'

function App() {
  return (
      <div className='w-full p-5'>
        <div className='w-5/6 mx-auto flex justify-center'>
          <div className='bg-gray-300 p-3 flex flex-col gap-7 justify-center 
                          items-center border-4 rounded-xl border-black border-solid
                          ring-4 ring-gray-300'
          > 
            <DigitalClock />
            <CountDown />
            <Chronometer />
          </div>
        </div>
      </div>
    
  )
}

export default App
