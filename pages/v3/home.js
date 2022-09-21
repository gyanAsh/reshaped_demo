import Head from 'next/head'
import GreetingTitle from '../../components/Home/GreetingTitle';
import TestPacks from '../../components/Home/TestPacks';
import PagePadding from '../../components/Wrapper/PagePadding';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Quizrr</title>
        <meta name="description" content="Homepage of Quizrr Platform" />
        <link rel="icon" href="../Icon/Logo.svg" />
      </Head>

      <PagePadding>
        <GreetingTitle />
        <TestPacks/>
      </PagePadding>
    </div>
  )
}

export default Home