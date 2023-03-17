import {GlobalContext} from '../context/GlobalContext';
import {useState,useContext,useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TablaPreguntas from './TablaPreguntas';

//console.log(data)
function Gestionar() {
  const {preguntas,_handleAddPregunta,_handleDeletePregunta} = useContext(GlobalContext);
  const ref_input = useRef();

  const _handleFormPregunta = () =>{
   
    if(ref_input.current.value!=""){
      _handleAddPregunta({
        id:uuidv4(),
        pregunta:ref_input.current.value,
        srcVideo : '',
        estadoRespuesta:false
  
      })
    }

  }

  const FormAgregarPregunta = () =>{
    return(
      <div className="row g-2">
        <div className="col-sm-10">
          <input ref={ref_input} type="text" className="form-control" id="pregunta" placeholder="Ingrese la pregunta" />
        </div>
        <div className="col-auto">
          <button value="s" className="btn btn-primary mb-3" onClick={_handleFormPregunta}>Agregar</button>
        </div>


      </div>
    )
  }

  return (
    <div >
      <FormAgregarPregunta/>
      <TablaPreguntas data={preguntas} hiden={false} />
    </div>
  )
}

export default Gestionar;