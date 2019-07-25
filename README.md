# Client
- [ ] Use a generated sine wave as one of the audio sources.  
- [ ] Have feature parity with WPF app
- [ ] Save noise intervals in one of the browser storage options (cookie, IndexDB, etc.)
- ?? short sounds should be repeatable x times with a random number of seconds between repeats.
Needs server API:  
- [ ] send current status to server / display clients status
- [ ] manage audio files in library (upload/delete)
- [ ] Send logging information to server

# ControlCenter: a REST API (.net core)
- manage audio library (list/add/delete audio file)
- receives logging messages from client
- returns logging messages to client
- receives/sends client status (offline-last seen, stopped, playing: bla.mp3)
- sends stop command to client (SignalR?)