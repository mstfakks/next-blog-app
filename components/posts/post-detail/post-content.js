import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Container } from "@mui/material";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <Box
            component={"div"}
            m={"1rem auto"}
            width={"100%"}
            maxWidth={"600px"}
          >
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </Box>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <Box component={"article"}>
      <Container maxWidth="md">
        <PostHeader title={post.title} image={imagePath} />
        <Box
          mt={"6rem"}
          fontFamily={"Source Serif Pro"}
          fontSize={"16px"}
          lineHeight={"25px"}
        >
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </Box>
      </Container>
    </Box>
    // <article className={classes.content}>
    // </article>
  );
}
