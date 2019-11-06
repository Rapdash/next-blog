import { Layout } from "../components";
import { Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <Row style={{ marginTop: 65 }}>
      <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 1 }} style={{ backgroundColor: "gray" }}>
        
      </Col>
    </Row>
  </Layout>
)