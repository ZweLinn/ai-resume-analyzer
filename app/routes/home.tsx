import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Smart AI-powered resume analyzer" },
  ];
}

export default function Home() {
  return (
    <main className='main-section'>
      <Navbar/>
      <section className="main-section">
        <div className="page-heading">
          <h1>Welcome to CVision</h1>
        </div>
      </section>

    </main>
  )
}
