import { Layout } from "../components";
import { Row, Col, Card } from "react-bootstrap";

const IndexPage = () => (
  <Layout>
    {/* Margin is for the navbar */}
    <Row>
      <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 1 }} className="mt-4" >
        <Card>
          <Card.Header style={{ backgroundColor: 'black' }}>
            <Card.Title>
              Start Here: Why You Need This Blog
            </Card.Title>
            <Card.Subtitle>Published Nov. 6, 2019 - 0 Comments</Card.Subtitle>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage