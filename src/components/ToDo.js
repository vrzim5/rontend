import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { LuCalendarClock, LuCalendarCheck, LuCalendarX, LuCalendarOff, LuCalendar } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ToDo = ({ text, data, prazo, updateMode, deleteToDo }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date) => {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [isCompleted, setIsCompleted] = useState(false);

  const handleUpdate = () => {
    updateMode(isCompleted);
  };

  const determineIcon = () => {
    const today = new Date();
    const deadline = new Date(prazo);
    const isToday = today.toDateString() === deadline.toDateString();
    const isPast = today > deadline;

    if (isCompleted) {
      if (isPast) {
        return <LuCalendarOff color="orange" />;
      } else {
        return <LuCalendarCheck color="green" />;
      }
    } else {
      if (isPast) {
        return <LuCalendarX color="red" />;
      } else if (isToday) {
        return <LuCalendarClock color="yellow" />;
      } else {
        return <LuCalendar />;
      }
    }
  };

  return (
    <div className="todo">
      <div className="task-details">
        <div className="task-text">{text}</div>
        <div className="task-date">
          Criado em: {formatDate(data)} às: {formatTime(data)}
        </div>
        <div className="task-prazo">
          Prazo até: {formatDate(prazo)} às: {formatTime(prazo)}
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={handleUpdate}>
          {determineIcon()}
        </div>
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
      <div className="complete-section">
        <IoIosCheckmarkCircleOutline className="complete-button" onClick={() => setIsCompleted(!isCompleted)} />
        <span>Marcar como concluída</span>
      </div>
    </div>
  );
};

export default ToDo;
