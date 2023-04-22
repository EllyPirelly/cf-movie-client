import { Spinner } from "react-bootstrap";

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <h4 className="spinner-headline">Hold the line, the list is loading...</h4>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
