import githubLogo from "/logos/github-mark.png";
import linkedinLogo from "/logos/In-Blue-128@2x.png";
import instagramLogo from "/logos/Instagram_Glyph_Gradient.png";
import soundCloudLogo from "/logos/SoundCloudLogo_cloudmark.jpg";
import youtubeLogo from "/logos/youtube_social_icon_red.png";
import controls from "/controls.gif";
import allConrolArrows from "/allConrolArrows.png";

export default function Home() {
  return (
    <main
      className="select-none p-5 pb-10 flex flex-col gap-5 items-center overflow-y-scroll scrollbar-thin mt-8 overflow-x-hidden"
      style={{ height: "98%" }}
    >
      <section className="text-center">
        <div className="text-5xl font-bold mb-8">
          <h1>Hi!&nbsp;I&apos;m&nbsp;Emre,</h1>
          <h1 className="mt-5">
            <span className="text-stone-700 hover:text-black">
              Fullstack Web Developer
            </span>
            <span className="text-stone-700"> / </span>
            <span className="text-stone-700 hover:text-black">Linux User</span>
            <span className="text-stone-700"> /</span>
            <span className="text-stone-700 hover:text-black block mt-2">
              Musician
            </span>
          </h1>
        </div>
      </section>

      <section className="w-full">
        <p className="text-lg max-w-3xl mx-auto text-center">
          I have experience in a variety of technologies including React,
          Node.js, and Next.js (you can see more of them from the{" "}
          <a className="text-cyan-700 hover:text-cyan-500" href="#Tools">
            Tools
          </a>{" "}
          section). I believe in writing clean, maintainable code and following
          best practices to ensure the best possible outcomes for the projects I
          work on. I&apos;m always open to new opportunities and collaborations,
          so feel free to reach out!
        </p>
      </section>

      <section className="w-full mt-12 max-w-3xl">
        <span className="text-lg mx-auto text-center flex flex-col justify-center max-w-xl">
          You can use the ship to navigate in site, close this popup and use
          &aposi;W&aposİ, &apos;A&apos;, &apos;S&apos;, &apos;D&apos; (or
          controls on page if you&apos;r using a mobile device) to move and
          reach the pinned points.
        </span>
        <div className="flex items-center justify-center flex-wrap gap-4 mt-5"> 
          <img src={controls} alt="keyboard-controls" className="w-[20vw] sm:w-36"/>
          <span>Or</span>
          <img src={allConrolArrows} alt="mobile-controls" className="w-[20vw] sm:w-36" />
        </div>
      </section>

      <div className="w-full max-w-3xl mx-auto mt-12">
        <h2 className="text-3xl font-bold">Links</h2>
        <div className="flex mt-2 align-center justify-center gap-3">
          <a href="https://github.com/limonatasuyu" target="_blank">
            <img width={50} src={githubLogo} />
          </a>
          <a href="https://www.linkedin.com/in/emredilek" target="_blank">
            <img width={50} src={linkedinLogo} />
          </a>
          <a href="https://www.instagram.com/ondabeatt/" target="_blank">
            <img width={50} src={instagramLogo} />
          </a>
          <a href="https://soundcloud.com/emredilek/" target="_blank">
            <img width={50} src={soundCloudLogo} />
          </a>
          <a
            href="https://www.youtube.com/@woahelmo_"
            target="_blank"
            className="flex flex-col justify-center"
          >
            <img width={50} src={youtubeLogo} />
          </a>
        </div>
      </div>
    </main>
  );
}
