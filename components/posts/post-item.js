import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function PostItem({ title, image, excerpt, date, slug }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <Box display={"flex"} mt={"1.5rem"}>
      <Box width={"180px"} height={"180px"} overflow={"hidden"}>
        <Image
          style={{
            objectFit: "cover",
          }}
          src={imagePath}
          alt={title}
          width={180}
          height={180}
          layout="responsive"
        />
      </Box>
      <Box pl={2}>
        <Typography
          fontFamily={"Source Serif Pro"}
          fontWeight={"600"}
          fontSize={"21px"}
          variant="h3"
          lineHeight={"25px"}
        >
          {title}
        </Typography>

        <Typography
          fontFamily={"Source Serif Pro"}
          fontWeight={"500"}
          fontSize={"15px"}
          variant="h3"
          lineHeight={"25px"}
        >
          {excerpt}
        </Typography>

        <Typography
          fontFamily={"Source Serif Pro"}
          fontSize={"14px"}
          lineHeight={"18px"}
          fontWeight={"400"}
          textTransform={"capitalize"}
          pt={"1rem"}
        >
          {formattedDate}
        </Typography>

        <Box pt={"1.2rem"}>
          <Button variant="text" sx={{ p: 0 }}>
            <Link href={linkPath}>
              <Typography
                fontFamily={"Source Serif Pro"}
                fontWeight={"600"}
                fontSize={"14px"}
                lineHeight={"25px"}
                color={"#7247CA"}
                textTransform={"capitalize"}
              >
                Read More
              </Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
