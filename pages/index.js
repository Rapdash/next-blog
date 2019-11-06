import { Layout } from "../components";
import { Row, Col, Card, Button, FormControl, Form } from "react-bootstrap";
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
            <Col xs={{ span: 12 }} xl={{ span: 6 }}>
              <Card.Header>
                <Card.Title>
                  Start Here: Why You Need This Blog
                </Card.Title>
                <Card.Subtitle>
                  Published Nov. 6, 2019 - 0 Comments
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Hey! I'm Fritz. I have a great job working a 9-5 as a software engineer. 
                  I'm still early in my career, but I do okay for myself. I get up every weekday
                  morning at 5:30 AM to go to the gym & lift weights to keep my body in great shape.
                  <br/>
                  <br/>
                  I sound like a total prick, right? <strong>Here's the thing...</strong> I 
                  also have what was once called Asperger's Disorder. I used to be unemployed, fat & hopeless.
                  Now I'm none of those, and my life is so much better than it was.
                  <br/>
                  <br/>
                  I can show you how to hack your disability so that it works for you, not against you.
                  Jobs, Fitness, Girlfriends? 
                  <br/>
                  <strong>I'll teach you how.</strong> Ready to get started?
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 6 }}>
              <img width="100%" height="350px" alt="picture representing the article" src="/images/article1.jpeg" />
              <div className="button-wrapper">
                <Button  className="bg-green mt-3 mb-3" block>
                  <h3 className="text-black">Get Started</h3>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        </a>
        </Link>
      </Col>
      <Col className="display-none display-lg-2 mt-4">
        <Card style={{ border: "none"}}>  
          <Card.Header className="bg-black">
            <Card.Title className="text-white" style={{ fontSize: "25px"}}>Updates From Someone Who's Been There:</Card.Title>
            <Card.Subtitle className="text-green" style={{ fontSize: "20px"}}>Join My Mailing List</Card.Subtitle>
            <Card.Body className="bg-black">
              <Form onSubmit={(e) => e.preventDefault()}>
                <FormControl onChange={(event) => {}} placeholder="Email" type="email" />
                <Button block className="bg-green mt-3 text-black">Sign Up</Button>
              </Form>
            </Card.Body>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage