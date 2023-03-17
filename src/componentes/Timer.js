import { useState, useRef, useEffect } from 'react'
import '../css/componente.css';
  
const Timer = ({tiempoMaxFormato,tiempoMax,visible,stopVideo}) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        if(hours==0 && minutes==0 && seconds==0){
            console.log("Finalizo el Tiempo");
            stopVideo();
        }

        return {
            total, hours, minutes, seconds
        };
    }
    
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  

    const clearTimer = (e) => {

        //Establecemos el tiempo inicial que se mostrara al comienzo
        setTimer(tiempoMaxFormato);
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
            //console.log("Timer iniciado");
        }, 1000)
        Ref.current = id;
       
    }
  
    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + tiempoMax);//Establecemos desde donde empezara a reducir el tiempo
        return deadline;
    }
  
    useEffect(() => {
        if(visible === "block"){
             clearTimer(getDeadTime());
        }
    }, []);
  
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    return (
        <div style={{display:visible}}  className='col-auto timer' >
            <h4 style={{color:'red'}} >{timer}</h4>
        </div>
    )
}
  
export default Timer;