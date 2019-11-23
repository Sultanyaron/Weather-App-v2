import React from 'react';
import { useSelector } from 'react-redux';
import { getIconPath } from '../../../../utils/getIconPath';
import { getWeekDay } from '../../../../utils/getWeekDay';
import { celToFar } from '../../../../utils/convertTemp';

const DayForecast = ({
  dailyForecast,

}) => {
  const {
    Temperature,
    Day,
    Night
  } = dailyForecast;
  const date = dailyForecast.Date;
  const dayIconPath = getIconPath(Day.Icon);
  const nightIconPath = getIconPath(Night.Icon);
  let dayTemp = Math.round(Temperature.Maximum.Value);
  let nightTemp = Math.round(Temperature.Minimum.Value);
  const weekDayNumber = new Date(date).getDay();
  const weekDay = getWeekDay(weekDayNumber);
  const { metric } = useSelector((state) => state.userSettings);

  if (!metric) {
    dayTemp = celToFar(dayTemp);
    nightTemp = celToFar(nightTemp);
  }

  return (
    <div className="cityForecast__day">
      <p className="cityForecast__day-title">{weekDay}</p>
      <div className="cityForecast__day-container">
        <div className="cityForecast__details">
          <p className="cityForecast__details-title">Day:</p>
          <p className="cityForecast__details-temp">{dayTemp}°</p>
          <img className="cityForecast__icon" src={dayIconPath} alt={dayTemp} />
        </div>
        <div className="cityForecast__details">
          <p className="cityForecast__details-title">Night:</p>
          <p className="cityForecast__details-temp">{nightTemp}°</p>
          <img className="cityForecast__details-icon" src={nightIconPath} alt={nightTemp} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DayForecast);