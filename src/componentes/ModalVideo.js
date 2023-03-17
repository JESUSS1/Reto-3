import React,{useState,useContext, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import {GlobalContext} from '../context/GlobalContext';
import VideoPreguntas from '../paginaJs/VideoPreguntas'

const ModalVideo = () => {

    const {showVideo,_handleCloseVideo,preguntas,preguntaActual,setPreguntaActual} = useContext(GlobalContext);
    //const [position,setPreguntaActual] = useState(0);//position lista
    const [nombreButton,setNombreButton] = useState("Siguiente");
    const [visibleAtras, setVisibleAtras] = useState("none");//Boton volver


    const cerrarModal = () =>{
      setPreguntaActual(0);
      setNombreButton("Siguiente");
      setVisibleAtras("none");
      _handleCloseVideo();
      
    }

    const _handleNextVideo = () =>{
       if(nombreButton == "Finalizar"){ //Verificar si se termino la encuesta
       
        let verificacion = preguntas.filter(pre => pre.srcVideo == "")   
        if(verificacion.length == 0 ){
          cerrarModal();
          alert("Tareas Finalizadas");
          return null;
        }else{
          alert("Falta terminar tareas");
          return null;
        }
        
       } 
       if((preguntas.length-1)>preguntaActual){
            setPreguntaActual(preguntaActual+1)
        }
        if((preguntas.length-1)===preguntaActual){
          console.log("_handleNextVideo");
          setNombreButton("Finalizar");
        }
    }

    const _handleRetrocederVideo = () =>{
      if((preguntas.length-1)>=preguntaActual){
          setPreguntaActual(preguntaActual-1)
          setNombreButton("Siguiente");
      }
  }

    useEffect(()=>{
      
      if(preguntaActual==0 && preguntas.length==0){
        setPreguntaActual(0)
      }else if(preguntaActual!=0 && preguntas.length!=0){
        //setPreguntaActual(0)
      }

      if(preguntas.length==1){
        setNombreButton("Finalizar");
        setVisibleAtras("none");
      }else if(preguntas.length>1 && preguntaActual<preguntas.length-1){
        setNombreButton("Siguiente");
        setVisibleAtras("block");
      }
      console.log("useEffect1 "+preguntaActual);

    },[preguntas])

    //cuando se cambia de pregunta
    useEffect(()=>{
        if((preguntas.length-1)===preguntaActual){
            setNombreButton("Finalizar");
        }
        if(preguntas.length>1 && preguntaActual>0){
            setVisibleAtras("block");
        }else{
          setVisibleAtras("none");
        }

    },[preguntaActual])
    

      return(
          <Modal show={showVideo} onHide={cerrarModal} backdrop="static" size="lg" >
            <Modal.Header closeButton>
              <Modal.Title> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VideoPreguntas position={preguntaActual} />
            </Modal.Body>
            <Modal.Footer>
              <Button style={{display:visibleAtras}}  variant="outline-secondary" onClick={_handleRetrocederVideo}>Regresar</Button>
              <Button  variant="primary" onClick={_handleNextVideo}>{nombreButton}</Button>
            </Modal.Footer>
        </Modal>
      )
    }
  
    export default ModalVideo;