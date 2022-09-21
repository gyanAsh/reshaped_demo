import Head from 'next/head'
import PacksPageTitle from '../../components/Packs/PacksPageTitle';
import TestPacksCards from '../../components/Packs/TestPacksCards';
import PagePadding from '../../components/Wrapper/PagePadding';

const Packs = () => {
  return (
    <div >
      <Head>
        <title>Packs - Quizrr</title>
        <meta name="description" content="View package offered by Quizrr Platform" />
        <link rel="icon" href="../Icon/Logo.svg" />
      </Head>

      <PagePadding>
        <PacksPageTitle />
        <TestPacksCards/>
      </PagePadding>
    </div>
  )
}

export default Packs