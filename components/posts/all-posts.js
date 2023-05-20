import { Box, Container, Typography } from "@mui/material";
import PostsGrid from "./posts-grid";

export default function AllPosts({ posts }) {
  return (
    <Box component={"section"} sx={{ backgroundColor: "white" }} mt={"6rem"}>
      <Container maxWidth="md">
        <Typography
          fontFamily={"Source Serif Pro"}
          fontWeight={"600"}
          fontSize={"26px"}
          lineHeight={"35px"}
        >
          All Posts
        </Typography>
        <Box pt={"1.06rem"}>
          <PostsGrid posts={posts} />
        </Box>
      </Container>
    </Box>
  );
}
