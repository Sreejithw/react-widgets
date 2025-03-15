import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex gap-4'>
    <Link 
      className='text-blue-400 hover:text-blue-500 bg-white p-4 rounded-md shadow-md' to="/rock-paper-scissors"
      >
        Rock Paper Scissors
    </Link>
    <Link
      className='text-blue-400 hover:text-blue-500 bg-white p-4 rounded-md shadow-md' to="/stopwatch"
      >
      Stop Watch
    </Link>
    <Link 
      className='text-blue-400 hover:text-blue-500 bg-white p-4 rounded-md shadow-md' to="/roll-dice"
      >
     Roll dice
    </Link>
  </div>
}
