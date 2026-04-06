import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Smart AI-powered resume analyzer" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>
      <section className="main-section">
        <div className="page-heading">
          <h1>Welcome to CVision</h1>
        </div>
        {
          resumes.length > 0 && (
            <div className="resumes-section">
              {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </div>
          )
        }
      </section>

      
    </main>
  )
}
