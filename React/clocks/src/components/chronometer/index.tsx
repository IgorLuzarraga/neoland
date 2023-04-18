import { useState, useEffect } from 'react'

type Props = {}

enum ChronometerState {
    Initial = "initial",
    Started = "started",
    Stoped = "stoped",
}

type ShowBtnsProps = {
    setTime: (value: number) => void,
    chronometerSt: ChronometerState,
    setChronometerSt: (value: ChronometerState) => void
}

type BtnResetProps = {
    setTime: (value: number) => void,
    setChronometerSt: (value: ChronometerState) => void
}

type BtnProps = {
    setChronometerSt: (value: ChronometerState) => void
}

type TimerProps = {
    time: number
}

const BtnStart = ({setChronometerSt}: BtnProps)  => 
    <button 
        className='bordr-8 border-solid rounded-2xl border-green-600
                   bg-green-300 w-36 h-10 text-xl font-serif'
        onClick={() => setChronometerSt(ChronometerState.Started)}
    >
        Start
    </button>

const BtnStop = ({setChronometerSt}: BtnProps)  => 
    <button
        className='bordr-8 border-solid rounded-2xl border-black
                 bg-red-400 w-36 h-10 text-xl font-sans' 
        onClick={() => setChronometerSt(ChronometerState.Stoped)}
    >
        Stop
    </button>

const BtnReset = ({setTime, setChronometerSt}: BtnResetProps)  => 
    <button 
        className='bordr-8 border-solid rounded-2xl border-black
                bg-red-800 w-36 h-10 font-mono text-2xl' 
        onClick={() => {
            setChronometerSt(ChronometerState.Initial)
            setTime(0)
        }}
    > 
        Reset
    </button>

const BtnResume = ({setChronometerSt}: BtnProps)  => 
    <button 
        className='bordr-8 border-solid rounded-2xl border-black
                bg-blue-800 w-36 h-10 font-mono text-2xl' 
        onClick={() => setChronometerSt(ChronometerState.Started)}
    >
        Resume
    </button>

const ControlBtn = ({setTime, chronometerSt, setChronometerSt}: ShowBtnsProps) => {
    switch (chronometerSt) {
        case ChronometerState.Initial:
            return <BtnStart setChronometerSt={setChronometerSt}/>
        case ChronometerState.Started:
            return <BtnStop setChronometerSt={setChronometerSt}/>
        case ChronometerState.Stoped:
            return (
                <div className='flex gap-4'>
                    <BtnReset setTime = {setTime} setChronometerSt={setChronometerSt}/>
                    <BtnResume setChronometerSt={setChronometerSt}/>
                </div>
            )
    }
}

const Timer = ({time}: TimerProps) => 
    <div 
        className='flex justify-center items-center w-36 h-10 
            border-4 border-solid border-black rounded-lg
            bg-slate-400'
    >
        <p className='text-2xl font-extrabold text-blue-700'>{time}</p>
    </div>

const Chronometer = (props: Props)  => {
    const [time, setTime] = useState(0);
    const [chronometerSt, setChronometerSt] = useState(ChronometerState.Initial);
  
    useEffect(() => {
      let interval: number = -1;

     switch (chronometerSt) {
        case ChronometerState.Started:
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
            break
        case ChronometerState.Initial:
        case ChronometerState.Stoped:
            clearInterval(interval)
            break
     }
  
      return () => clearInterval(interval);
    }, [chronometerSt]);

    return(
        <div className='flex flex-col gap-5 justify-center items-center'>
           <Timer time={time} />

            <ControlBtn 
                setTime={setTime} 
                chronometerSt={chronometerSt} 
                setChronometerSt={setChronometerSt} 
            />
        </div>
    )
  }




export default Chronometer