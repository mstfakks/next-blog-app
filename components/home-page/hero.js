import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component={"section"}
      textAlign={"center"}
      sx={{ backgroundColor: "white" }}
      mt={"96px"}
    >
      <Container maxWidth="sm">
        <Box
          component={"div"}
          width={"300px"}
          height={"300px"}
          borderRadius={"50%"}
          overflow={"hidden"}
          margin={"auto"}
        >
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "top",
              width: "100%",
              height: "100%",
            }}
            src="/images/nick.png"
            alt="An image showing Nick"
            width={300}
            height={300}
            priority={true}
          />
        </Box>
        <Typography
          variant="h1"
          fontSize={"4rem"}
          margin={"1rem 0"}
          fontFamily={"Source Serif Pro"}
          fontWeight={"600"}
        >
          Hi I'm Nick
        </Typography>
        <Typography
          variant="body1"
          maxWidth={"40rem"}
          width={"90%"}
          margin={"auto"}
          fontSize={"1.5rem"}
          fontFamily={"Source Serif Pro"}
        >
          I blog about web development - especially frontend frameworks like
          React, Next, Angular, Vue, etc.
        </Typography>
      </Container>
    </Box>
  );
}
