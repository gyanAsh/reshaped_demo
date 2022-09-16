import Head from 'next/head'
import Image from 'next/image'
import { Button, Container, Frame, Text, Stack } from "reshaped";

const Packs = () => {
  return (
    <div >
      <Head>
        <title>Packs - Quizrr</title>
        <meta name="description" content="Test package of Quizrr Platform" />
        <link rel="icon" href="../Icon/Logo.svg" />
      </Head>

      <Frame align="center" justify="center" height="100vh">
        <Container width="800px">
          <Stack align="center">
            <Text variant="display-1">📦</Text>
            <Text variant="display-2" align="center">Welcome to Pack page</Text>
            <Text variant="featured-2" align="center">
              Reshaped is a professionally crafted design system for everyday
              product development made to match your brand. In this example
              repository we&apos;re using it together with Next.JS
            </Text>
            <Stack.Item gap={6}>
              <Button
                size="large"
                color="primary"
                href="https://reshaped.so"
                attributes={{ target: "_blank" }}
              >
                Check our website
              </Button>
            </Stack.Item>
            {/* <div className={s.customComponent}>
              Custom component with styles
            </div> */}
          </Stack>
        </Container>
      </Frame>
    </div>
  )
}

export default Packs