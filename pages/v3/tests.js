import Head from 'next/head'
import PackDetails from '../../components/Tests/PackDetails';
import PagePadding from '../../components/Wrapper/PagePadding';

const Tests = () => {
  return (
    <div >
      <Head>
        <title>Test - Quizrr</title>
        <meta name="description" content="Tests offered by Quizrr Platform" />
        <link rel="icon" href="../Icon/Logo.svg" />
      </Head>

      <PagePadding>
        <PackDetails/>
      </PagePadding>
    </div>
  )
}

export default Tests