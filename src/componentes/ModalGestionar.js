import React,{useState,useContext} from "react";
import { Modal, Button } from "react-bootstrap";
import {GlobalContext} from '../context/GlobalContext';
import Gestionar from '../paginaJs/Gestionar'

const ModalGestionar = () => {

  const {showGestionar,_handleCloseGestionar} = useContext(GlobalContext);

    return(
        <Modal show={showGestionar} onHide={_handleCloseGestionar} backdrop="static" size="lg" >
          <Modal.Header closeButton>
            <Modal.Title>Gestionar Preguntas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Gestionar/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={_handleCloseGestionar}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }

  export default ModalGestionar;