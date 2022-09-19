import Navigation from "./Navigation"
import { Reshaped, Stack } from "reshaped"
import style from '../../styles/Navigation.module.css'
import "reshaped/themes/reshaped/theme.css";

const Wrapper = ({ children }) => {
    return (
        <Reshaped theme="reshaped">
            <Stack className={ style.isRow }>
                <Stack.Item className={style.navWidth}>
                    <Navigation /> 
                </Stack.Item>
                <Stack.Item grow>
                    {children}
                </Stack.Item>
            </Stack>
            
        </Reshaped>
        
    )
}

export default Wrapper;