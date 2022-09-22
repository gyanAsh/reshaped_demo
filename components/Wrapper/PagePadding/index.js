import {Frame} from 'reshaped'
import DarkMode from '../DarkMode';

const PagePadding = ({ children }) => {
    return (
      <Frame padding={[2,3]}>
        <DarkMode/>
        <Frame padding={[7,2]}>
          {children}
        </Frame>
      </Frame>
    )
}

export default PagePadding;