import { Box, Divider, useMediaQuery } from "@mui/material";
import Card from "./ScrollTriggeredCard";
import { useTheme } from "@emotion/react";
import { useCustomTheme } from "../context/CustomThemeProvider";
import React from "react";

const data = [
    {
        src: "/6.webp",

        headline: "6 : 888 Computer airdrop ",
        paragraph: [
            {
                sec: "(vira vision Co.)",
            },
            {
                sec: "This project is built on the idea of disconnecting from technology.",
            },
            { sec: " Users can start mining with a single tap," },

            {
                sec: "but if they touch their device, mining stops! 🎯",
            },

            { sec: "I was fully responsible for the frontend development." },
            { sec: "Key challenges I tackled:" },

            {
                sec: "Pausing mining for 5 seconds and resuming if the user continues, or resetting if they don’t",
            },

            { sec: "Sending requests to the server every 6 minutes" },
            {
                sec: "Alerting users when they touch the screen, keyboard, or mouse",
            },
            { sec: "Upcoming Features:" },
            { sec: "Upgrading the mining system" },
            { sec: "Extending mining time (currently max 6 hours/day)" },
            { sec: "Adding an auto-mining bot" },
        ],
        tech: "React.js, Vite, MUI, React Query, Motion, Ton Connect Wallet, React Hot Toast, Swapper.js",
        link: "https://t.me/Computer888_Bot",
    },
    {
        src: "/5.webp",

        headline: "5 : DuckPump Telegram mini app",
        paragraph: [
            {
                sec: "This Telegram mini-app aims to simplify the Web3 for everyone.",
            },
            { sec: " Key features include:Telegram authentication" },

            {
                sec: "Okxtonconnect wallet connection,AI agents for assistance,",
            },

            { sec: "Token swaps,Two trading modes: professional and beginner" },

            {
                sec: "A simple platform for anyone to easily launch meme coins.",
            },

            { sec: "The goal is to make the Web3 more accessible" },
            {
                sec: "and enable users to create and trade tokens effortlessly.",
            },
            { sec: "Despite challenges like a tight 15-day deadline" },
            { sec: "generating fake data, splitting complex pages" },
            { sec: "and performance optimization" },
            { sec: "our team is working hard to deliver results." },

            { sec: "The project is still in progress" },
            { sec: "with our team currently developing the blockchain" },
            { sec: "backend, and smart contracts." },
            { sec: "(on the Jan 18, 2025)" },
        ],
        tech: "React.js, React Router, Vite, Material UI, Context API, OKXTonConnect, Motion React, and more!",
        on: "Jan 2, 2025",
        link: "https://duck-pump-tel-mini-app.netlify.app/",
    },
    {
        src: "/4.webp",
        headline: "4 : Ton Portal Telegram mini app ",
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
        tech: "React.js, React Router , React Query, Redux, Tailwind CSS, motion Ui,React Toastify, Lazy Loading, reusable components, custom hooks, modern file structure, UI design, AI integration.",
        on: "Nov 14, 2024",
        link: "https://portal-mini-app.netlify.app/",
    },

    {
        src: "/3.webp",

        headline: "3 : React Quiz",
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
        headline: "2 : ToDo Webapp",
        paragraph: [
            {
                sec: "this one incorporates several new techniques I've learned",
            },
            {
                sec: "such as Vite, React-Router-Dom, useReducer, and useContext.",
            },
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
        headline: "1 : Weather Webapp",
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
    const { mode } = useCustomTheme();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box
            sx={{
                margin: "0 auto ",
                maxWidth: { xs: 500, md: 1600 },
                paddingBottom: 10,
            }}
            component={"div"}
            className={mode ? "bg-header-dark" : "bg-header-light"}
        >
            {data.map((item, i) => (
                <React.Fragment key={i}>
                    <Box>
                        <Card
                            i={i}
                            img={item.src}
                            headline={item.headline}
                            paragraph={item.paragraph}
                            tech={item.tech}
                            on={item.on}
                            link={item.link}
                        />
                    </Box>
                    {i < data.length - 1 && !isMobile && (
                        <Divider
                            variant="middle"
                            sx={{ borderColor: "primary.main" }}
                        />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
}
