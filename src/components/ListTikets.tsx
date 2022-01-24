import React from 'react';
import { Ticket } from '../types/types';

interface Props {
  sortTickets: () => void,
  currTickets: Array<Ticket>,
}

const getTime = (ms: number) => {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

function ListTickets({
  sortTickets, currTickets,
}: Props) {
  return (
    <div>
      {currTickets.map((ticket) => (
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
              const travelHours = Math.ceil(segment.duration / 60);
              const travelMinutes = segment.duration % 60;
              const durationMs = segment.duration * 60000;
              const departureMs = Date.parse(segment.date);
              const arrivalTime = getTime(departureMs + durationMs);
              const departureTime = getTime(departureMs);
              return (
                <div key={ind} className="card-body-row">
                  <div className="row-item">
                    <div className="row-item-header">
                      {segment.origin}
                      {' '}
                      -
                      {' '}
                      {segment.destination}
                    </div>
                    <div className="row-item-body">
                      {departureTime}
                      {' '}
                      -
                      {' '}
                      {arrivalTime}
                    </div>
                  </div>
                  <div className="row-item">
                    <div className="row-item-header">В пути</div>
                    <div className="row-item-body">
                      {travelHours}
                      ч
                      {' '}
                      {travelMinutes}
                      м
                    </div>
                  </div>
                  <div className="row-item">
                    <div className="row-item-header">{`${segment.stops.length} пересадок`}</div>
                    <div className="row-item-body">{!segment.stops.length ? '-' : segment.stops.reduce((acc, stop) => (!acc ? stop : `${acc}, ${stop}`), '')}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTickets;
