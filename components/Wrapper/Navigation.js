import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { ActionBar, Button, Image, Frame, Stack,Tooltip  } from "reshaped"
import style from '../../styles/Navigation.module.css'

const Navigation = () => {
    const [path, setPath] = useState([]);
    const router = useRouter();
    const regex = /^(\/v3\/\b(home|packs|tests|analytics|notebooks|profile)\b)/;
    let pathInfo = router.asPath.match(regex);
    useEffect(() => {
      if (pathInfo)
        setPath(pathInfo[0]);
    else
        setPath(null);
    }, [pathInfo])
    
    return (
        <Frame
            className={style.navbar}
            padding={[6,0]}
            height="100vh"
            // backgroundColor="positive-faded"
            borderColor="neutral-faded"
            align="center"
        >
            <Tooltip text="Home" position='end'>
                { (msg)=> (
                    <Link href="/v3/home">
                        <Button variant="ghost" attributes={msg}>
                            <Image src="/Icon/Logo.svg" alt="Vercel Logo" width="50px" />
                        </Button>
                    </Link>
                )}
            </Tooltip>
            <ActionBar className={style.navLinkContainer}>
                <Stack>
                    <Tooltip text="Home" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/home">
                                <Button  color={path === "/v3/home" ? "primary" : "disabled" } variant={path === "/v3/home"?  "" :"outline" } fullWidth>
                                    Home
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                    <Tooltip text="Packs" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/packs">
                                <Button color={path === "/v3/packs"? "primary" : "disabled"}  variant={path === "/v3/packs"?  "" :"outline" } fullWidth>
                                    Packs
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                    <Tooltip text="Tests" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/tests">
                                <Button color={path==="/v3/tests" ? "primary" : "disabled"}  variant={path==="/v3/tests" ?  "" :"outline" } fullWidth>
                                    Tests
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                    <Tooltip text="Analytics" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/analytics">
                                <Button color={path==="/v3/analytics" ? "primary" : "disabled"}  variant={path==="/v3/analytics" ?  "" :"outline" } fullWidth>
                                    Analytics
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                    <Tooltip text="Notebooks" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/notebooks">
                                <Button color={path=== "/v3/notebooks" ? "primary" : "neutral"}  variant={path=== "/v3/notebooks" ?  "" :"outline" } fullWidth>
                                    Notebooks
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                    <Tooltip text="Profile" position='end'>
                        { (msg)=> (
                        <Stack.Item attributes={msg}>
                            <Link href="/v3/profile">
                                <Button color={path=== "/v3/profile" ? "primary" : "neutral"}  variant={path=== "/v3/profile" ?  "" :"outline" } fullWidth>
                                    Profile
                                </Button>
                            </Link>
                        </Stack.Item>
                        )}
                    </Tooltip>
                </Stack>
            </ActionBar>
        </Frame>
        
      
  )
}

export default Navigation