import Button from "components/Button/Button";
import Container from "components/Container/Container";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <h1>Page Not Found</h1>{" "}
      </Container>
    </div>
  );
};

export default NotFoundPage;
