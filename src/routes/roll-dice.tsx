import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/roll-dice')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ diceValue, setDiceValue ] = useState<number | undefined>();

  function handleRoll(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNumber);
  };

  return <div className=' h-full flex flex-col items-center justify-center gap-4'>
    <button className='bg-gray-500 hover:bg-gray-800 rounded p-2' onClick={handleRoll}>Roll Dice</button>
    {
      diceValue !== undefined && (
        <div className='size-24 bg-gray-50 p-4 rounded flex items-center justify-center gap-4'>
          {diceValue === 1 && <p className='bg-black rounded-full size-5'></p>}
          {diceValue === 2 && (
            <>
              <p className='bg-black rounded-full size-5'></p>
              <p className='bg-black rounded-full size-5'></p>
            </>
          )}
          {diceValue === 3 && (
            <div className='flex flex-col gap-2 w-full'>
              <div className='w-full flex justify-start'>
                <p className='bg-black rounded-full size-5 self-start'></p>
              </div>
              <div className='w-full flex justify-center'>
                <p className='bg-black rounded-full size-5'></p>
              </div>
              <div className='w-full flex justify-end'>
                <p className='bg-black rounded-full size-5'></p>
              </div>
            </div>
          )}
          {diceValue === 4 && (
            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full flex justify-center gap-4'>
                <p className='bg-black rounded-full size-5'></p>
                <p className='bg-black rounded-full size-5'></p>
              </div>
              <div className='w-full flex justify-center gap-4'>
                <p className='bg-black rounded-full size-5'></p>
                <p className='bg-black rounded-full size-5'></p>
              </div>
            </div>
          )}
          {diceValue === 5 && (
            <div className='flex flex-col gap-2 w-full'>
              <div className='w-full flex justify-center gap-6'>
                <p className='bg-black rounded-full size-5'></p>
                <p className='bg-black rounded-full size-5'></p>
              </div>
              <div className='w-full flex justify-center'>
                <p className='bg-black rounded-full size-5'></p>
              </div>
              <div className='w-full flex justify-center gap-6'>
                <p className='bg-black rounded-full size-5'></p>
                <p className='bg-black rounded-full size-5'></p>
              </div>
            </div>
          )}
          {diceValue === 6 && (
             <div className='flex flex-col gap-4 w-full'>
              <div className='w-full flex justify-center gap-2'>
                <p className='bg-black rounded-full size-4'></p>
                <p className='bg-black rounded-full size-4'></p>
                <p className='bg-black rounded-full size-4'></p>
              </div>
              <div className='w-full flex justify-center gap-2'>
                <p className='bg-black rounded-full size-4'></p>
                <p className='bg-black rounded-full size-4'></p>
                <p className='bg-black rounded-full size-4'></p>
              </div>
           </div>
          )}
        </div>
      )
    }
  </div>
}
