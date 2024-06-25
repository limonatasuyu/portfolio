import { useSpring, animated } from "@react-spring/web";
//import cvFile from '/cv.pdf'; // Make sure this path is correct

export default function About() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateY(100px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1000 },
  });

  const zoomIn = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <main
      className="select-none p-5 pb-10 flex flex-col gap-10 items-center overflow-y-scroll scrollbar-thin mt-8"
      style={{ height: "98%" }}
    >
      <animated.section style={fadeIn} className="text-center mb-8">
        <h1 className="text-5xl font-bold">About Me</h1>
      </animated.section>

      <section className="w-full max-w-3xl mx-auto">
        <animated.div style={slideIn} className="text-lg leading-relaxed text-center">
          <p>
            Hello! I&apos;m Emre, a passionate{" "}
            <span className="text-cyan-700 hover:text-cyan-500">Fullstack Web Developer</span> with extensive
            experience in <span className="text-cyan-700 hover:text-cyan-500">Next.js</span>. Over the past 4
            years, I have honed my skills as a{" "}
            <span className="text-cyan-700 hover:text-cyan-500">Linux user</span> and developed a keen
            interest in creating impactful solutions.
          </p>
          <p>
            I currently reside in Antalya, where I&apos;ve been for the past 9 months, but i&apos;m originally
            from Kastamonu/İnebolu. I have professional experience working as a fullstack developer, focusing
            on Next.js projects. Additionally, I frequently take on freelance projects, utilizing my fullstack
            expertise to deliver high-quality results.
          </p>
          <p>
            In my free time, I enjoy watching cartoons such as South Park and MTV&apos;s Downtown. I also love
            making beats and hanging out with friends. Additionally, I enjoy listening to music like techno,
            hip-hop, breakcore, and drum and bass.
          </p>
          <p>
            My goal is to create meaningful work that positively impacts others&apos; lives. I am excited to
            bring my skills and passion to new challenges and opportunities.
          </p>
          <p>Let&apos;s connect and make something amazing together!</p>
        </animated.div>
      </section>
    </main>
  );
}
