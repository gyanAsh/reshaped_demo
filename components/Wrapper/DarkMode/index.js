import { Icon, Switch, useTheme, Stack } from 'reshaped';
import { IconZap, Moon, Sun } from '../../Assets/Icons';


const DarkMode = () => {
    const { setColorMode, colorMode } = useTheme();
    return (
        <Stack direction="row" align="center" justify="end">
            <Icon svg={Sun} size={6}/>
            <Switch name="changeTheme" onChange={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} />
            <Icon svg={Moon} size={5}/>
        </Stack>
        
    )
}
export default DarkMode;
