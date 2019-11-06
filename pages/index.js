import { Layout } from "../components";
import { Row, Col } from "react-bootstrap";

const IndexPage = () => (
  <Layout>
    {/* Margin is for the navbar */}
    <Row>
      <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 1 }} style={{ backgroundColor: "gray" }}>
        
      </Col>
    </Row>
  </Layout>
)

export default IndexPage