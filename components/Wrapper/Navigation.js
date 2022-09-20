import { useState,useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import IconSvg from '../../public/Icon/Asset/penPaper.svg'
import { Container, Button, Image, Frame, Stack, Tooltip, Modal, useToggle ,Dismissible, ActionBar, Avatar, Badge, Alert, Icon} from "reshaped"
import style from '../../styles/Navigation.module.css'

const Navigation = () => {
    const { activate, deactivate:deactivate, active } = useToggle(false);
    const [path, setPath] = useState([]);
    const [notifications, setNotifications] = useState(2);
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
            padding={[6, 0]}
            backgroundColor="page"
            borderColor="neutral-faded"
            align="center"
            width="100%"
        >
            <Button className={style.modalToggle} onClick={activate}>
                    <Image src='/Icon/Asset/menuBar.svg' width="15px" alt="Menu" />
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
                                    <Stack.Item key={navLink.id} >
                                        <Link href={navLink.href}>
                                            <Button onClick={deactivate} color={path === navLink.href ? "primary" : "neutral"}  className={path=== navLink.href ?  "" :style.btnBorder } fullWidth>
                                                {navLink.name}
                                            </Button>
                                        </Link>
                                    </Stack.Item>
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
            <Notification notifications={notifications}/>
        </Frame>
        
      
  )
}

export default Navigation

const Notification = ({notifications}) => {
    const { activate, deactivate, active } = useToggle(false);

    return (
        <Fragment>
            <ActionBar size="large" className={style.notification}>
                <Stack align="center" justify="centers" className={style.notificationStack}>
                    <Stack.Item>
                        <Button variant='ghost' onClick={activate}>
                        <Badge.Container>
                            {notifications >0 && <Badge size="small" color="critical" rounded>
                            {notifications}    
                            </Badge>}
                            <Image src='/Icon/Asset/notificationBell.svg' width='18px' height='18px' alt="Notification" />
                        </Badge.Container>
                        </Button>
                    </Stack.Item>
                    <Stack.Item>
                        <Avatar
                            initials="Gy"
                            color="neutral"
                            attributes={{ "aria-label": "Dmitry Belyaev" }}
                        />
                    </Stack.Item>
                </Stack>
            </ActionBar>
            <Modal active={active} onClose={deactivate} position="end">
                <Alert
                    title="New Test Series"
                    color="primary"
                    actionsSlot={[
                    <Link href="/v3/home"  variant="plain"><Button color="primary" onClick={deactivate}>View Test</Button></Link>,
                    <Link href=""  onClick={() => {}} variant="plain"><Button color='critical' variant='outline'>Delete Notification</Button></Link>,
                ]}>
                    Don't forget to generate the new theme definition after updating to our latest
                    release.
                </Alert>
            </Modal>
        </Fragment>
    )
}