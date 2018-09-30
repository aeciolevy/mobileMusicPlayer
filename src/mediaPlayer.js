import { Howl } from 'howler';

class MediaPlayer {
    constructor() {
        this.song = null;
    }
    
    async playSong(url) {
        try {
            const song = new Howl({
                src: url,
            });
            song.play();
            this.song = song;
        } catch (err) {
            console.log(err);
        }
    }

    getSongReference() {
        return this.song;
    }

    getProgress() {
        return Math.floor(this.song.seek() / this.song.duration());
    }
}

export default MediaPlayer;
