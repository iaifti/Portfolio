import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPython, FaLinux, FaDocker, FaGit, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus, SiVisualstudiocode, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Tools = () => {
    return (
        <div className="grid grid-cols-10 gap-4 font-nunito justify-center items-center">
            <h1 className="col-span-10 text-center mb-6">Tools</h1>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaReact />
                </div>
                <p className="text-center">React</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaCss3Alt />
                </div>
                <p className="text-center">CSS3</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaHtml5 />
                </div>
                <p className="text-center">HTML5</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaJava />
                </div>
                <p className="text-center">Java</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaJsSquare />
                </div>
                <p className="text-center">JavaScript</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaNodeJs />
                </div>
                <p className="text-center">Node.js</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaPython />
                </div>
                <p className="text-center">Python</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaLinux />
                </div>
                <p className="text-center">Linux</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaDocker />
                </div>
                <p className="text-center">Docker</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaGit />
                </div>
                <p className="text-center">Git</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <FaGithub />
                </div>
                <p className="text-center">GitHub</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <SiC />
                </div>
                <p className="text-center">C</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <SiCplusplus />
                </div>
                <p className="text-center">C++</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <SiVisualstudiocode />
                </div>
                <p className="text-center">VS Code</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <SiTailwindcss />
                </div>
                <p className="text-center">Tailwind CSS</p>
            </div>

            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <div className="text-6xl mb-2">
                    <SiMongodb />
                </div>
                <p className="text-center">MongoDB</p>
            </div>

        </div>
    );
};

export default Tools;
