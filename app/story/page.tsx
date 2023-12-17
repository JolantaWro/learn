import Link from "next/link";


export default function StoryHome() {
  return (
    <main className="container mx-auto">
      <div className="px-30  py-10 flex flex-col items-center">
        <h1 className="text-5xl">Main Page of .........Story.........</h1>
          <p>................</p>
          <p>Something about storys in portal</p>
          <p>................</p>
          <p>Link to games:</p>
          <Link href="/games/words">Words games</Link>
          <Link href="/not-found">Counting games</Link>
          <Link href="/not-found">Puzzles</Link>

      </div>
        
    </main>
  )
}
