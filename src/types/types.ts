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
