const refs = {
  clockFaceEl: document.querySelector('.js-clockface'),
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
};

const stopwatch = {
  initTime: 0,
  intervalId: 123,
  isActive: false,
  start() {
    if (this.isActive === true) {
      return;
    }
    this.initTime = Date.now(); // 102400603492423
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
    this.isActive = true;
  },
  stop() {
    if (this.isActive === false) {
      return;
    }
    this.isActive = false;
    clearInterval(this.intervalId);
  },
  render(data) {
    const { seconds, minutes, hours } = this.parseData(data);
    refs.clockFaceEl.textContent = `${hours}:${minutes}:${seconds}`;
  },
  tick() {
    const diff = Date.now() - this.initTime;
    this.render(diff);
  },
  parseData(time) {
    // 30000; 30
    // 30000; 1

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 100);
    return { seconds, minutes, hours };
  },
};

refs.startBtn.addEventListener('click', event => {
  stopwatch.start();
});
refs.stopBtn.addEventListener('click', event => {
  stopwatch.stop();
});
