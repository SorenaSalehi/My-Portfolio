import { Box } from "@mui/material";
import Card from "./ScrollTriggeredCard";

const data = [
  {
    src: "/5.webp",

    headline: "Fifth: DuckPump Telegram min app",
    paragraph: [
      { sec: "This Telegram mini-app aims to simplify the Web3 for everyone." },
      { sec: " Key features include:Telegram authentication" },

      { sec: "Okxtonconnect wallet connection,AI agents for assistance," },

      { sec: "Token swaps,Two trading modes: professional and beginner" },

      { sec: "A simple platform for anyone to easily launch meme coins." },

      { sec: "The goal is to make the Web3 more accessible" },
      { sec: "and enable users to create and trade tokens effortlessly." },
      { sec: "Despite challenges like a tight 15-day deadline" },
      { sec: "generating fake data, splitting complex pages" },
      { sec: "and performance optimization" },
      { sec: "our team is working hard to deliver results." },

      { sec: "The project is still in progress" },
      { sec: "with our team currently developing the blockchain" },
      { sec: "backend, and smart contracts." },
      { sec: "(on the Jan 18, 2025)" },
    ],

    attention: "This is Telegram mini app and is not responsive",
    tech: "React.js, React Router, Vite, Material UI, Context API, OKXTonConnect, Motion React, and more!",
    on: "Jan 2, 2025",
    link: "https://t.me/duckpumpbot",
  },
  {
    src: "/4.webp",
    headline: "Fourth: Ton Portal Telegram mini app ",
    paragraph: [
      { sec: "This was my first real and team project." },

      { sec: "Users can connect their digital wallet" },
      { sec: "and view news summaries with a single click." },

      {
        sec: "Add a bot to group chats to get summarized discussions about cryptocurrencies.",
      },

      { sec: " A 'Swap' page will be added soon." },

      {
        sec: "note: since we only had 7 days, I couldn't focus much on styling.",
      },
    ],
    attention: "This is Telegram mini app and is not responsive",
    tech: "React.js, React Router , React Query, Redux, Tailwind CSS, motion Ui,React Toastify, Lazy Loading, reusable components, custom hooks, modern file structure, UI design, AI integration.",
    on: "Nov 14, 2024",
    link: "https://t.me/tonportalprobot",
  },

  {
    src: "/3.webp",

    headline: "Third: React Quiz",
    paragraph: [
      { sec: "This platform is designed to enhance learning through" },
      { sec: "a fun and interactive quiz experience." },
      { sec: "Users simply enter their name" },
      { sec: "and their scores are tracked in local storage" },
      { sec: "with points varying based on question difficulty levels." },
      { sec: "The site is fully responsive" },
      {
        sec: " and I designed it from scratch without a predefined prototype.",
      },
    ],

    tech: "Redux, React.js (React-Router-Dom, lazy loading, reusable components, and custom hooks), Tailwind CSS ,responsive design",
    on: "Oct 26, 2024",
    link: "https://react-quiz-advance.netlify.app/",
  },
  {
    src: "/2.webp",
    headline: "Seconde: ToDo Webapp",
    paragraph: [
      { sec: "this one incorporates several new techniques I've learned" },
      { sec: "such as Vite, React-Router-Dom, useReducer, and useContext." },
      { sec: "I also worked on improving responsiveness" },
      { sec: "lazy loading, reusable components, and custom hooks." },
      { sec: "One key feature is the ability to" },
      { sec: "save tasks locally using local storage." },
    ],
    tech: "React.js (useContext, useReducer, React-Router-Dom, lazy loading, reusable components, and custom hooks), Css ,responsive design",
    on: "Oct 9, 2024",
    link: "https://to-do-by-sorena.netlify.app/",
  },
  {
    src: "/1.webp",
    headline: "first: Whether Webapp",
    paragraph: [
      { sec: "This Was the first project and its was implemented for" },
      { sec: "the practice of (useState and useEffect)." },
    ],
    tech: "React.js (useState and useEffect) , Rest-api , Css ,responsive design",
    on: "Sep 15, 2024",
    link: "https://weather-react-intermediate.netlify.app/",
  },
];

export default function ScrollTriggered() {
  return (
    <Box
      sx={{
        margin: "0 auto ",
        maxWidth: { xs: 500, md: 1200 },
        paddingBottom: 10,
      }}
    >
      {data.map((item, i) => (
        <Box key={i} component={"div"} className="card-container">
          <Card
            i={i}
            img={item.src}
            headline={item.headline}
            paragraph={item.paragraph}
            tech={item.tech}
            on={item.on}
            link={item.link}
            attention={item.attention}
          />
        </Box>
      ))}
    </Box>
  );
}
