import {useState,useEffect,createContext} from 'react'
import {objCuestionario as data} from './objCuestionario'
import {useRecordWebcam,CAMERA_STATUS} from "react-record-webcam";

export const VideoContext = createContext();
const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4"
  };

export function VideoContextProvider(props) {

    const [visibleContador, setVisibleContador] = useState("none");
    const _handleSetVisibleContador = (newEstado) => {setVisibleContador(newEstado)};
  
    const recordWebcam = useRecordWebcam(OPTIONS);
    
    const getRecordingFileHooks = async () => {
      const blob = await recordWebcam.getRecording();
      console.log({ blob });
    };
  

  return(      
      <VideoContext.Provider value={{
        visibleContador,
        _handleSetVisibleContador,
        recordWebcam,
        getRecordingFileHooks    
      }} >
          {props.children}
      </VideoContext.Provider>
  )
}