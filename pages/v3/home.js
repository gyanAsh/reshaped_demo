import Head from 'next/head'
import { Container, Frame } from "reshaped";
import GreetingTitle from '../../components/Home/GreetingTitle';
import TestPacks from '../../components/Home/TestPacks';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Quizrr</title>
        <meta name="description" content="Homepage of Quizrr Platform" />
        <link rel="icon" href="../Icon/Logo.svg" />
      </Head>

      <Frame padding={[8,3]}>
        <Container padding={0}>
          <GreetingTitle />
          <TestPacks/>
        </Container>
      </Frame>
    </div>
  )
}

export default Home