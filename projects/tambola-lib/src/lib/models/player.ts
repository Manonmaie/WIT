import {Ticket} from '../models/ticket';

export class Player {
    Id: number;
    Name: string;
    NoOfTickets: number = 1;
    Tickets: Array<Ticket> = [];  
}
