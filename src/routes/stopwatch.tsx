import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react';

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
    const [ seconds, setSeconds ] = useState<number | 0>(0);
    const [ isRunning, setIsRunning ] = useState<boolean>(false);
    const [ isPaused, setIsPaused ] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleStart = () => {
      if(intervalRef.current) return;
      
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIsRunning(true);
      setIsPaused(false);
    }

    const handleStop = () => {
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
      setIsPaused(true);
    }

    const handleReset = () => {
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setSeconds(0);
      setIsRunning(false);
      setIsPaused(false);
    }
    

    return (
      <div className='flex h-full items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-4 border-2 border-gray-200 rounded p-24'>
          <p>{seconds} seconds ellapsed</p>
          <div className='flex gap-4'>
            {
              isRunning && !isPaused && (
                <button onClick={handleStop} className='bg-gray-500 text-white p-2 rounded'>Pause</button>
              )
            }
            {
              !isRunning && !isPaused && (
                <button onClick={handleStart} className='bg-green-500 text-white p-2 rounded'>Start</button>
              )
            }
            {
              isPaused && (
                <>
                  <button onClick={handleStart} className='bg-gray-500 text-white p-2 rounded'>Resume</button>
                  <button onClick={handleReset} className='bg-red-500 text-white p-2 rounded'>Stop</button>
                </>
              )
            }
          </div>
        </div>
      </div>
    )
}
