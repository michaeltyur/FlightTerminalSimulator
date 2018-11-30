export class Flight{

    id:any;    
    nameOfСhiefPilot:string;
    from :string
    speed:number
    numberOfPass:number;
    fuel :number;
    image :string;
    planeTerminalState: PlaneTerminalState
    distanceToTerminal:number;
}
export enum PlaneTerminalState
{
    In_Air_1=1,
    In_Air_2,
    In_Air_3,
    Landing_4,
    Arrivals_Stock_5,
    Вisembarking_Boarding_Passengers_6,
    Вisembarking_Boarding_Passengers_7,
    Departurs_Stock_8,
    Takeoff_9,
    Non
}