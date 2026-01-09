class CountDown extends Phaser.Scene{
    scene
    timerEvent
    label
    constructor(scene, label) {
       super(scene);
       this.scene = scene;
        this.label = label;
    }

    start(callback, duration = 45000) {
        this.stop();
        this.duration = duration;
        this.timerEvent = this.scene.time.addEvent({
            delay: duration,
            callback: () => {
                this.label.text = '0';
                this.stop();

                if (callback) {
                    callback();
                }
            }
        })
    }

    stop() {
        if (this.timerEvent) {
            this.timerEvent.destroy();
            this.timerEvent = undefined;
        }
    }

    update() {
        if (!this.timerEvent || this.duration <= 0) {
            return;
        }

        // 1️⃣ get the elapsed time
        const elapsed = this.timerEvent.getElapsed();

        // 2️⃣ subtract from total duration
        const remaining = this.duration - elapsed;

        // 3️⃣ convert from milliseconds to seconds
        const seconds = remaining / 1000;

        // 4️⃣ change label to show new value
        this.label.text = seconds.toFixed(2);
    }

}