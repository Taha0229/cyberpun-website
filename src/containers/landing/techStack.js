import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

const techData = [
    {
        id: 1,
        domain: "Machine Learning & Deep Learning",
        domain_data: [
            {
                id: 1,
                skill_name: "Python",
                img_src: "python",
            },
            {
                id: 2,
                skill_name: "TensorFlow",
                img_src: "tensorflow",
            },
            {
                id: 3,
                skill_name: "PyTorch",
                img_src: "pytorch",
            },
            {
                id: 4,
                skill_name: "OpenCV",
                img_src: "opencv",
            },
            {
                id: 5,
                skill_name: "Sci-Kit Learn",
                img_src: "scikitlearn",
            },
            {
                id: 6,
                skill_name: "Hugging Face",
                img_src: "huggingface",
            },
            {
                id: 7,
                skill_name: "Haystack",
                img_src: "haystack",
            },
            {
                id: 8,
                skill_name: "LangChain",
                img_src: "langchain",
            },
            {
                id: 9,
                skill_name: "Mediapipe",
                img_src: "mediapipe",
            },
            {
                id: 10,
                skill_name: "Numpy",
                img_src: "numpy",
            },
            {
                id: 11,
                skill_name: "Matplotlib",
                img_src: "matplotlib",
            },
        ],
    },
    {
        id: 2,
        domain: "Data Analysis",
        domain_data: [
            {
                id: 1,
                skill_name: "Pandas",
                img_src: "pandas",
            },
            {
                id: 2,
                skill_name: "Seaborn",
                img_src: "seaborn",
            },
            {
                id: 3,
                skill_name: "Plotly",
                img_src: "plotly",
            },
            {
                id: 4,
                skill_name: "Pillow",
                img_src: "pillow",
            },
        ],
    },
    {
        id: 3,
        domain: "Web Development",
        domain_data: [
            {
                id: 1,
                skill_name: "React.Js",
                img_src: "reactjs",
            },
            {
                id: 2,
                skill_name: "Next.Js",
                img_src: "nextjs",
            },
            {
                id: 3,
                skill_name: "Tailwind",
                img_src: "tailwind",
            },
            {
                id: 4,
                skill_name: "Shadcn",
                img_src: "shadcn",
            },
            {
                id: 5,
                skill_name: "EJS",
                img_src: "ejs",
            },
            {
                id: 6,
                skill_name: "Bootstrap",
                img_src: "bootstrap",
            },
            {
                id: 7,
                skill_name: "JQuery",
                img_src: "jquery",
            },
            {
                id: 8,
                skill_name: "Node.Js",
                img_src: "nodejs",
            },
            {
                id: 9,
                skill_name: "Express.Js",
                img_src: "expressjs",
            },
            {
                id: 10,
                skill_name: "Flask",
                img_src: "flask",
            },
            {
                id: 11,
                skill_name: "PHP",
                img_src: "php",
            },
            {
                id: 12,
                skill_name: "Laravel",
                img_src: "laravel",
            },
            {
                id: 13,
                skill_name: "SQLite",
                img_src: "sqlite",
            },
            {
                id: 14,
                skill_name: "MySQL",
                img_src: "mysql",
            },
            {
                id: 15,
                skill_name: "PostgreSQL",
                img_src: "postgresql",
            },
            {
                id: 16,
                skill_name: "MongoDB",
                img_src: "mongodb",
            },
            {
                id: 17,
                skill_name: "Supabase",
                img_src: "supabase",
            },
            {
                id: 18,
                skill_name: "HTML",
                img_src: "html",
            },
            {
                id: 19,
                skill_name: "CSS",
                img_src: "css",
            },
            {
                id: 20,
                skill_name: "Javascript",
                img_src: "javascript",
            },
            {
                id: 21,
                skill_name: "Postman",
                img_src: "postman",
            },
            {
                id: 22,
                skill_name: "Git/Github",
                img_src: "github",
            },
        ],
    },
    {
        id: 4,
        domain: "Web Scrapping and GUI",
        domain_data: [
            {
                id: 1,
                skill_name: "Beautiful Soup",
                img_src: "beautifulsoup",
            },
            {
                id: 2,
                skill_name: "Selenium",
                img_src: "selenium",
            },
            {
                id: 3,
                skill_name: "Turtle",
                img_src: "turtle",
            },
            {
                id: 4,
                skill_name: "Tkinter",
                img_src: "tkinter",
            },
        ],
    },
    {
        id: 5,
        domain: "Computer Science Core",
        domain_data: [
            {
                id: 1,
                skill_name: "DSA with C/C++",
                img_src: "c++",
            },
            {
                id: 2,
                skill_name: "OS",
                img_src: "os",
            },
            {
                id: 3,
                skill_name: "DBMS",
                img_src: "dbms",
            },
            {
                id: 4,
                skill_name: "Computer Networks",
                img_src: "computernetworks",
            },
            {
                id: 5,
                skill_name: "Assembly",
                img_src: "assembly",
            },

        ],
    },
    {
        id: 6,
        domain: "Non-Tech",
        domain_data: [
            {
                id: 1,
                skill_name: "Adobe Photoshop",
                img_src: "photoshop",
            },
            {
                id: 2,
                skill_name: "Adode Illustrator",
                img_src: "illustrator",
            },
            {
                id: 3,
                skill_name: "Canva",
                img_src: "canva",
            },
            {
                id: 4,
                skill_name: "MS Office Suite",
                img_src: "msoffice",
            },
        ],
    },
];

const TechStack = () => {
    return (
        <section className="bg-black text-white flex items-center flex-col py-40">
            <div className="w-full flex flex-col items-center gap-6">
                <IoCloseSharp size={18} />{" "}
                <span className="w-[1px] h-28 bg-white text-white block"></span>
            </div>
            <div className="py-10 text-2xl">
                <p className="text-6xl font-trial font-trial2 text-black">
                    STACKS & SKILLS
                </p>
                <p className="text-6xl font-trial relative z-30">
                    STACKS & SKILLS
                </p>
                <p className="text-6xl font-trial font-trial2 text-black ">
                    STACKS & SKILLS
                </p>
                <p className="my-5">
                    And the complete idiom is: "A jack of all trades is a master
                    of none, but often times better than a master of one."
                </p>
            </div>
            <div className="w-full flex flex-col items-center gap-6">
                <span className="w-[1px] h-28 bg-white text-white block"></span>
                <IoCloseSharp size={18} />{" "}
            </div>
            <div className="grid grid-cols-2 gap-28">
              <div>
              {techData.map((e) => {
                  if(e.id === 1 || e.id === 3){
                    return (
                        <div
                            className="grid-wrapper mt-8 flex flex-col items-start"
                            key={e.id * 100}
                        >
                            <p className="text-2xl py-6 font-semibold">
                                {e.domain}
                            </p>
                            <div className="grid grid-cols-4 gap-4 gap-y-8">
                                {e.domain_data.map((ele) => {
                                    return (
                                        <div
                                            className="flex items-center justify-center flex-col w-36 p-4 trial cursor-pointer gap-4"
                                            key={ele.id}
                                        >
                                            <Image
                                                src={`/logos/${ele.img_src}.png`}
                                                alt={ele.skill_name}
                                                width={80}
                                                height={80}
                                            />
                                            <p className="tracking-widest text-center">
                                                {ele.skill_name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                  }
                })}
              </div>

              <div>
              {techData.map((e) => {
                  if(e.id !== 1 && e.id !== 3){
                    return (
                        <div
                            className="grid-wrapper mt-8 flex flex-col items-start"
                            key={e.id * 100}
                        >
                            <p className="text-2xl py-6 font-semibold">
                                {e.domain}
                            </p>
                            <div className="grid grid-cols-4 gap-4 gap-y-8">
                                {e.domain_data.map((ele) => {
                                    return (
                                        <div
                                            className="flex items-center justify-center flex-col w-36 p-4 trial cursor-pointer gap-4"
                                            key={ele.id}
                                        >
                                            <Image
                                                src={`/logos/${ele.img_src}.png`}
                                                alt={ele.skill_name}
                                                width={80}
                                                height={80}
                                            />
                                            <p className="tracking-widest text-center">
                                                {ele.skill_name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                  }
                })}
              </div>

            </div>
        </section>
    );
};

export default TechStack;
