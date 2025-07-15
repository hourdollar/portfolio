import Image from "next/image";

const logoWidth: number = 250;
const logoHeight: number = 250;

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-full py-6 px-6"
          src={`https://media.licdn.com/dms/image/v2/C5103AQHLsmNJsEnhDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517432521685?e=1758153600&v=beta&t=e4Y1kge4kb8wrZ79EJne8mIAJrtuFPpXKNaCFxVV-5M`}
          alt="clip art"
          width={500}
          height={500}
        ></Image>
        <div className="py-6 px-6">
          <h1 className="font-mono font-extrabold text-6xl text-center">
            FULL STACK SOFTWARE ENGINEER
          </h1>
        </div>
        <div className="py-2 px-2 my-4">
          <h2 className="font-mono font-bold text-4xl text-center">
            DAVID HILL-GRAY SR.
          </h2>
        </div>
        <div className="flex flex-col m-4 p-4 border-4 border-white">
          <h2 className="font-mono font-bold text-4xl text-center">7+</h2>
          <p>Years Experience</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <h2 className="font-mono font-bold text-2xl">FRAMEWORKS</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
      </div>
      <div className="flex items-center justify-center p-8">
        <h2 className="font-mono font-bold text-2xl">CODING LANGUAGES</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
      </div>
      <div className="flex items-center justify-center p-8">
        <h2 className="font-mono font-bold text-2xl">CLOUD PLATFORMS</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
        <Image
          className="py-6 px-6"
          src={`https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg`}
          alt="clip art"
          width={logoWidth}
          height={logoHeight}
        ></Image>
      </div>
    </>
  );
}
