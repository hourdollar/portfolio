import Image from "next/image";

export default function Experience() {
  return (
    <>
      <div>
        <h1 className="p-4 text-center text-4xl">Experience</h1>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/2/2c/Rocket_Mortgage_2025.svg`}
          alt="clip art"
          width={500}
          height={500}
        ></Image>
        <div className="m-3">
          <h1 className="text-3xl p-4">Software Engineer 1</h1>
          <ul className="p-4 list-disc w-2/5">
            <li>
              Developed and supported web applications and micro-services with
              Angular and ASP.NET Core, enhancing user interactions and system
              throughput by 25% using JavaScript, TypeScript, HTML, CSS, C#, and
              SQL.
            </li>
            <li>
              Collaborated on a 6-team release train to streamline the mortgage
              process, implementing automated testing that reduced production
              issues by 20%.
            </li>
            <li>
              Monitored AWS metrics during weekly on-call rotations, rapidly
              resolving production issues to support a 99.9% system uptime.
            </li>
            <li>
              Deployed applications and minimized need for individual
              infrastructure using Amazon Web Services such as CodeDeploy,
              DynamoDB, S3Buckets, and AWS Lambda.
            </li>
            <li>
              Developed Infrastructure as Code (IaC) scripts to maintain
              environment standards and used them to rebuild components with the
              same capabilities across the stack.
            </li>
            <li>
              Worked in Agile Scrum Teams and participated in Planning,
              Retrospect & Adapt, and Daily Scrum Meetings. These meetings
              allowed us to divide work easily, get better for future sprints,
              and detail impediments of progress.
            </li>
            <li>
              Led API integration enhancements that improved data exchange speed
              by 20%.
            </li>
          </ul>
        </div>

        <div className="m-3">
          <h1 className="text-3xl p-4">Associate Software Engineer</h1>
          <ul className="p-4 list-disc w-2/5">
            <li>
              Collaborated via paired programming to master codebases and adopt
              best practices, contributing to enhanced software reliability.
            </li>
            <li>
              Built frontend components using Figma Design and specific styling
              standards implemented by Rocket Mortgage.
            </li>
            <li>
              Utilized Git for source control, streamlining code reviews and
              reducing merge conflicts by 15%.
            </li>
            <li>
              Migrated web applications and databases to AWS Cloud, achieving
              seamless deployments and a 20% boost in system efficiency.
            </li>
            <li>
              Enhanced UI/UX by refining front-end code, leading to a 15%
              increase in user engagement.
            </li>
          </ul>
        </div>

        {/* <div className="flex justify-left">
          <p className="w-1/2 p-4">
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
        </div> */}
      </div>
    </>
  );
}
