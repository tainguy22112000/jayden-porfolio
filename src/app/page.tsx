import Hero from "@/components/main/Hero";
import { MenuNavigation } from "@/components/main/MenuNavigation";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <MenuNavigation />

      <div className="flex flex-col gap-6 items-center">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
