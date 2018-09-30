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
        return (this.song.seek() / this.song.duration()) * 100;
    }
}

export default MediaPlayer;
