import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function SinglePostDetail({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { slug } = context?.params;
  const singlePostData = getPostData(slug);
  return {
    props: {
      post: singlePostData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(context) {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
