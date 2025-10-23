import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import styles from './style.module.css';

function Header({ setIsDeleting, isDeleting, addItem }) {

    const [title, setTitle] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            addItem(title)
        }
    };

    return (
        <Navbar className="bg-body-tertiary justify-content-around">
            <Form inline onSubmit={handleSubmit} className={styles.headerForm}>
                <Row>
                    <Col xs='auto'>
                        <Button
                            className={styles.trashButton}
                            onClick={() => isDeleting ? setIsDeleting(false) : setIsDeleting(true)}
                            variant={isDeleting ? 'danger' : 'primary'}
                        ><i className="bi bi-trash"></i></Button>
                    </Col>
                    <div className={styles.addInput}>
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
                    </div>
                </Row>
            </Form>
        </Navbar>);
}

export default Header;