import React from 'react';
import { PropsTicket } from '../types/types';

const getTime = (ms: number) => {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

function Ticket({ ticket }: { ticket: PropsTicket}) {
  return (
    <div key={ticket.id} className="card">
      <div className="card-header">
        <div className="card-header-price">
          {ticket.price}
          {' '}
          Р
        </div>
        <div className="card-header-img"><img alt="carrier" src={`//pics.avs.io/99/36/${ticket.carrier}.png`} /></div>
      </div>
      <div className="card-body">
        {ticket.segments.map((segment, ind) => {
          const durationMs = segment.duration * 60000;
          const travelHours = Math.ceil(segment.duration / 60);
          const travelMinutes = segment.duration % 60;
          const departureMs = Date.parse(segment.date);
          const arrivalTime = getTime(departureMs + durationMs);
          const departureTime = getTime(departureMs);
          const key = ind + 1;
          return (
            <div key={key} className="card-body__row">
              <div className="row-item">
                <div className="row-item__header">
                  {segment.origin}
                  {' '}
                  -
                  {' '}
                  {segment.destination}
                </div>
                <div className="row-item__body">
                  {departureTime}
                  {' '}
                  -
                  {' '}
                  {arrivalTime}
                </div>
              </div>
              <div className="row-item">
                <div className="row-item__header">В пути</div>
                <div className="row-item__body">
                  {travelHours}
                  ч
                  {' '}
                  {travelMinutes}
                  м
                </div>
              </div>
              <div className="row-item">
                <div className="row-item__header">{`${segment.stops.length} пересадок`}</div>
                <div className="row-item__body">{!segment.stops.length ? '-' : segment.stops.reduce((acc, stop) => (!acc ? stop : `${acc}, ${stop}`), '')}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ticket;
