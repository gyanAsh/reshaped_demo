import { Fragment } from 'react';
import { Button, Card, DropdownMenu, Frame, Icon, Link, Stack, Text } from 'reshaped';
import style from '../../styles/Test.module.css'
import { ChangeIcon, Redirect } from '../Assets/Icons';
const PackDetails = () => {

    const packBought = [
        {
            id: 1,
            packName:"JEE Main 2023 Full Test Series"
        },
        {
            id: 2,
            packName:"JEE Main 2023 Chapter-wise Test Series"
        }
    ]
    return (
        <Fragment>
            <Card padding={2}>
                <Frame padding={[3,0]}>
                    <Text variant="display-3" color="primary">JEE Main 2023 Full Test Series</Text>
                </Frame>
                <Stack direction="row" justify="stretch" align="center" gap={10}>
                    <Text variant="body-medium-2" color="neutral-faded"><Text variant='body-strong-1' as="span">{5}</Text> PART TESTS TESTS  .  <Text variant='body-strong-1' as="span">{30}</Text> FULL TESTS TESTS  .  <Text variant='body-strong-1' as="span">{80}</Text> PREVIOUS YEAR PAPERS TESTS</Text>
                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                        {(attributes) => <Button startIcon={ChangeIcon} attributes={attributes}>Change Pack</Button>}
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <Frame padding={2}>
                                <Text variant="body-medium-1">Select a pack from your purchased packs:</Text>
                                <DropdownMenu.Section>
                                    {packBought.length > 0 && packBought.map(pack => (
                                        <DropdownMenu.Item key={pack.id}><Text variant='body-medium-1' color="primary">{pack.packName}</Text></DropdownMenu.Item>
                                    ))}
                                    {packBought.length === 0 && <Card padding={1}><Text variant='body-1' color='critical'>You've not purchased any test series packs. 🙄</Text></Card>}
                                </DropdownMenu.Section>
                                <DropdownMenu.Section>
                                    <DropdownMenu.Item>
                                        <Link color="critical" variant="plain">
                                            <Stack direction="row" align="center" justify="center">
                                                <Stack.Item >View All Packs</Stack.Item>
                                                <Stack.Item ><Icon svg={Redirect} /></Stack.Item>
                                            </Stack>
                                        </Link>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Section>    
                            </Frame>
                            
                            
                        </DropdownMenu.Content>
                    </DropdownMenu>
                </Stack>
                
            </Card>
          
          
        </Fragment>
    )
}

export default PackDetails;