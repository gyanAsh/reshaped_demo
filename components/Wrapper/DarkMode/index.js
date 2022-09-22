import { Icon, Switch, useTheme, Stack } from 'reshaped';
import { Moon, Sun } from '../../Assets/Icons';


const DarkMode = () => {
    const { setColorMode, colorMode } = useTheme();
    return (
        <Stack direction="row" align="center" justify="end">
            <Icon svg={Sun} size={6}/>
            <Switch name="changeTheme" checked={colorMode === 'dark'?true:false} onChange={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} />
            <Icon svg={Moon} size={5}/>
        </Stack>
        
    )
}
export default DarkMode;
