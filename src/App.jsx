import './App.css';
import { useState } from 'react'; // Import useState hook
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaGithub, FaJava, FaDownload, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs, SiTailwindcss, SiMongodb  } from "react-icons/si";
import proj1 from "../public/proj1.png";
import proj2 from "../public/proj-2.jpg";
import proj3 from "../public/proj-3.png";
import proj4 from "../public/proj-4.png";
import resume from "../public/resume.pdf";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const handleToggle = () => {
    setDarkMode(!darkMode); // Toggle between true and false
  };

  console.log("Dark Mode:", darkMode); // Check the state in the console

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyali</h1>
            <ul className="flex gap-6 items-center">
              <li><a href="#about" className="hover:text-teal-500 hidden sm:block">About</a></li>
              <li><a href="#skills" className="hover:text-teal-500 hidden sm:block">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal-500 hidden sm:block">Projects</a></li>
              <li><a href="#contacts" className="hover:text-teal-500 hidden sm:block">Contact</a></li>
              <li 
                onClick={handleToggle} 
                className='cursor-pointer flex text-xl'>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 rounded-md ml-8' href={resume} target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>Pinjari Ali Rafique</h2>
            <h3 className='text-2xl py-2 md:text-3xl font-bold'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 text-justify dark:text-gray-200 max-w-xxl mx-auto md:text-lg'>
            I am a motivated and skilled web developer with hands-on experience in building full-stack web applications using modern technologies like Next.js, React.js, Tailwind CSS, and MongoDB. I have successfully developed and deployed responsive websites and applications, integrating secure user authentication and optimizing for performance and scalability. I am passionate about creating intuitive user interfaces and continuously expanding my expertise in front-end and back-end development.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://twitter.com/mdalirafique57" target="_blank" className='cursor-pointer hover:scale-110 hover:text-teal-500'><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/ali2pinjari/" target="_blank" className='cursor-pointer hover:scale-110 hover:text-teal-500'><AiFillLinkedin /></a>
            <a href="https://github.com/AliRafiquePinjari" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:scale-110 hover:text-teal-500'><AiFillGithub /></a>
          </div>
        </section>

        <section id='about' className='min-h-screen'>
          <div>
            <h3 className='text-3xl py-1'>About me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 justify-normal'>
              Hello everyone, I'm <span className="text-teal-500 font-medium">Pinjari Ali Rafique</span>, a Computer Engineering graduate from Godavari College of Engineering in Jalgaon, affiliated with DBATU Technical University, graduating in 2024. My specialization lies in <span className="text-teal-500 font-medium">web development</span>, where I've honed my skills in crafting user-friendly interfaces. I find great joy in tackling complex projects that demand creative problem-solving abilities.
            </p>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="ali2pinjari" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ali2pinjari?trk=profile-badge"><div className='mb-5 leading-8 text-gray-400'>For more information about my qualifications and certifications,<br /> please check out my LinkedIn profile.</div></a></div>
          </div>
          <div>
            <a href={resume} target='_blank'><button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 mt-2 rounded-md flex mr-auto '><FaDownload/>&nbsp;My Resume</button></a>
          </div>
        </section>

        <section id='skills' className='min-h-screen'>
          <div>
            <h4 className='text-teal-500'>PROFICIENCIES</h4>
            <h3 className='text-3xl py-1 mb-12'>Skills & Tools</h3>
          </div>
          <div className='justify-between grid grid-cols-2 gap-6 p-6 md:grid-cols-5'>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <AiFillHtml5 size={64} />
              <p className='text-lg'>HTML5</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              < FaCss3Alt size={64} />
              <p className='text-lg'>CSS3</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              < FaBootstrap  size={64} />
              <p className='text-lg'>Bootstrap</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-7 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              < SiTailwindcss   size={64} />
              <p className='text-lg'>Tailwind CSS</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <IoLogoJavascript size={64} />
              <p className='text-lg'>JavaScript</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <RiReactjsLine size={64} />
              <p className='text-lg'>React.js</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <SiNextdotjs size={64} />
              <p className='text-lg'>Nextjs</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <FaJava size={64} />
              <p className='text-lg'>Java</p>
            </div>

            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <SiMongodb  size={64} />
              <p className='text-lg'>MongoDB</p>
            </div>
            <div className='bg-slate-200 dark:bg-gray-800 p-8 flex flex-col items-center justify-center h-40 w-40 rounded-lg cursor-pointer hover:shadow-xl text-teal-500'>
              <FaGithub size={64} />
              <p className='text-lg'>Github</p>
            </div>

          </div>

        </section>

        <section id='projects' className='min-h-screen'>
          <h3 className=' text-3xl py-1'>Projects</h3>
          <p className='text-md py-2 mt-4 leading-8 text-gray-800 dark:text-gray-200 text-justify'>I've made different websites using HTML, CSS, JavaScript, Reactjs and Nextjs. One is for <span className='text-teal-500 font-bold'>blogging</span>, another is a <span className='text-teal-500 font-bold'>Shoe E-Commerce</span>, then there's a <span className='text-teal-500 font-bold'>tool to merge PDFs</span>, and a fun <span className='text-teal-500 font-bold'>Promptopia </span>a wikipedia for prompts for chat-gpt.<br /> These projects show my skills in making websites look good and work well using different technologies. <br />
            <span className='text-gray-500 dark:text-gray-400'>Click Image to view the code</span></p>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 transform hover:scale-110 cursor-pointer">
              <a href="https://github.com/AliRafiquePinjari/Blog_website" target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={proj1}
                  alt="Project 1"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1 transform hover:scale-110 cursor-pointer ">
              <a href="https://github.com/AliRafiquePinjari/Shoes-E-commerce-website?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={proj2}
                  alt="Project 2"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transform hover:scale-110 cursor-pointer ">
              <a href="https://github.com/AliRafiquePinjari" target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={proj3}
                  alt="Project 3"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transform hover:scale-110 cursor-pointer ">
              <a href="https://github.com/AliRafiquePinjari/Pdf-Merger-Website" target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={proj4}
                  alt="Project 4"
                />
              </a>
            </div>
          </div>
        </section>

      </main>
      <section id="contacts">
      <hr class="h-px  bg-gray-200 border-2 "/>
        <footer className="bg-gray-800 text-teal-50 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <ul className="mb-6 space-y-4">
                <li>
                  <a href="mailto:mdalirafique57@gmail.com" className="text-lg hover:underline">
                    mdalirafique57@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919422281435" className="text-lg hover:underline">
                    +91-9422281435
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ali2pinjari" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                    LinkedIn: Ali Pinjari
                  </a>
                </li>
              </ul>
              <hr className='w-40 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 ' />
              <p className="text-sm text-gray-100">
                &copy; {new Date().getFullYear()} Ali Pinjari. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
