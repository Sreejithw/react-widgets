import { createFileRoute } from '@tanstack/react-router'
import { BrickWall, Handshake, PartyPopper, Scissors, Scroll, SkullIcon } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})


type Weapon = 'rock' | 'paper' | 'scissors'
const weapons = ["rock", "paper", "scissors"] as const;

function RouteComponent() {

    const [playerChoice, setPlayerChoice] = useState<Weapon | null>(null)
    const [computerChoice, setComputerChoice] = useState<Weapon | null>(null)
    const [gameState, setGameState] = useState<'playing' | 'done'>('playing')

    const handlePlayerChoice = (weapon: Weapon) => {
        setPlayerChoice(weapon);
        const randomIndex = Math.floor(Math.random() * weapon.length);
        const randomWeapon = weapons[randomIndex];
        setComputerChoice(randomWeapon);
        setGameState('done');
    }

    function getResult(){

        let message = <></>;

        if(playerChoice === computerChoice){
            message = (
                <>
                    <Handshake className='size-12' /> 
                    Draw 
                </>
            );
        } else if( playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper'){
            message = (
                <>
                    <PartyPopper className='size-12' /> You Wiin 
                </>
            );
        } else {
            message = (
                <>
                    <SkullIcon className='size-12' /> You lose 
                </>
                
            )
        }

        return (
            <div className='flex flex-col items-center justify-center gap-4'>
                { message }
            </div>
        );
    }

    function restartGame(){
        setPlayerChoice(null);
        setComputerChoice(null);
        setGameState('playing');
    }

    return (
        <div className='flex flex-col h-full items-center justify-center gap-8'>
            { gameState === 'playing' ? (
                <>
                    <h1>Choose your weapon</h1>
                    <div className='flex items-center justify-center gap-8'>
                        <button onClick={() => handlePlayerChoice('rock')} className='w-44 h-52 p-8 flex flex-col items-center justify-center ga-4 border border-gray-500 rounded bg-gray-800 hover:bg-gray-900'>
                            <BrickWall className='size-10' />
                            Rock
                        </button>
                        <button onClick={() => handlePlayerChoice('paper')} className='w-44 h-52 p-8 flex flex-col items-center justify-center ga-4 border border-gray-500 rounded bg-gray-800 hover:bg-gray-900'>
                            <Scroll className='size-10' />
                            Paper
                        </button>
                        <button onClick={() => handlePlayerChoice('scissors')} className='w-44 h-52 p-8 flex flex-col items-center justify-center ga-4 border border-gray-500 rounded bg-gray-800 hover:bg-gray-900'>
                            <Scissors className='size-10' />
                            Scissors
                        </button>
                    </div>
                </>
            ) : (
                <>
                 <p>You chose { playerChoice }, Computer chose { computerChoice }</p>
                 <p>{ getResult ()}</p>
                 <button className='bg-blue-500 text-white p-2 rounded' onClick={restartGame}>Play again</button>
                </>
            )}
        </div>
    )
}
