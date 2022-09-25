import { AspectRatio, Card, Frame, Icon, Image, Link, Overlay, Stack, Text } from "reshaped"
const DetailedTestAnalysis = () => {

    const fakeApi = [
        {
            id: 1,
            name: "Physics",
            img: '/Images/Subjects/Physics.svg'
        },
        {
            id: 2,
            name: "Chemistry",
            img: '/Images/Subjects/Chemistry.svg'
        },
        {
            id: 3,
            name: "Maths",
            img: '/Images/Subjects/Mathematics.svg'
        },
        {
            id: 4,
            name: "All Analytics",
            img: '/Images/Subjects/AllAnalytics.svg'
        },
    ]

  return (
    <Frame padding={[4,4]}>
          <Text variant="featured-2" >Detailed Test Analysis</Text>
          <Frame padding={[2, 0]}>
            <Stack gap={5} direction="row" justify={{ s: "center", l: "start" }}>
                {fakeApi.length > 0 && fakeApi.map(sub => (
                    <Stack.Item key={sub.id}>
                        <Link variant="plain">
                            <Card padding={0}>
                            <Overlay
                                position="bottom"
                                backgroundSlot={
                                    <Image borderRadius="medium" src={sub.img} alt={sub.name} width={{ s: "calc(var(--rs-unit-x3) * 29vw)", l: "320px" }} />
                                }
                                >
                                <Text variant="body-1" align="start">View Detailed Report : {sub.name}</Text>
                            </Overlay>
                            </Card>    
                        </Link>
                    </Stack.Item>    
                ))}
                    
            </Stack>    
          </Frame>
          
    </Frame>
  )
}

export default DetailedTestAnalysis