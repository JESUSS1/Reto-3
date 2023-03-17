import {useState,useEffect,createContext} from 'react'
import {objCuestionario as data} from './objCuestionario'

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {

  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);

  const [showGestionar, setShowGestionar] = useState(false);
  const _handleCloseGestionar = () => setShowGestionar(false);
  const _handleShowGestionar = () => setShowGestionar(true);

  const [showVideo, setShowVideo] = useState(false);
  const _handleCloseVideo = () => setShowVideo(false);
  const _handleShowVideo = () => setShowVideo(true);



  const _handleSetPreguntasIniciales = (data) =>{setPreguntas(data);}

  const _handleAddPregunta = (pregunta) =>{setPreguntas([...preguntas,pregunta]);}
  const _handleDeletePregunta = (idP) =>{setPreguntas(preguntas.filter(pre => pre.id!==idP)  );}
  const _handleUpdateSrcPregunta = (id,enlace) => {
    setPreguntas(preguntas.map(pre => {
      if(pre.id === id){
        pre.srcVideo = enlace;
      }
      //console.log(pre)
      return pre;
    }));
    }

  useEffect(()=>{
    _handleSetPreguntasIniciales(data);
  },[])

  return(      
      <GlobalContext.Provider value={{
          preguntas,
          preguntaActual,
          setPreguntaActual,
          _handleAddPregunta,
          showGestionar,
          _handleCloseGestionar,
          _handleShowGestionar,
          showVideo,
          _handleCloseVideo,
          _handleShowVideo,
          _handleDeletePregunta,
          _handleUpdateSrcPregunta
      }} >
          {props.children}
      </GlobalContext.Provider>
  )
}