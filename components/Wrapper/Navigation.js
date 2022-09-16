// import Image from 'next/image'
import Link from 'next/link'
import { ActionBar, Button, Image, Frame, Stack } from "reshaped"
import style from '../../styles/Navigation.module.css'
const Navigation = () => {
    return (
        <Frame
            className={style.navbar}
            padding={[6,0]}
            height="100vh"
            // backgroundColor="positive-faded"
            borderColor="positive-faded"
            align="center"
        >
            <Image src="/Icon/Logo.svg" alt="Vercel Logo" width="50px" />
            <ActionBar className={style.navLinkContainer}>
                <Stack>
                    <Stack.Item>
                        <Link href="/v3/home">
                            <Button  color="primary" onClick={()=>console.log("Home button clicked")} fullWidth>
                                Home
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/packs">
                            <Button color="primary" onClick={() => console.log("Packs button clicked")} fullWidth>
                                Packs
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Link href="/v3/tests">
                            <Button color="primary" onClick={()=>console.log("Tests button clicked")} fullWidth>
                                Tests
                            </Button>
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <Button color="primary" onClick={()=>console.log("Analytics button clicked")} fullWidth>
                            Analytics
                        </Button>
                    </Stack.Item>
                    <Stack.Item>
                        <Button color="primary" onClick={()=>console.log("Notebooks button clicked")} fullWidth>
                            Notebooks
                        </Button>
                    </Stack.Item>
                    <Stack.Item>
                        <Button color="primary" onClick={()=>console.log("Profile button clicked")} fullWidth>
                            Profile
                        </Button>
                    </Stack.Item>
                </Stack>
            </ActionBar>
        </Frame>
        
      
  )
}

export default Navigation