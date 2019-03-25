# ControlCenter: a REST API (.net core)
- manage audio library (list/add/delete audio file)
- receives logging messages from client
- returns logging messages to client
- receives client status (eg. Running: playing: bla.mp3)
- sends stop command to client (SignalR?)

## ControlCenter dashboard/config
- manage audio files (list/add/delete)
- display all running clients status
- stop/start clients

# Client
- display list of available audio files
- play audio using howler.js?
- send logging information to server
- port all the features from WPF app
