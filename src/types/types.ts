import React from 'react';

export interface TicketSegment {
    origin: string,
    stops: Array<string>,
    duration: number,
    date: string,
    destination: string
}

export interface PropsTicket {
    price: number,
    id: number,
    carrier: string,
    segments: Array<TicketSegment>
}

export interface Props {
    tickets?: Array<PropsTicket>,
    setCountCurrTickets?: React.Dispatch<React.SetStateAction<number>>,
    countCurrTickets?: number,
    currentTickets?: Array<PropsTicket>,
    setCurrentTickets?: React.Dispatch<React.SetStateAction<PropsTicket[]>>,
}

export interface PropsButton {
    setCountCurrTickets: React.Dispatch<React.SetStateAction<number>>,
    countCurrTickets: number,
    countRestTickets?: number,
}

export interface PropsTicketsContainer {
    currentTickets: Array<PropsTicket>,
    setCurrentTickets: React.Dispatch<React.SetStateAction<PropsTicket[]>>,
    setCurrSort: React.Dispatch<React.SetStateAction<string>>,
    statusTickets: string,
}

export interface PropsListTickets {
    statusTickets: string,
    visibleTickets: Array<PropsTicket>,
}

export interface PropsFilteringMenu {
    currSort: string,
    tickets: Array<PropsTicket>,
    setCurrentTickets: React.Dispatch<React.SetStateAction<PropsTicket[]>>,
}

export interface PropsSortTabs {
    currentTickets: Array<PropsTicket>,
    setCurrSort: React.Dispatch<React.SetStateAction<string>>,
    setCurrentTickets: React.Dispatch<React.SetStateAction<PropsTicket[]>>,
}
