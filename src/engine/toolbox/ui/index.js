class UI {
    constructor(e) {
        this._engine = e;
        this._components = [];
        this._font_options = {fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'};
        console.log(PIXI.loader.resources);
        this._default_textures = {
            modal: {
                background: PIXI.loader.resources['white'].texture,
                dragbar:{
                    plain: PIXI.loader.resources['blue'].texture,
                    hover: PIXI.loader.resources['light-blue'].texture,
                    click: PIXI.loader.resources['dark-blue'].texture,
                },
                minbutton:{
                    plain: PIXI.loader.resources['orange'].texture,
                    hover: PIXI.loader.resources['light-orange'].texture,
                    click: PIXI.loader.resources['dark-orange'].texture,
                },
                closebutton:{
                    plain: PIXI.loader.resources['red'].texture,
                    hover: PIXI.loader.resources['light-red'].texture,
                    click: PIXI.loader.resources['dark-red'].texture,
                }
            },
            button: {
                background:{
                    plain: PIXI.loader.resources['green'].texture,
                    hover: PIXI.loader.resources['light-green'].texture,
                    click: PIXI.loader.resources['dark-green'].texture,
                }
            },
            checkbox: {
                background:{
                    plain: PIXI.loader.resources['yellow'].texture,
                    hover: PIXI.loader.resources['light-yellow'].texture,
                    click: PIXI.loader.resources['dark-yellow'].texture,
                },
                mark: PIXI.loader.resources['dark-yellow'].texture
            }
        }
    }
    
    get FontOptions() {
        return this._font_options;
    }

    Label(...args){
        let p = require('./components/label')
        return new p(this, ...args);
    }

    TextBox(...args){
        let p = require('./components/textbox')
        return new p(this, ...args);
    }

    Modal(...args){
        let p = require('./components/modal');
        return new p(this, ...args);
    }

    Button(...args){
        let p = require('./components/button');
        return new p(this, ...args);
    }

    Checkbox(...args){
        let p = require('./components/checkbox');
        return new p(this, ...args);
    }

    add(component){
        let id = this._components.push(component)-1;
        component._id = id;
        this._engine._renderer._stage.addChild(component.Bounds);
    }

    remove(component){
        console.log(component);
        //this._components[component._id] = undefined;
        this._engine._renderer._stage.removeChild(component.Bounds);
    }

    tick(){
        for(let component of this._components){
            component.tick();
        }
    }
    
}

module.exports = (...args)=>{
    //do arguements control here
    return new UI(...args);
}

