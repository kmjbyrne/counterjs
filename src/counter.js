class CounterJS {
    constructor(element=undefined, config=undefined) {
        if (!(element instanceof Node)) {
            try {
                element = document.querySelector(element);
            }
            catch (Exception) {
                throw ("Can't initialize CounterJS because " + element + " is not a Node.");
            }
        }
        this.timer = 10;
        this.config = Object.assign(this.getDefaults(), config)
        this.config.rate = 1000;
        this.element = element;
        this.init();
    }
    init() {
        this.startCountdown(this.element);
    }
    updateClock(n, t) {
        n.innerHTML = t--;
        let rate = n.dataset.counterRate || this.config.rate;
        if (t >= 0) {
            setTimeout(() => { this.updateClock(n, t--) }, rate);
        }
        else {
            this.config.complete();
            return;
        }
    }
    startCountdown (n){
        let t = n.dataset.counterStart || this.config.start;
        this.updateClock(n, t)   
    }
    getDefaults() {
        return {
            rate: 1000,
            repeat: 1,
            auto: true,
            start: 12,
            allowNegative: false,
            complete: () => { console.log("Is complete"); }
        }
    }
    getRemainingTime(end) {
        return end--;
    }    
    getCounterElements() {
        return document.querySelectorAll("[data-counter-begin]");
    }
    static init(elements, config=undefined) {
        if (elements instanceof Node) {
            elements = [elements];
        }
        elements.forEach((n) => {
            let control = new CounterJS(n, config);
            control.startCountdown(n);
        });
    }    
}
if (typeof document !== "undefined") {
    window.CounterJS = CounterJS;
    window.CounterJS.init(document.querySelectorAll("[data-counter-start]"));
}
