export interface TicketSegment {
    origin: string,
    stops: Array<string>,
    duration: number,
    date: string,
    destination: string
}

export interface Ticket {
    price: number,
    id: number,
    carrier: string,
    segments: Array<TicketSegment>
}

export interface Props {
    sortTickets?: (arg1: Array<Ticket>) => Array<Ticket>,
    tickets?: Array<Ticket>,
    setCountCurrTickets?: Function,
    countCurrTickets?: number
    currentTickets?: Array<Ticket>,
    setCurrentTickets?: Function,
}

export interface ButtonProps {
    setCountCurrTickets: Function,
    countCurrTickets: number
}

export interface PropsTicketsContainer {
    tickets: Array<Ticket>,
    currentTickets: Array<Ticket>,
    setCurrentTickets: Function,
}

export interface PropsSortTabs {
    currentTickets: Array<Ticket>,
    setCurrentTickets: Function,
}
