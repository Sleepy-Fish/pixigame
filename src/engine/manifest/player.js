class Player extends require('./entity'){
    constructor(m, texture, x, y) {
        super(m, texture, undefined, {x,y}, undefined );

        this.setKeyAction(32,"press",()=>{
            this.setState('start_run');
            this.delay(this._frames_in_cycle, ()=>{
                this.setState('run');
            })
        });
        
        this.setKeyAction(32,"release",()=>{
            this.setState('stop_run');
            this.delay(this._frames_in_cycle, ()=>{
                this.setState('idle');
            })
        });

        this.setKeyAction(87,"press",()=>{
            this.setState('idle_throw');
            this.delay(this._frames_in_cycle*2, ()=>{
                this.setState('idle');
            })
        });
    }
}

module.exports = (...args)=>{
    //do arguements control here
    return new Player(...args);
}
