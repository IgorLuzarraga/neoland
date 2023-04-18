import React, { useEffect, useState } from 'react'

type Props = {}

const DigitalClock = (props: Props) => {
    const [clockState, setClockState] = useState('')

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
        }, 1000)
    }, [])

  return (
        <div className='flex justify-center items-center w-36 h-10 
                        border-4 border-solid border-black rounded-lg
                        bg-slate-400'>
          <p className='text-2xl font-extrabold text-blue-700'>{clockState}</p>
        </div>
  )
}

export default DigitalClock