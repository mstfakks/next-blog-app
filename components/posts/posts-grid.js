import { Grid } from "@mui/material";
import PostItem from "./post-item";

export default function PostsGrid({ posts }) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      {posts.map((post) => (
        <Grid key={post.slug} item xs={12}>
          <PostItem {...post} />
        </Grid>
      ))}
    </Grid>
  );
}
