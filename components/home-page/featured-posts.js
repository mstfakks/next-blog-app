import { Box, Button, Container, Typography } from "@mui/material";
import PostsGrid from "../posts/posts-grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
export default function FeaturedPosts({ posts }) {
  const router = useRouter();
  return (
    <Box component={"section"} pt={"4rem"} sx={{ backgroundColor: "white" }}>
      <Container maxWidth="md">
        <Typography
          fontFamily={"Source Serif Pro"}
          fontWeight={"600"}
          fontSize={"26px"}
          lineHeight={"32px"}
        >
          Latest Posts
        </Typography>
        <Box pt="0.5rem">
          <PostsGrid posts={posts} />
        </Box>
        <Box my={"2.4rem"}>
          <Button
            variant="text"
            sx={{ backgroundColor: "#F5F5F7" }}
            endIcon={<NavigateNextIcon sx={{ color: "#7247CA" }} />}
            onClick={() => {
              router.push("/posts");
            }}
          >
            <Typography
              fontFamily={"Source Serif Pro"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"18px"}
              color={"#7247CA"}
              py="0.3rem"
              textTransform={"capitalize"}
            >
              View All Posts
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
