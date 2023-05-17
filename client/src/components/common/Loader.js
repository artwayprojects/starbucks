import { Spinner } from "react-bootstrap";

export default function Loader (props) {
    return (
        <Spinner animation="border" role="status" {...props}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
