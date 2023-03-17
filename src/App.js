import React,{useContext } from 'react';
import {GlobalContext} from './context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ModalGestionar from './componentes/ModalGestionar';
import ModalVideo from './componentes/ModalVideo';

import TablaPreguntas from './paginaJs/TablaPreguntas';

function App() {

  const {_handleShowGestionar,_handleShowVideo} = useContext(GlobalContext);


  return (
    <div >
     <h1 style={{marginBottom:"20px",marginTop:"10px"}}>OPCIONES</h1>    
     <hr/>
      <button style={{marginLeft:"20px",marginTop:"10px"}}  className="btn btn-success" onClick={_handleShowGestionar}  >Gestionar Preguntas</button>
      <button style={{marginLeft:"20px",marginTop:"10px"}} className="btn btn-secondary" onClick={_handleShowVideo}  >Video Cuestionario</button>
      <ModalGestionar/>
      <ModalVideo/>
      <br/>
      <TablaPreguntas hidden={true}/>
    </div>
  );
}

export default App;
