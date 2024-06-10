class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');

        } else if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            this.alarmCollection.push({
                time,
                callback,
                canCall: true});

        } else {
            this.alarmCollection.push({
            time,
            callback,
            canCall: true});
        }
    }


    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    start() {
        // останавливаемся, если будильник уже запущен
        if (this.intervalId) {
            return;
        }

        // запускаем новый интервал
        this.intervalId = setInterval( () => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000); // запускаем каждую секунду
    }

    stop() {
        clearInterval(this.intervalId); // остановить интервал
        this.intervalId = null; // сбросить значение свойства
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {alarm.canCall = true});
    }
    
    clearAlarms() {
        this.stop(); // останавливаем интервал
        this.alarmCollection = []; // удаляем все звонки
    }
}