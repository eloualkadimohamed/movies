import { Form,Button } from "react-bootstrap"

function ReviewForm({handlSubmit,revText,labelText,defaultValue}) {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control as="textarea" ref={revText} rows={3} defaultValue={defaultValue}></Form.Control>
            <Button variant="outline-info" onClick={handlSubmit}>Submit</Button>
        </Form.Group>
    </Form>
  )
}

export default ReviewForm