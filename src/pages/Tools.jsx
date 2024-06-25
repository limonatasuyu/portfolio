import cssLogo from "/logos/css3.png";
import expressLogo from "/logos/express.png";
import flaskLogo from "/logos/flask.png";
import htmlLogo from "/logos/html5.png";
import javascriptLogo from "/logos/javascript.png";
import mongodbLogo from "/logos/mongodb.png";
import mysqlLogo from "/logos/mysql.png";
import nestjsLogo from "/logos/nestjs.png";
import nextjsLogo from "/logos/nextjs.png";
import prismaLogo from "/logos/prisma.png";
import pythonLogo from "/logos/python.png";
import reactLogo from "/logos/react.png";
import tailwindLogo from "/logos/tailwindcss.png";
import threejsLogo from "/logos/threejs.png";
import typescriptLogo from "/logos/typescript.png";
import vitejsLogo from "/logos/vitejs.png";
import tux from "/logos/tux.png";
import { useSpring, animated } from '@react-spring/web';

export default function Tools() {
  const tools = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", logo: htmlLogo, description: "Markup language for the web." },
        { name: "CSS3", logo: cssLogo, description: "Styling for web pages." },
        { name: "JavaScript", logo: javascriptLogo, description: "Scripting language for web development." },
        { name: "TypeScript", logo: typescriptLogo, description: "Typed superset of JavaScript." },
        { name: "React", logo: reactLogo, description: "JavaScript library for building UIs." },
        { name: "Next.js", logo: nextjsLogo, description: "React framework with server-side rendering." },
        { name: "Tailwind CSS", logo: tailwindLogo, description: "Utility-first CSS framework." },
        { name: "Three.js", logo: threejsLogo, description: "3D library for WebGL." },
        { name: "Vite", logo: vitejsLogo, description: "Next-generation front-end tool." },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Express", logo: expressLogo, description: "Web framework for Node.js." },
        { name: "NestJS", logo: nestjsLogo, description: "Progressive Node.js framework." },
        { name: "Flask", logo: flaskLogo, description: "Micro web framework for Python." },
        { name: "Python", logo: pythonLogo, description: "Versatile programming language." },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", logo: mongodbLogo, description: "NoSQL database." },
        { name: "MySQL", logo: mysqlLogo, description: "Relational database management system." },
        { name: "Prisma", logo: prismaLogo, description: "Next-generation ORM." },
      ],
    },
    {
      category: "Others",
      items: [
        { name: "Linux", logo: tux, description: "Open-source operating system." },
      ],
    },
  ];

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
    <main className="select-none p-5 flex flex-col gap-10 items-center overflow-y-scroll scrollbar-thin mt-8" style={{ height: "98%" }}>
      <animated.section style={fadeIn} className="text-center mb-8">
        <h1 className="text-5xl font-bold">Tools</h1>
        <div className="mt-2">Tools that i&apos;m familiar with</div>
      </animated.section>
      {tools.map((category) => (
        <section key={category.category} className="w-full mb-10">
          <animated.div style={slideIn}>
            <h2 className="text-3xl font-bold mb-6 text-center">{category.category}</h2>
          </animated.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.items.map((tool) => (
              <animated.div key={tool.name} style={zoomIn} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="h-20 w-20 grid justify-center">
                <img src={tool.logo} alt={tool.name} className="max-w-20 max-h-20 self-center" />
                </div>
                <span className="mt-2 text-lg font-medium">{tool.name}</span>
                <p className="text-center text-sm mt-1">{tool.description}</p>
              </animated.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

