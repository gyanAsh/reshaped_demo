import { useRouter } from 'next/router';
import Link from 'next/link'
import { ActionBar, Button, Image, Frame, Stack } from "reshaped"
import style from '../../styles/Navigation.module.css'
const Navigation = () => {
    const router = useRouter();
    return (
        <Frame
            className={style.navbar}
            padding={[6,0]}
            height="100vh"
            // backgroundColor="positive-faded"
            borderColor="positive-faded"
            align="center"
        >
            <Link href="/v3/home">
                <Image src="/Icon/Logo.svg" alt="Vercel Logo" width="50px" />
            </Link>
            
            <ActionBar className={style.navLinkContainer}>
                <Stack>
                    <Stack.Item>
                        <Link href="/v3/home">
                            <Button  color={router.asPath.match("/v3/home") ? "primary" : "neutral"} fullWidth>
                                Home
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/packs">
                            <Button color={router.asPath.match("/v3/packs") ? "primary" : "neutral"} fullWidth>
                                Packs
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/tests">
                            <Button color={router.asPath.match("/v3/tests") ? "primary" : "neutral"} fullWidth>
                                Tests
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/analytics">
                            <Button color={router.asPath.match("/v3/analytics") ? "primary" : "neutral"} fullWidth>
                                Analytics
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/notebooks">
                            <Button color={router.asPath.match("/v3/notebooks") ? "primary" : "neutral"} fullWidth>
                                Notebooks
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/profile">
                            <Button color={router.asPath.match("/v3/profile") ? "primary" : "neutral"} fullWidth>
                                Profile
                            </Button>
                        </Link>
                    </Stack.Item>
                </Stack>
            </ActionBar>
        </Frame>
        
      
  )
}

export default Navigation