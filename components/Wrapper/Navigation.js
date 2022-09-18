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

    const fakeApi = [
        {
            id:1,
            name: "Home",
            href:"/v3/home"
        },
        {
            id:2,
            name: "Packs",
            href:"/v3/packs"
        },
        {
            id:3,
            name: "Tests",
            href:"/v3/tests"
        },
        {
            id:4,
            name: "Analytics",
            href:"/v3/analytics"
        },
        {
            id:5,
            name: "Notebooks",
            href:"/v3/notebooks"
        },
        {
            id:6,
            name: "Profile",
            href:"/v3/profile"
        },
    ]
    
    return (
        <Frame
            className={style.navbar}
            padding={[6,0]}
            height="100vh"
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
                    {fakeApi && fakeApi.map(navLink => (
                        <Tooltip text={navLink.name} position='end'>
                                { (msg)=> (
                                <Stack.Item attributes={msg} key={navLink.id}>
                                    <Link href={navLink.href}>
                                        <Button color={path === navLink.href ? "primary" : "neutral"}  variant={path=== navLink.href ?  "" :"outline" } fullWidth>
                                            {navLink.name}
                                        </Button>
                                    </Link>
                                </Stack.Item>
                                )}
                        </Tooltip>
                    ))}
                </Stack>
            </ActionBar>
        </Frame>
        
      
  )
}

export default Navigation