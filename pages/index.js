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
        <Card className="bg-black">
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Card.Header>
                <Card.Title>
                  Start Here: Why You Need This Blog
                </Card.Title>
                <Card.Subtitle>
                  Published Nov. 6, 2019 - 0 Comments
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>Hey! I'm Fritz. I have a great job working as a </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <img width="100%" height="300px" alt="picture representing the article" src="/images/article1.jpeg" />
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