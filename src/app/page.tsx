import Contact from "@/home-sections/contact";
import Intro from "@/home-sections/intro";
import Mission from "@/home-sections/mission";
import News from "@/home-sections/news";
import Projects from "@/home-sections/projects";

export default function Home() {
  return (
    <>
      <Intro />
      <Mission />
      <Projects />
      <News />
      <Contact />
    </>
  );
}
