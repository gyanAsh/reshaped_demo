import { Button, Card, Divider, Frame, MenuItem, Stack, Tabs, Text } from "reshaped"

const PackageTests = () => {
  return (
    <Frame padding={4}>
      <Text variant="featured-2">Test</Text>
      <Frame padding={[2,0]}>
        <Card>
          <Tabs>
            <Tabs.List>
              <Tabs.Item value="0"><Text variant="body-medium-1">Part Tests</Text></Tabs.Item>
              <Tabs.Item value="1"><Text variant="body-medium-1">Full Tests</Text></Tabs.Item>
              <Tabs.Item value="2"><Text variant="body-medium-1">Previous Year Papers</Text></Tabs.Item>
            </Tabs.List>
            <Frame padding={[5,5]}>
              <Tabs.Panel value="0">
                <Stack gap={2}>
                  <Text variant="title-3">Getting started</Text>
                  <MenuItem.Aligner>
                    <Stack gap={1}>
                      <MenuItem size="large">
                        <Stack.Item>
                          <Text>01</Text>
                        </Stack.Item>
                        <Stack.Item grow>
                          About
                        </Stack.Item>
                        <Stack.Item>
                          <Button>clink</Button>
                        </Stack.Item>
                      </MenuItem>
                      <Divider />
                      <MenuItem size="large">Installation</MenuItem>
                    </Stack>
                  </MenuItem.Aligner>
                </Stack>
              </Tabs.Panel>
              <Tabs.Panel value="1">Full Tests</Tabs.Panel>
              <Tabs.Panel value="2">Previous Year Papers</Tabs.Panel>    
            </Frame>
          </Tabs>
        </Card>
      </Frame>
    </Frame>
  )
}

export default PackageTests