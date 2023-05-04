import GlobalStyles from "./GlobalStyles";
import Container from './layout/Container';
import Col from './layout/Col';
import Row from './layout/Row';


function App() {
  return (
    <>
        <GlobalStyles />
        <Container style={{height: '100vh'}}>
            <Row>
                <Col />
                <Col />
            </Row>
            <Row>
                <Col />
                <Col />
                <Col />
            </Row>
            <Col />
            {/*<Col col={2}/>*/}
            {/*<Col col={2}/>*/}
        </Container>
    </>
  )
}

export default App
