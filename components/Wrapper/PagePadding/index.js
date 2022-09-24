import {Frame} from 'reshaped'

const PagePadding = ({ children }) => {
    return (
      <Frame padding={0}>
        <Frame padding={[0,5]}>
          {children}
        </Frame>
      </Frame>
    )
}

export default PagePadding;