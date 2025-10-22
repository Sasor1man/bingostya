import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { setTitleRequest } from '../../service/requests';
import styles from './style.module.css';

function Header({ request, setIsDeleting, isDeleting }) {

    const [title, setTitle] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            setTitleRequest(title)
            request()
        }
    };

    return (
        <Navbar className="bg-body-tertiary justify-content-around">
            <Form inline onSubmit={handleSubmit}>
                <Row>
                    <Col xs='auto'>
                        <Button
                            className={styles.trashButton}
                            onClick={() => isDeleting ? setIsDeleting(false) : setIsDeleting(true)}
                            variant={isDeleting ? 'danger' : 'primary'}
                        ><i className="bi bi-trash"></i></Button>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="add item"
                            className=" mr-sm-2"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={handleSubmit}>Add</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>);
}

export default Header;