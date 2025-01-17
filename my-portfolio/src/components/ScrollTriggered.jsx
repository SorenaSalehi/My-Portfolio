import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import Card from "./ScrollTriggeredCard";

const data = [
  {
    src: "/1.webp",
    sticker: "/onFier.webp",
    headline: "The Future of Meme Coins is Here: DuckSwap",
    paragraph: `Through AI agents and the power of DuckChain, DuckSwap abstracts Web3
      complexity, onboarding Telegram's 950M users with a user-friendly trading platform.`,
  },
  {
    src: "/2.webp",
    sticker: "/creation.webp",

    headline: "Instant Token Creation:",
    paragraph: `Launch your meme coin in seconds with our intuitive, no-code interface. Creating a
crypto token is now as easy as setting up a social media profile.`,
  },
  {
    src: "/3.webp",
    sticker: "/friendly.webp",

    headline: "User-Friendly Trading Platform:",
    paragraph: `Buy and sell meme coins with ease directly within Telegram. Experience fast, secure
transactions with a simple and intuitive trading experience, eliminating the complexities of
traditional exchanges.`,
  },
  {
    src: "/4.webp",
    sticker: "/smart.webp",

    headline: "Smart Trading with AI agents:",
    paragraph: `Get instant insights with our AI chat, analyze token data, lunch memecoins and
even automate trades with AI agents. Let our AI do the heavy lifting for you.`,
  },
  {
    src: "/5.webp",
    sticker: "/analytics.webp",

    headline: "Analytics & Bot: Pro-Level Tools Made Easy:",
    paragraph: `Access advanced token analytics, including whale tracking and transaction
monitoring. Utilize our integrated trading bot for powerful tools like automated sniping.`,
  },
  {
    src: "/6.webp",
    sticker: "/powerDuck.webp",

    headline: "Powered by DuckChain:",
    paragraph: `DuckSwap is building towards seamless integration with DuckChain, the first
consumer layer on TON. This will unlock cross-chain capabilities, connecting TON, Ethereum,
Bitcoin, and more, bringing unparalleled interoperability to the Telegram ecosystem.`,
  },
];

export default function ScrollTriggered() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        margin: "2rem auto 0",
        maxWidth: { xs: 500, md: 1200 },
        paddingBottom: 10,
        // width: "100%",
      }}
    >
      {data.map((item, i) => (
        <>
          <Card
            i={i}
            img={item.src}
            sticker={item.sticker}
            headline={item.headline}
            paragraph={item.paragraph}
            key={i}
          />
          {!isMobile && i !== data.length - 1 && (
            <Divider
              variant="middle"
              // sx={{ borderColor: colorLibrary.title1 }}
            />
          )}
        </>
      ))}
    </Box>
  );
}
