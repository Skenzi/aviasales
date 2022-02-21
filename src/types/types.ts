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
    setCountCurrTickets?: Function,
    countCurrTickets?: number,
    currentTickets?: Array<PropsTicket>,
    setCurrentTickets?: Function,
}

export interface PropsButton {
    setCountCurrTickets: Function,
    countCurrTickets: number,
    countRestTickets?: number,
}

export interface PropsTicketsContainer {
    tickets: Array<PropsTicket>,
    currentTickets: Array<PropsTicket>,
    setCurrentTickets: Function,
    setCurrSort: Function,
    statusTickets: string,
}

export interface PropsListTickets {
    statusTickets: string,
    visibleTickets: Array<PropsTicket>,
}

export interface PropsFilteringMenu {
    currSort: string,
    tickets: Array<PropsTicket>,
    setCurrentTickets: Function,
}

export interface PropsSortTabs {
    currentTickets: Array<PropsTicket>,
    setCurrSort: Function,
    setCurrentTickets: Function,
}
