export type TInfoPortfolio = {
  title: string,
  live: string,
  source: string,
  image: string,
  status?: boolean
}

export const NAVLINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
]

export const colors = ["#B90043", "#E100FF"]

const GITHUB_URL = "https://github.com/roxshivamsingh";
export const info = {
  firstName: "Shivam",
  lastName: "Singh",
  initials: "JS",
  position: "a Software Engineer",
  username: "roxshivamsingh",
  // position: "Surviving on Coffee & Eminem",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "tea",
      text: "Fueled by Tea",
    },
    {
      emoji: "location",
      text: "Based in the India",
    },
    {
      emoji: "job",
      text: "Senior Full-Stack Developer at IGSS",
      link: 'https://www.igurusolutions.com'
    },
    {
      emoji: "email",
      text: "roxshivamsingh@gmail.com",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/in/roxshivamsingh",
    github: GITHUB_URL
  },


  bio:
    `
    As a Senior Full Stack Developer at iGuru Software Solutions Pvt. Ltd., I create robust and innovative web applications using a wide array of technologies. I have a Bachelor of Technology degree in Computer Science Engineering from BSACET, Mathura.
    At my previous role at Sulovi Technologies Private Limited, I spearheaded the development and maintenance of applications using React and Firebase, introducing features such as virtualization, WhatsApp cloud API integration, and no-internet functionality. I also implemented a Google Cloud function as a microservice for backend tasks using Python, and migrated the Redux legacy pipeline to Redux Toolkit. I collaborated with other developers, tested the code quality, and documented the features and functionalities. I am always eager to learn new skills, enhance my existing ones, and deliver efficient solutions.
  `  ,
  skills: {
    proficientWith: [
      "Node.js",
      "React.js",
      "Redux-Toolkit",
      "Next.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Firebase",
      "Express.js",
      "TypeScript",
      "Chrome Extension Development",
      "HTML",
      "CSS",
      "Linux",
      "Docker",
      "Postman",
      "Github"
    ],
    exposedTo: [
      "Django",
      "Canva",
      "Adonis.js"
    ],
  },

  hobbies: [
    {
      label: "Playing Guitar",
      emoji: "🎸",
    },
    {
      label: "Coding",
      emoji: "🖥️",
    },
  ],
};




