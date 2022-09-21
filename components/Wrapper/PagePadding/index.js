import {Frame,Container} from 'reshaped'

const PagePadding = ({ children }) => {
    return (
    <Frame padding={[8,3]}>
        <Container padding={0}>
          {children}
        </Container>
    </Frame>
    )
}

export default PagePadding;