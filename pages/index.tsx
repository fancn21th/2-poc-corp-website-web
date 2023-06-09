import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";

export default function Home({ users }) {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />

        <pre>{JSON.stringify(users, null, 2)}</pre>
      </Main>
    </Container>
  );
}

async function getUsers() {
  const res = await fetch(`http://localhost:1337/api/users`);
  const data = await res.json();
  return data;
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const users = await getUsers();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}
