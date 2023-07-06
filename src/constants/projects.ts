export const projectsData = [
  {
    status: 'Featured Project',
    title: 'Binder',
    description:
      "This app lets you create tasks, assign them to projects, set due dates, prioritize your work, and organize them into categories. You'll receive notifications and reminders, and can mark tasks as completed. It's accessible on multiple devices for managing your tasks and projects from anywhere.",
    img: '/binder.png',
    usedTechs: 'Nx, Next.js, Styled-Components & MongoDB',
    links: {
      github: 'https://github.com/YousefJalali/the-planner',
      appLink: 'https://the-planner-monorepo.vercel.app/',
    },
  },
  {
    status: 'Featured Project',
    title: 'VRBTM',
    description:
      'Introducing a web app to improve memory retention. Easily memorize text by omitting words manually or randomly. Create personal notebooks and modify them. Save flashcards based on your notes and more.',
    img: '/VRBTM.png',
    usedTechs: 'Next.js, Tailwind & MongoDB',
    links: {
      github: 'https://github.com/YousefJalali/vrbtm',
      appLink: 'https://vrbtm.vercel.app',
    },
  },
  {
    status: 'Featured Project',
    title: 'WeatherNow',
    description:
      'A simple weather app built using Next.js experimental app folder feature would allow users to enter a location and retrieve current weather data. It displays temperature, weather condition, and offer additional features such as saving favorite locations and viewing forecasts. The design is simple and user-friendly.',
    img: '/WeatherApp.png',
    usedTechs: 'Next.js & Tailwind',
    links: {
      github: 'https://github.com/YousefJalali/weather-app',
      appLink: 'https://weather-app-beta-eight-11.vercel.app/',
    },
  },
  {
    status: 'Featured Project',
    title: 'Minesweeper',
    description:
      'Minesweeper app, built using React Native, is a mobile game where players must clear a grid of hidden mines without detonating any of them. With different difficulty levels, and a timer, players can challenge themselves to solve the puzzle as quickly and efficiently as possible. With its cross-platform capabilities, users can enjoy the game on both iOS and Android devices.',
    img: '/Minesweeper.png',
    usedTechs: 'Expo, Redux & Styled-Components',
    links: {
      github: 'https://github.com/YousefJalali/minesweeper',
      appLink:
        'https://expo.dev/@jbygoal/minesweeper-app?serviceType=classic&distribution=expo-go',
    },
  },
  {
    status: 'Featured Project',
    title: 'Skull Wallpapers',
    description:
      'A React Native wallpaper app that allows users to save wallpapers and add them to favorites. Users can download and save high quality wallpapers to their devices or add them to the favorites list for easy access later. ',
    img: '/SkullWallpapers.png',
    usedTechs: 'Expo, Redux, Firebase & Styled-Components',
    links: {
      github: 'https://github.com/YousefJalali/RN-wallpapers',
      appLink:
        'https://expo.dev/@jbygoal/skull-wallpaper?serviceType=classic&distribution=expo-go',
    },
  },
]

export type ProjectType = (typeof projectsData)[0]
