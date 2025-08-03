import "../App.css";

import pinas from "@assets/projects/pinas_mock.webp";
import philippine from "@assets/projects/philippine_mock.webp";
import quiz from "@assets/projects/quiz_mock.webp";

import ProjectHighlight from "@components/ProjectHighlight";
import Navigator from "@components/Navigator";

function App() {
  const highlightProjectsObj = [
    {
      image: pinas,
      title: "Pinasmura PH",
      description: "Online consultation clinic",
    },
    {
      image: philippine,
      title: "Philippines currency recognition",
      description: "Online consultation clinic",
    },
    {
      image: quiz,
      title: "Quiztwist",
      description: "Online consultation clinic",
    },
    {
      image: pinas,
      title: "Pinasmura PH",
      description: "Online consultation clinic",
    },
    {
      image: philippine,
      title: "Philippines currency recognition",
      description: "Online consultation clinic",
    },
  ];

  return (
    <>
      {/* NAVIGATOR */}
      <Navigator />

      {/* INTRO TEXT */}
      <p className="mx-auto mt-36 mb-20 w-10/12 max-w-2xl text-center leading-relaxed font-extralight md:text-lg">
        A <span className="text-proggreen">passionate enthusiast</span> of web
        development, design, and automation. With a natural curiosity for
        technology and a{" "}
        <span className="text-proggreen">flair for innovation</span>.
      </p>

      {/* ALBUM */}
      <div className="project-album container mx-auto my-14 flex flex-wrap justify-center gap-30 px-10 md:gap-12 lg:gap-20">
        {/* Item */}
        {highlightProjectsObj.map((project, index) => (
          <>
            {/* item */}
            <ProjectHighlight data={project} key={index} />
          </>
        ))}

        {/* item */}
        <div className="project-item w-full max-w-lg md:mb-10 md:w-2xs lg:w-5/12"></div>
      </div>

      {/* OUTRO */}
      <div className="mx-auto my-52 flex w-10/12 max-w-2xl flex-col gap-3 leading-relaxed font-extralight tracking-wider">
        <p>
          Aloha, I'm an self-taught Junior Full-Stack Web Developer and Computer
          Science student. I create websites that look good, feel good, work
          well, and are easy to use. When I have free time, I like to find ways
          to improve my work.
        </p>
        <a href="/" className="font-semibold uppercase">
          More about me
        </a>
      </div>

      {/* FOOTER */}
      <footer className="container mx-auto my-14 h-52 w-10/12 rounded-md"></footer>
    </>
  );
}

export default App;
