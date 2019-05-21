# First
Have feature parity with WPF app

# ControlCenter: a REST API (.net core)
- manage audio library (list/add/delete audio file)
- receives logging messages from client
- returns logging messages to client
- receives client status (eg. Running: playing: bla.mp3)
- sends stop command to client (SignalR?)

# Client
- play audio using howler.js?
- send logging information to server
- ?? short sounds should be repeatable x times with a random number of seconds between repeats.
- Configuration section
  - manage audio files (upload/delete)
  - define noise intervals
  - display the status of all running clients (option to start/stop them)



