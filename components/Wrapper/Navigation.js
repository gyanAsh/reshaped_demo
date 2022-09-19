import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Container, Button, Image, Frame, Stack, Tooltip, Modal, useToggle ,Dismissible} from "reshaped"
import style from '../../styles/Navigation.module.css'

const Navigation = () => {
    const { activate, deactivate, active } = useToggle(false);
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
            borderColor="neutral-faded"
            align="center"
        >
            <Button className={style.modalToggle} onClick={activate}>
                <Tooltip text="Menu" position='end'>
                    {(msg)=><Image src='/Icon/Asset/menuBar.svg' width="15px" alt="Menu" attributes={msg}/> }
                </Tooltip>
            </Button>
            <Tooltip text="Home" position='end'>
                { (msg)=> (
                    <Link href="/v3/home">
                        <Button variant="ghost" attributes={msg}>
                            <Image src="/Icon/Logo.svg" alt="Quizrr Logo" width="50px" />
                        </Button>
                    </Link>
                )}
            </Tooltip>
            <Modal className={style.modal} active={active} onClose={deactivate} position="start" >
                <Dismissible onClose={deactivate} closeAriaLabel="Close modal">
                <Container className={style.navLinkContainer}>
                    <Stack>
                        {fakeApi && fakeApi.map(navLink => (
                            <Tooltip text={navLink.name} key={navLink.id} position='end'>
                                    { (msg)=> (
                                    <Stack.Item attributes={msg} >
                                        <Link href={navLink.href}>
                                            <Button color={path === navLink.href ? "primary" : "neutral"}  className={path=== navLink.href ?  "" :style.btnBorder } fullWidth>
                                                {navLink.name}
                                            </Button>
                                        </Link>
                                    </Stack.Item>
                                    )}
                            </Tooltip>
                        ))}
                    </Stack>
                </Container>
                </Dismissible>
            </Modal>
            <Container className={style.navLinkContainerFull} >
                <Stack>
                    {fakeApi && fakeApi.map(navLink => (
                        <Tooltip text={navLink.name} key={navLink.id} position='end'>
                                { (msg)=> (
                                <Stack.Item attributes={msg} >
                                    <Link href={navLink.href}>
                                        <Button color={path === navLink.href ? "primary" : "neutral"}  className={path=== navLink.href ?  "" :style.btnBorder } fullWidth>
                                            {navLink.name}
                                        </Button>
                                    </Link>
                                </Stack.Item>
                                )}
                        </Tooltip>
                    ))}
                </Stack>
            </Container>
        </Frame>
        
      
  )
}

export default Navigation