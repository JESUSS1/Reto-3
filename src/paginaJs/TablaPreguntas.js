import {GlobalContext} from '../context/GlobalContext';
import {useContext} from 'react';

export default function TablaPreguntas(props){
    const {_handleDeletePregunta,setPreguntaActual,_handleShowVideo,_handleCloseGestionar,preguntas} = useContext(GlobalContext);
    
    const irHaciaPregunta=(index)=>{
        setPreguntaActual(index);
    }


    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th hidden={!props.hidden}>Estado</th>
            <th >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {preguntas.map((pregunta,index)=>{

            const colorCondicion=()=>{
                if(pregunta.srcVideo!=""){
                    return true;
                }else{
                    return false;
                }
                
            }

            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td hidden={!props.hidden} ><label className={(colorCondicion()?"badge bg-success":"badge bg-danger")} >{colorCondicion()?"Grabado":"Falta"}</label> </td>
                <td>{pregunta.pregunta}</td>
                <td>
                  <button hidden={props.hidden}  className="btn btn-danger" onClick={()=>_handleDeletePregunta(pregunta.id)} >Eliminar</button>
                  <button hidden={!props.hidden}  className="btn btn-primary" onClick={()=>{
                    irHaciaPregunta(index);
                    _handleCloseGestionar(false);
                    _handleShowVideo(true);
                    
                  }} >Resolver</button>
                </td>
              </tr>
            )
          } )}
        </tbody>
      </table>
    )
  }