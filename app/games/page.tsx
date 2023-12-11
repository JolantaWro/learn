import Link from "next/link";


export default function GamesHome() {
  return (
    <main className="container mx-auto">
        <h1>Main Page of Game</h1>
        <p>................</p>
        <p>Something about games words with photo</p>
        <p>................</p>
        <p>Link to games:</p>
        <Link href="/games/words">Words games</Link>
        <Link href="/not-found">Counting games</Link>
        <Link href="/not-found">Puzzles</Link>
    </main>
  )
}
