import Image from "next/image";

const logoHeight: number = 500;
const logoWidth: number = 500;

export default function About() {
  return (
    <>
      <div>
        <h1 className="p-4 text-center text-4xl">About Me</h1>
        <div className="flex justify-center">
          <p className="border-2 border-white w-1/2 p-4">
            David Hill-Gray is a Full Stack Software Engineer with a strong
            background in the finance tech sector. He specializes in building
            secure, scalable applications that support modern financial
            services. Proficient in TypeScript, JavaScript, HTML, CSS, SQL, and
            C#, David brings full-stack expertise to every stage of
            development—from intuitive front-end interfaces to robust backend
            systems. He combines technical precision with a deep understanding
            of industry standards, delivering user-focused solutions that
            balance innovation with regulatory compliance. Passionate about
            clean code, system architecture, and performance optimization, David
            thrives in fast-paced, collaborative environments. Outside of work
            he spends time raising his two children, David and Amir, and song
            writing for local and mainstream artists,
          </p>
        </div>
      </div>
    </>
  );
}
