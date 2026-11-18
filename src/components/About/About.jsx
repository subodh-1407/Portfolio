import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="intro-texture pb-4 pt-40 md:pt-48 lg:pt-56 px-[7vw] lg:px-portfolio font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-6 lg:gap-10">
        {/* Left Side */}
        <div className="intro-copy w-full min-w-0 md:flex-1 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="intro-greeting text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f5ff] mb-2 leading-tight">
            <span className="intro-glow-anchor">Hi</span>, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f0f5ff] mb-4 leading-tight">
            Subodh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#7dd3fc] leading-tight">
            <span className="text-[#f0f5ff]">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Web Developer',
                'Coder',
                'Software Engineer',
                'App Developer',
                'Tech Enthusiast',

                
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#7dd3fc]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#a9b9d0] mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1b4-E-hV_xky3x_3aAMKRXD_INS5kUEAh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#0b1220] py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 ease-out transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(90deg, #7dd3fc, #b2e7ff)',
              boxShadow: '0 8px 24px rgb(125 211 252 / 18%)',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="w-full min-w-0 md:flex-1 flex justify-center md:justify-end">
          <figure className="portrait w-44 sm:w-60 md:w-[25rem] max-w-full">
            <img src={profileImage} alt="Subodh Gangwar" fetchPriority="high" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
