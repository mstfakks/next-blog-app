import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

export default function PostHeader({ title, image }) {
  return (
    <Box
      component={"header"}
      textAlign={"center"}
      sx={{ backgroundColor: "white" }}
      mt={"6rem"}
    >
      <Container maxWidth="md">
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          style={{
            objectFit: "cover",
            width: "200px",
            height: "120px",
          }}
        />
        <Box mt={"2.4rem"}>
          <Typography
            fontFamily={"Source Serif Pro"}
            fontWeight={"600"}
            fontSize={"26px"}
            lineHeight={"32px"}
          >
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
