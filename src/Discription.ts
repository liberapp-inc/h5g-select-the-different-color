class Discription extends GameObject{

    static I:Discription = null;   // singleton instance
    text:egret.TextField[] = [];
    textColor : number;
    countFlag : boolean = false;

    count:number = 0;

    constructor() {
        super();
        this.textColor = Util.color(0,0,0);

        const h :number = 170;
        Discription.I = this;
        this.text[0] = Util.myText(Game.width/2, h, "１つだけ違う色のパネルを", 100, 0.5, this.textColor, true);
        this.text[0].anchorOffsetX = this.text[0].width/2;
        this.text[0].anchorOffsetY = this.text[0].height/2;
        GameObject.display.addChild( this.text[0] );

        this.text[1] = Util.myText(Game.width/2, h + 70, "タップしてスタート", 100, 0.5, this.textColor, true);
        this.text[1].anchorOffsetX = this.text[1].width/2;
        this.text[1].anchorOffsetY = this.text[1].height/2;
        GameObject.display.addChild( this.text[1] );

        this.text[2] = Util.myText(Game.width/2, Game.height/2, "Start", 200, 0.5, this.textColor, true);
        this.text[2].anchorOffsetX = this.text[2].width/2;
        this.text[2].anchorOffsetY = this.text[2].height/2;
        this.text[2].alpha =0;
        GameObject.display.addChild( this.text[2] );


    }
    
    addDestroyMethod() {

        GameObject.display.removeChild( this.text[0] );
        GameObject.display.removeChild( this.text[1] );
        GameObject.display.removeChild( this.text[2] );
        this.text = null;
        
        
    }

    updateContent() {
        if(this.countFlag == true)
        this.animation();
    }

    animation(){
        if(this.text[2].alpha < 1){
            this.text[2].alpha += 0.2;
        }
        if(this.text[2].alpha >= 1){
            this.text[2].alpha = 1;
            this.count += 1;
            if(this.count >=50){
                //gameスタート
                
                CreateStage.startFlag = true;
                this.destroy();

            }
        }
        GameObject.display.addChild( this.text[2] );
    }


}