import { Container,Text,Stack,Card,Frame,ActionBar,Button, } from 'reshaped';
import style from '../../styles/Packs.module.css'
const TestPacksCards = () => {

    const fakeApi = [
        {
            id: 1,
            date:"1st Jul 2022",
            title:"JEE Main 2023 Full Test Series"
        },
        {
            id: 2,
            date:"1st Jul 2022",
            title:"JEE Main 2023 Chapter-wise Test Series"
        },
        {
            id: 3,
            date:"1st Jul 2022",
            title:"JEE Advanced 2023 Full Test Series"
        },
        {
            id: 4,
            date:"1st Jul 2022",
            title:"JEE Advanced 2023 Chapter-wise Test Series"
        },
        {
            id: 5,
            date:"1st Jul 2022",
            title:"BITSAT 2023 Chapter-wise Test Series"
        },
        {
            id: 6,
            date:"1st Jul 2022",
            title:"WBJEE 2023 Chapter-wise Test Series"
        },
        {
            id: 7,
            date:"1st Jul 2022",
            title:"CUET 2023 Full Test Series"
        }

    ];

    return (
        <Container className={style.packsDisplayContainer} align="start" justify="center">
        <Stack direction="row" gap={6} >
        {fakeApi && fakeApi.map(pack => (
          <Stack.Item wrap className={style.cardContainer} key={pack.id}>
              <Card padding={2} className={style.card} >
                  <Stack gap={0} direction="column" justify="start" >
                  <Stack.Item>
                      <Frame padding={1}>
                        <Text variant='body-medium-1'>{pack.title}</Text>
                      </Frame>
                  </Stack.Item>
                  <Stack.Item>
                      <Frame padding={1}>
                        <Text color="neutral-faded" variant='body-2'>{pack.date}</Text>
                      </Frame>  
                  </Stack.Item> 
                  </Stack>
                  <ActionBar size="medium" >
                      <Stack  gap={{s:1,l:5}} direction="row" justify="end">
                      <Stack.Item>
                          <Button className={style.btn}>
                              View Test
                          </Button>
                      </Stack.Item>
                        <Stack.Item>
                          <Button color="critical" className={style.btn}>
                             Purchase Pack
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

export default TestPacksCards