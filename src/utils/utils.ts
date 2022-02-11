import { Ticket } from '../types/types';

export const sortTickets = (tickets: Array<Ticket|any>): Array<Ticket> => {
  if (tickets.length < 2) {
    return tickets;
  }
  const middleValue = tickets[1];
  const less = [];
  const much = [];
  for (let i = 0; i < tickets.length; i += 1) {
    if (tickets[i].price > middleValue.price) {
      much.push(tickets[i]);
    } else if (tickets[i].price < middleValue.price) {
      less.push(tickets[i]);
    }
  }
  const left = sortTickets(less);
  const right = sortTickets(much);
  return [...left, middleValue, ...right];
};

export const sortTicketsTravelTime = (tickets: Array<Ticket|any>): Array<Ticket> => {
  if (tickets.length < 2) {
    return tickets;
  }
  const middleTicket = tickets[1];
  const middleDuration = middleTicket.segments[0].duration;
  const less = [];
  const much = [];
  for (let i = 0; i < tickets.length; i += 1) {
    const { duration } = tickets[i].segments[0];
    if (duration > middleDuration) {
      much.push(tickets[i]);
    } else if (duration < middleDuration) {
      less.push(tickets[i]);
    }
  }
  const left = sortTicketsTravelTime(less);
  const right = sortTicketsTravelTime(much);
  return [...left, middleTicket, ...right];
};

interface Test {
  [key: string]: Function,
  travelTimeSort: Function,
  moneySort: Function,
}

export const mappingSort: Test = {
  travelTimeSort: sortTicketsTravelTime,
  moneySort: sortTickets,
};
