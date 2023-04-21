import vrbtm from '../assets/vrbtm.png'
import planner from '../assets/the_planner.png'
import weatherApp from '../assets/WeatherApp.png'

export const projectsData = [
  {
    status: 'Featured Project',
    title: 'VRBTM',
    description:
      'Introducing a web app to improve memory retention. Easily memorize text by omitting words manually or randomly. Create personal notebooks and modify them. Save flashcards based on your notes and more.',
    img: vrbtm,
    usedTechs: 'Next.js, Tailwind & MongoDB',
    links: {
      github: 'https://github.com/YousefJalali/vrbtm',
      appLink: 'https://vrbtm.vercel.app',
    },
  },
  {
    status: 'Featured Project',
    title: 'The Planner',
    description:
      "This app lets you create tasks, assign them to projects, set due dates, prioritize your work, and organize them into categories. You'll receive notifications and reminders, and can mark tasks as completed. It's accessible on multiple devices for managing your tasks and projects from anywhere.",
    img: planner,
    usedTechs: 'Nx, Next.js, Styled-Components & MongoDB',
    links: {
      github: 'https://github.com/YousefJalali/the-planner',
      appLink: 'https://the-planner-monorepo.vercel.app/',
    },
  },
  {
    status: 'Featured Project',
    title: 'Weather App',
    description:
      'A simple weather app built using Next.js experimental app folder feature would allow users to enter a location and retrieve current weather data. It displays temperature, weather condition, and offer additional features such as saving favorite locations and viewing forecasts. The design is simple and user-friendly.',
    img: weatherApp,
    usedTechs: 'Next.js & Tailwind',
    links: {
      github: 'https://github.com/YousefJalali/weather-app',
      appLink: 'https://weather-app-beta-eight-11.vercel.app/',
    },
  },
]
