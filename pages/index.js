import { Layout } from "../components";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link"

const IndexPage = () => (
  <Layout>
    {/* Margin is for the navbar */}
    <Row>
      <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 1 }} className="mt-4">
        <Link href={"/articles/1"} passHref>
        <a className="no-link-hover">
        <Card>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Card.Header className="bg-black">
                <Card.Title className="text-white">
                  Start Here: Why You Need This Blog
                </Card.Title>
                <Card.Subtitle className="text-green">Published Nov. 6, 2019 - 0 Comments</Card.Subtitle>
              </Card.Header>
          </Col>
        </Row>

        </Card>
            </a>
            </Link>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage