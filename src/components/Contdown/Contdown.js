import { useState, useRef, useEffect } from "react";
import "./Contdown.css";

const Contdown = () => {
  const [timerDias, setTimerDias] = useState("0");
  const [timerHoras, setTimerHoras] = useState("00");
  const [timerMinutos, setTimerMinutos] = useState("00");
  const [timerSegundos, setTimerSegundos] = useState("00");
  const [mensaje, setMensaje] = useState("");

  let interval = useRef();

  const starTimer = () => {
    const countDownDate = new Date("Nov 05, 2021 17:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
      } else {
        setTimerDias(dias);
        setTimerHoras(horas);
        setTimerMinutos(minutos);
        setTimerSegundos(segundos);
      }

      if (dias === 0 && horas === 0 && minutos === 0 && segundos === 0)
        setMensaje("FUE UN GUSTO CONOCERTE LLEJU");
    }, 1000);
  };

  useEffect(() => {
    starTimer();
    return () => {
      //eslint-disable-next-line
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="contdown-container">
      <span className="c-black">Faltan</span>
      <div className="temporizador-row">
        <div className="temporizador-col col-margin-right">
          <span className="temporizador c-black">{timerDias}</span>
          <span className="temporizador-texto c-black">DIAS</span>
        </div>
        <div className="temporizador-col">
          <span className="temporizador c-black">{timerHoras}</span>
          <span className="temporizador-texto c-black">HORAS</span>
        </div>
        <span className="separador c-black">:</span>
        <div className="temporizador-col">
          <span className="temporizador c-black">{timerMinutos}</span>
          <span className="temporizador-texto c-black">MINUTOS</span>
        </div>
        <span className="separador c-black">:</span>
        <div className="temporizador-col">
          <span className="temporizador c-black">{timerSegundos}</span>
          <span className="temporizador-texto c-black">SEGUNDOS</span>
        </div>
      </div>
      <div className="mensaje">
        <span className="c-black">{mensaje ? mensaje : "SE VA LLEJU"}</span>
      </div>
    </div>
  );
};

export default Contdown;
