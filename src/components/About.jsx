import React from "react";

const About = () => {

  return (

  <section id="about" className="py-20 font-nunito bg-gradient-to-b from-white via-yellow-300/35 to-offwhite">
    <h2 className="text-center md:text-4xl lg:6xl font-bold mb-10 uppercase hover:text-orange">About Me</h2>
    <p className="max-w-4xl px-10 font-signika font-light md:mx-auto text-md md:text-xl lg:text-2xl lg:leading-relaxed leading-10 text-gray-700">
      I am a passionate and driven <span className="bg-orange bg-opacity-40 rounded-md px-1">Software engineer</span>, web developer, and digital marketing specialist 
      with a strong foundation in Computer Science. My expertise spans across multiple domains, 
      including web development, data-driven solutions, and creating dynamic, user-friendly applications. 
      Currently pursuing a Computer Science major, I continuously challenge myself to enhance my skills 
      and take on new projects.
      <br />
      <br />
      In my free time, I enjoy learning new frameworks, exploring full-stack projects, and contributing 
      to open-source communities. With a strong desire to continuously improve and educate others, I'm 
      always looking for opportunities to apply my skills in meaningful and challenging ways.
    </p>
  </section>
)
};

export default About;
