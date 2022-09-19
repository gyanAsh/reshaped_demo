import { Fragment } from 'react'
import style from '../../styles/Home.module.css'
import { Stack, Text,Image,ActionBar, Button,Card,AspectRatio,Frame, Container } from "reshaped";
const TestPacks = () => {

    const fakeApi = [
        {
            id: 1,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Open Test 2023 (AIMOT)"
        },
        {
            id: 2,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Big Open Test 2023 (AIMVOT)"
        },
        {
            id: 3,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Very Big Open Test 2023 (AIMVBOT)"
        },
        {
            id: 4,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Very Big Open Test 2023 (AIMVBOT)"
        },
        {
            id: 5,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Very Big Open Test 2023 (AIMVBOT)"
        },
        {
            id: 6,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Very Big Open Test 2023 (AIMVBOT)"
        },
        {
            id: 7,
            img: "/Icon/Exams/jee-main.png",
            title:"All India MathonGo Very Big Open Test 2023 (AIMVBOT)"
        }

    ];

  return (
      <Container className={style.packsDisplayContainer} align="start" justify="center">
          <Text variant="featured-3">Your Test Series Packs</Text>
          <Stack direction="row" gap={6} >
          {fakeApi && fakeApi.map(pack => (
            <Stack.Item wrap className={style.cardContainer} key={pack.id}>
                <Card padding={2} className={style.card} >
                    <Stack direction="row" align="center" justify="start" >
                    <Stack.Item>
                        <AspectRatio ratio={4 / 4}>
                            <Image src={pack.img} alt="Exam Logo" />
                        </AspectRatio>
                    </Stack.Item> 
                    <Stack.Item>
                        <Frame padding={1}>
                            {pack.title}
                        </Frame>  
                    </Stack.Item> 
                    </Stack>
                    <ActionBar>
                        <Stack gap={5} direction="row" justify="end">
                            <Stack.Item>
                            <Button className={style.btn}>
                                View Test Series
                            </Button>
                        </Stack.Item>
                        </Stack>
                    </ActionBar>  
                </Card>
              </Stack.Item>
          ))}
          </Stack>
      </Container>
  )
}

export default TestPacks