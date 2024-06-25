import { useSpring, animated } from "@react-spring/web";
import soundCloudLogo from "/logos/SoundCloudLogo_cloudmark.jpg";

export default function Others() {
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

  const soundCloudLinks = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1850500875&color=%23ff5500&a  uto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1810300698&color=%23ff5500&a  uto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1784613393&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  ];

  return (
    <main
      className="select-none p-5 flex flex-col gap-10 items-center overflow-y-scroll scrollbar-thin mt-8"
      style={{ height: "98%" }}
    >
      <animated.section style={fadeIn} className="text-center mb-4">
        <h1 className="text-5xl font-bold">Others</h1>
      </animated.section>
      <section className="w-full max-w-3xl mx-auto">
        <animated.div
          style={slideIn}
          className="text-lg leading-relaxed text-center mb-8"
        >
          <p>
            Here are some of my tracks on SoundCloud. Feel free to listen and
            enjoy!
          </p>
        </animated.div>

        <animated.div style={zoomIn} className="flex flex-col gap-6">
          {soundCloudLinks.map((link, index) => (
            <div key={index} className="w-full flex justify-center">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={link}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          ))}
        </animated.div>
      </section>
      <section className="w-full text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Wanna Listen More ?</h2>
        <p className="text-lg mb-4">
          You can find more music I&apos;ve made on my Soundcloud profile.
        </p>
        <a
          href="https://github.com/limonatasuyu"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src={soundCloudLogo}
            alt="SoundCloud"
            width={24}
            className="mr-2"
          />
          My Soundcloud profile
        </a>
      </section>
    </main>
  );
}
