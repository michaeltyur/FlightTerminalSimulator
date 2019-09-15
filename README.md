# FlightTerminalSimulator
**Asp.net core, signalR based project + angular clients + adaptive mobile design**<br /><br />
**Live server link:  http://live-project.space**<br />

**--Desktop**
![alt text](https://github.com/michaeltyur/FlightTerminalSimulator/blob/master/fly_generator.PNG)
![alt text](https://github.com/michaeltyur/FlightTerminalSimulator/blob/master/terminal.PNG)<br /><br />
**--Mobile**<br />
![alt text](https://github.com/michaeltyur/FlightTerminalSimulator/blob/master/ganerator-mobile.PNG)
![alt text](https://github.com/michaeltyur/FlightTerminalSimulator/blob/master/terminal-mobile1.PNG)<br />
![alt text](https://github.com/michaeltyur/FlightTerminalSimulator/blob/master/terminal-mobile2.PNG)<br /><br />

The purpose of the application: airport simulation.
1)	Clients :
    a) Flights generator (client) – ui for outgoing flights, based on angular
    b) Flights receiver (client) – ui for outgoing flights, based on angular
2)	Server – director of the connection between parts, based on Asp.net core
3)	Dal – logic of airport simulation.
4)	Models – entities of project instances
5)	TerminalDb - creates and performs recording whit local sql data base

**Flights generator:** allows you to start the generation of flights, stop it and change the intensity of generation.<br /> 
**Flights receiver:** displays information of the terminal in all its parts and in the air.<br /> 
Allows you to see the number of flights in each part of the terminal.<br /> 
Allows you to get detailed information about each flight by clicking on the object of interest.<br /> 
**Dal:** main idea of simulation - that each flight is performed by a **separate task**, which allows for multitasking, depending on the flight, the task gets priority.<br /> 
Flights are stored in thread-safe collection that allows you to perform safe manipulations of reading and writing in multi-thread mode.<br /> 
The terminal is divided into sections, the time spent on each depends on the following factors: speed, length of section, number of passengers.<br /> 
In some areas, by condition, there may be a limited number of aircraft, in the project it is implemented by the SemaphoreSlim Class.<br /> **TerminalDb:** Manages the work with the database. Сreates a database, writes data and deletes it.<br />

### How to run project
Requirements: Visual Studio or IIS installed.<br />
In Visual Studio – select FlightControl.Core, press IIS Express button.<br />
Clients - open with visual studio code (recommend) following folders:<br />
 **angular-client** (flights receiver) and<br /> 
 **fly-generator** (flights generator), go to terminal<br /> 
Enter: ctrl+`<br />
In terminal enter: *ng serve –o*<br />
Flights generator: for start generation press Start button.<br />
For stop press Stop button.<br />
For change generation interval select the required interval and press Set timer button (min 2 - max 10 second).<br />
In case of loss of connection with the server, the application tries to reconnect
