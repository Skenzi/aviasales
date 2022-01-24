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
    duration: number,
    carrier: string,
    segments: Array<TicketSegment>
}

export interface Props {
    sortTickets?: (arg1: Array<Ticket>) => Array<Ticket>,
    sortedTickets?: Array<Ticket>,
    tickets?: Array<Ticket>
    setCountCurrTickets?: Function,
    countCurrTickets?: number
}
