class AudioPlayer {
    constructor (mediaElement) {
        this.mediaElement = mediaElement;
        this.isPlaying = false;
        this.mediaElement.addEventListener("ended", this.mediaPlayEnded.bind(this));
    }

    async play (audioFile) {
        if (!this.isPlaying)
        {
            try {
                await this.mediaElement.play();
                this.isPlaying = true;
                logInfo ("Player started.");
            } catch (err) {
                logInfo ("Can not play the file.");
            }
        }
    }

    stop () {
        this.mediaElement.pause();
        this.mediaElement.currentTime = 0;
        this.isPlaying = false;
        logInfo ("Player stopped.");
    }

    mediaPlayEnded () {
        this.isPlaying = false;
        logInfo("Playback ended.");
        //scheduleNextPlay();
    }
}