class CounterJS {
    constructor(element=undefined, config=undefined) {
        this.timer = 10;
        this.config = Object.assign(this.getDefaults(), config)
        this.element = element;
        this.init();
    }
    verifyElement() {
        if (!(this.element instanceof Node)) {
            try {
                this.element = document.querySelector(this.element);
            }
            catch (Exception) {
                throw ("Can't initialize CounterJS because " + this.element + " is not a Node.");
            }
        }
    }
    init() {
        this.verifyElement();
        this.startCountdown();
    }
    updateClock(t) {
        this.element.innerHTML = t--;
        let rate = this.element.dataset.counterRate || this.config.rate;
        if (t >= 0) {
            setTimeout(() => { this.updateClock(t--) }, rate);
        }
        else {
            this.config.complete();
            return;
        }
    }
    startCountdown (){
        let t = this.element.dataset.counterStart || this.config.start;
        this.config.delay = this.element.dataset.counterDelay ? this.element.dataset.counterDelay : this.config.delay;
        if (this.config.delay !== false) { 
            setTimeout(() => { this.updateClock(t) }, 5000);
            return false;
        }
        else {
            this.updateClock(t) 
        }  
    }
    getDefaults() {
        return {
            rate: 1000,
            repeat: 1,
            auto: true,
            start: 12,
            delay: false,
            allowNegative: false,
            complete: () => { console.log("Is complete"); },
            start: () => { console.log("Is complete"); },
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
