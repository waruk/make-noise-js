# First
Have feature parity with WPF app

# ControlCenter: a REST API (.net core)
- manage audio library (list/add/delete audio file)
- receives logging messages from client
- returns logging messages to client
- receives client status (eg. Running: playing: bla.mp3)
- sends stop command to client (SignalR?)

# Client
- display list of available audio files
- play audio using howler.js?
- send logging information to server
- port all the features from WPF app
- Configuration section
  - manage audio files (upload/delete)
  - define noise intervals for each file
  - display the status of all running clients (option to start/stop them)
