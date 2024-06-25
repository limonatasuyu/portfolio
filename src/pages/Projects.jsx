import chromeExtensionVideo from "/screenshots/chrome-extension.mp4";
import youtubeCloneScreenshot from "/screenshots/youtube-clone.png";
import ThisSiteScreenShot from "/screenshots/thissite.png";
import githubLogo from "/logos/github-mark.png";

export default function Projects() {
  const projects = [
    {
      name: "This Website",
      description: "This website built with React and three.js.",
      screenshot: ThisSiteScreenShot,
      sourceCodeLink: "https://github.com/limonatasuyu/portfolio",
      liveVersionLink: "https://limonatasuyu.github.io/portfolio",
    },
    {
      name: "YouTube Clone",
      description: "A YouTube clone built with React, showcasing video streaming and other functionalities.",
      screenshot: youtubeCloneScreenshot,
      sourceCodeLink: "https://github.com/limonatasuyu/react-youtube-clone/",
      liveVersionLink: "https://limonatasuyu.github.io/react-youtube-clone/",
    }, 
    {
      name: "Chrome Extension for Subtitles",
      description: "A Chrome extension to find and display subtitles online using vanilla JavaScript.",
      video: chromeExtensionVideo,
      sourceCodeLink: "https://github.com/limonatasuyu/SubFinder",
    },
 ];

  return (
    <main className="select-none p-5 flex flex-col gap-10 items-center overflow-y-scroll scrollbar-thin mt-8" style={{ height: "98%" }}>
      <section className="text-center mb-8">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="mt-2">Some of the projects i&apos;ve made.</div>
      </section>
      {projects.map((project) => (
        <section key={project.name} className="w-full mb-10">
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-lg">
            {project.screenshot ? <img src={project.screenshot} alt={`${project.name} screenshot`} className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg" /> : 
              <video autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.sourceCodeLink} target="_blank" className="flex items-center">
                <img src={githubLogo} alt="GitHub" width={24} className="mr-2" />
                Source Code
              </a>
              {project.liveVersionLink ? <a href={project.liveVersionLink} target="_blank" className="text-blue-500 hover:underline">
                Live Version
              </a> : <div>Sadly, it&apos;s not released yet</div>}
            </div>
          </div>
        </section>
      ))}
      <section className="w-full text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">More Projects</h2>
        <p className="text-lg mb-4">
          You can find more of the projects I&apos;ve made on my GitHub profile.
        </p>
        <a href="https://github.com/limonatasuyu" target="_blank" className="flex items-center justify-center">
          <img src={githubLogo} alt="GitHub" width={24} className="mr-2" />
          My GitHub Profile
        </a>
      </section>
    </main>
  );
}

