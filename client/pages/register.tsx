import { Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import Register from "../components/Auth/Register";

const RegisterPage = () => {
  return (
    <Layout>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h1 className="text-center">Register</h1>
          <Register />
        </Col>
      </Row>
    </Layout>
  );
};

export default RegisterPage;
