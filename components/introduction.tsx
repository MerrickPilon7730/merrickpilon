
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from "./ui/button"

const buttonClass = "text-foreground hover:text-blue-600 hover:-translate-y-1 transition-colors hover:scale-110";
//TODO: Update Introduction

export function Introduction() {
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-4xl font-bold mx-auto">MERRICK PILON</h1>
            <h2 className="mx-auto mt-2 font-bold">JUNIOR WEB DEVELOPER</h2>
            <div className="flex mx-auto gap-x-5 mt-2">
                <a
                    href="https://www.linkedin.com/in/merrick-pilon/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className={buttonClass}
                >
                    <FaLinkedin size={30}/>
                </a>
                <a
                    href="https://github.com/MerrickPilon7730"
                    target="_blank"
                    aria-label="LinkedIn"
                    className={buttonClass}
                >
                    <FaGithub size={30}/>
                </a>
            </div> 
            <p className="font-mono mx-auto mt-2 indent-8 w-[80%]">
                Enthusiastic full-stack developer with experience building scalable, cloud-ready web applications. Proficient in both frontend and backend 
                technologies with strong SQL skills in PostgreSQL/MySQL. Demonstrated ability to architect REST APIs, automate workflows, and deploy apps 
                using AWS and CI/CD pipelines. Passionate about writing clean, testable code and collaborating in Agile teams.
            </p>
            <Button 
                className="mt-4 hover:bg-blue-600 bg-blue-400 hover:scale-110 cursor-pointer rounded-3xl transition-colors flex mx-auto px-8"
                size="lg"
                >
                    <a href="/Pilon_FS_Resume.pdf" download>Resume</a>
            </Button>
            
        </div>
    )
}