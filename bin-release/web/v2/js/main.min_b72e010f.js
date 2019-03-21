var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(r,a){function n(t){try{l(o.next(t))}catch(e){a(e)}}function s(t){try{l(o["throw"](t))}catch(e){a(e)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(n,s)}l((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return o([t,e])}}function o(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[0,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(n=l.trys,!(n=n.length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(6===i[0]&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(o){i=[6,o],a=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,a,n,s,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},GameObject=function(){function t(){this.shape=null,this.destroyFlag=!1,t.objects.push(this)}return t.initial=function(e){t.objects=[],t.display=e},t.update=function(){t.objects.forEach(function(t){return t.updateContent()}),t.objects=t.objects.filter(function(t){return t.destroyFlag&&t["delete"](),!t.destroyFlag}),t.transit&&(t.allDestroy(),t.transit(),t.transit=null)},t.allDestroy=function(){t.objects=t.objects.filter(function(t){return t.destroy(),t["delete"](),!1})},t.prototype.destroy=function(){this.destroyFlag=!0},t.prototype.addDestroyMethod=function(){},t.prototype["delete"]=function(){this.addDestroyMethod(),this.shape&&(t.display.removeChild(this.shape),this.shape=null)},t.objects=[],t}();__reflect(GameObject.prototype,"GameObject");var PhysicsObject=function(t){function e(){var e=t.call(this)||this;return e.body=null,e.bodyShape=null,e}return __extends(e,t),e.prototype.addDestroyMethod=function(){CreateWorld.world.removeBody(this.body)},e.world=null,e}(GameObject);__reflect(PhysicsObject.prototype,"PhysicsObject");var GameOver=function(t){function e(){var i=t.call(this)||this;return i.textGameOver=null,i.textScore=null,i.textNext=null,i.textColor=0,i.nextGameFlag=!1,i.nextGameCount=0,i.alphaIncreaseFlag=!0,e.I=i,i.textColor=Util.color(0,0,0),i.textGameOver=Util.myText(Game.width/2,Game.height/2-70,"TIME IS UP",120,.8,i.textColor,!0),i.textGameOver.anchorOffsetX=i.textGameOver.width/2,i.textGameOver.anchorOffsetY=i.textGameOver.height/2,GameObject.display.addChild(i.textGameOver),i.textScore=Util.myText(Game.width/2,Game.height/2+70,"SCORE : "+Score.I.score,120,.8,i.textColor,!0),i.textScore.anchorOffsetX=i.textScore.width/2,i.textScore.anchorOffsetY=i.textScore.height/2,GameObject.display.addChild(i.textScore),i.textNext=Util.myText(Game.width/2,Game.height/2+180,"Go to the Next Game",80,.8,i.textColor,!0),i.textNext.anchorOffsetX=i.textNext.width/2,i.textNext.anchorOffsetY=i.textNext.height/2,i.textNext.alpha=0,GameObject.display.addChild(i.textNext),Score.I.score>=Score.I.bestScore&&window.localStorage.setItem("bestScore_Select_the_Different_color",Score.I.score.toFixed()),i}return __extends(e,t),e.prototype.addDestroyMethod=function(){GameObject.display.removeChild(this.textGameOver),this.textGameOver=null,GameObject.display.removeChild(this.textScore),this.textScore=null},e.prototype.updateContent=function(){GameObject.display.addChild(this.textGameOver),GameObject.display.addChild(this.textScore),this.gameOver(),this.nextGameFlag&&(this.alphaIncreaseFlag=Effect.flashing(this.textNext,.04,this.alphaIncreaseFlag))},e.prototype.tap=function(t){GameObject.transit=Game.init,this.destroy()},e.prototype.gameOver=function(){var t=this;0==Time.I.time&&0==CreateStage.I.gameOverFlag&&(CreateStage.I.gameOverFlag=!0),1==CreateStage.I.gameOverFlag&&0==this.nextGameFlag&&(this.nextGameCount+=1/60),this.nextGameCount>=1&&0==this.nextGameFlag&&(this.nextGameFlag=!0,GameObject.display.once(egret.TouchEvent.TOUCH_TAP,function(e){return t.tap(e)},this))},e.I=null,e}(GameObject);__reflect(GameOver.prototype,"GameOver");var Box=function(t){function e(e,i,o,r,a){var n=t.call(this)||this;return n.x=e,n.y=i,n.width=o,n.height=r,n.color=a,n.setShape(e,i,o,r,a),n}return __extends(e,t),e.prototype.setShape=function(t,e,i,o,r){this.shape&&GameObject.display.removeChild(this.shape),this.shape=new egret.Shape,this.shape.x=t,this.shape.y=e,this.shape.graphics.beginFill(r),this.shape.graphics.drawRect(0,0,i,o),this.shape.graphics.endFill(),this.shape.touchEnabled=!0,GameObject.display.addChild(this.shape)},e}(GameObject);__reflect(Box.prototype,"Box");var PhysicsBox=function(t){function e(e,i,o,r,a){var n=t.call(this)||this;return n.x=e,n.y=i,n.width=o,n.height=r,n.color=a,n.setShape(n.width,n.height),n}return __extends(e,t),e.prototype.setBody=function(t,e,i,o){this.body=new p2.Body({mass:1,position:[t,e],type:p2.Body.STATIC}),this.bodyShape=new p2.Box({width:i,height:o}),this.body.addShape(this.bodyShape),CreateWorld.world.addBody(this.body)},e.prototype.setShape=function(t,e){this.shape&&GameObject.display.removeChild(this.shape),this.shape=new egret.Shape,this.shape.anchorOffsetX+=t/2,this.shape.anchorOffsetY+=e/2,this.shape.x=this.body.position[0],this.shape.y=this.body.position[1],this.shape.graphics.beginFill(this.color),this.shape.graphics.drawRect(0,0,t,e),this.shape.graphics.endFill(),GameObject.display.addChild(this.shape)},e}(PhysicsObject);__reflect(PhysicsBox.prototype,"PhysicsBox");var MyBox=function(t){function e(i,o,r,a,n){var s=t.call(this,i,o,r,a,n)||this;return s.correctFlag=!1,s.animationFlag=!1,s.animationStopPosY=0,s.correctTextField=null,s.comboTextField=null,s.textColor=null,e.myBox.push(s),s.textColor=Util.color(0,255,0),s.correctTextField=Util.myText(i,o,"",100,.5,s.textColor,!0),s.correctTextField.x+=r/2,s.correctTextField.y+=a/2,s.correctTextField.anchorOffsetX=s.correctTextField.width/2,s.correctTextField.anchorOffsetY=s.correctTextField.height/2,s.correctTextField.alpha=0,GameObject.display.addChild(s.correctTextField),s.comboTextField=Util.myText(i,o,"",100,.5,s.textColor,!0),s.comboTextField.x+=r/2,s.comboTextField.y+=a/2+50,s.comboTextField.anchorOffsetX=s.comboTextField.width/2,s.comboTextField.anchorOffsetY=s.comboTextField.height/2,s.comboTextField.alpha=0,GameObject.display.addChild(s.comboTextField),s.animationStopPosY=s.correctTextField.y-40,s.shape.once(egret.TouchEvent.TOUCH_BEGIN,s.touch,s),s}return __extends(e,t),e.prototype.touch=function(t){0==CreateStage.I.startFlag?1==this.correctFlag&&(e.myBox.forEach(function(t){t.shape=null}),CreateStage.box=[],CreateStage.I.arrangePanel(),Discription.I.countFlag=!0):1==CreateStage.I.startFlag&&0==CreateStage.I.gameOverFlag&&(1==this.correctFlag?(Score.I.addScore(),this.correctTextField.text="Correct!!",Score.I.combo>0?this.comboTextField.text="Combo :"+Score.I.combo.toString():this.comboTextField.text="",CreateStage.lightAndDark>15&&(CreateStage.lightAndDark-=1),e.myBox.forEach(function(t){t.shape=null}),CreateStage.box=[],CreateStage.I.arrangePanel(),GameObject.display.addChild(this.correctTextField),GameObject.display.addChild(this.comboTextField)):(this.correctTextField.text="Miss...",Score.I.comboFlag=!1,Score.I.combo=0,CreateStage.lightAndDark=50),this.correctTextField.anchorOffsetX=this.correctTextField.width/2,this.correctTextField.anchorOffsetY=this.correctTextField.height/2,this.comboTextField.anchorOffsetX=this.comboTextField.width/2,this.comboTextField.anchorOffsetY=this.comboTextField.height/2,this.animationFlag=!0)},e.prototype.animation=function(){1==this.animationFlag&&(this.correctTextField.y>this.animationStopPosY?(this.correctTextField.y-=2,this.comboTextField.y-=2,this.correctTextField.alpha<1&&(this.correctTextField.alpha+=.1,this.comboTextField.alpha+=.1)):(this.correctTextField.y-=2,this.comboTextField.y-=2,this.correctTextField.alpha>0?(this.correctTextField.alpha-=.1,this.comboTextField.alpha-=.1):(this.correctTextField.alpha=0,this.comboTextField.alpha=0,this.animationFlag=!1)))},e.prototype.changeColor=function(t){this.shape.graphics.beginFill(t),this.shape.graphics.drawRect(0,0,this.width,this.height),this.shape.graphics.endFill(),this.shape.touchEnabled=!0,GameObject.display.addChild(this.shape)},e.prototype.updateContent=function(){this.animation()},e.myBox=[],e}(Box);__reflect(MyBox.prototype,"MyBox");var CreateStage=function(t){function e(){var i=t.call(this)||this;return i.boxColor=null,i.startFlag=!1,i.gameOverFlag=!1,e.I=i,i.arrangePanel(),i}return __extends(e,t),e.prototype.arrangePanel=function(){var t=Game.width/10,i=Game.height/4,o=Util.randomInt(0,3),r=Util.randomInt(0,2),a=Util.randomInt(50,200),n=Util.randomInt(50,200),s=Util.randomInt(50,200);MyBox.boxColor=Util.color(a,n,s);var l=Util.randomInt(0,1);l=0==l?1:-1;for(var h=Util.color(a+e.lightAndDark*l,n+e.lightAndDark*l,s+e.lightAndDark*l),c=0;4>c;c++){e.box[c]=[];for(var d=0;3>d;d++)c==o&&d==r?(e.box[c][d]=new MyBox(200*d+t,200*c+i,180,180,h),e.box[c][d].correctFlag=!0):e.box[c][d]=new MyBox(200*d+t,200*c+i,180,180,MyBox.boxColor)}},e.prototype.addDestroyMethod=function(){e.I.startFlag=!1,e.lightAndDark=50},e.prototype.updateContent=function(){},e.I=null,e.box=[],e.lightAndDark=50,e}(GameObject);__reflect(CreateStage.prototype,"CreateStage");var Discription=function(t){function e(){var i=t.call(this)||this;i.text=[],i.countFlag=!1,i.count=0,i.alphaIncreaseFlag=[!0,!0],i.textColor=Util.color(0,0,0);var o=170;return e.I=i,i.text[0]=Util.myText(Game.width/2,o,"１つだけ違う色のパネルを",100,.5,i.textColor,!0),i.text[0].anchorOffsetX=i.text[0].width/2,i.text[0].anchorOffsetY=i.text[0].height/2,GameObject.display.addChild(i.text[0]),i.text[1]=Util.myText(Game.width/2,o+70,"タップしてスタート",100,.5,i.textColor,!0),i.text[1].anchorOffsetX=i.text[1].width/2,i.text[1].anchorOffsetY=i.text[1].height/2,GameObject.display.addChild(i.text[1]),i.text[2]=Util.myText(Game.width/2,Game.height/2,"Start",200,.5,i.textColor,!0),i.text[2].anchorOffsetX=i.text[2].width/2,i.text[2].anchorOffsetY=i.text[2].height/2,i.text[2].alpha=0,GameObject.display.addChild(i.text[2]),i}return __extends(e,t),e.prototype.addDestroyMethod=function(){GameObject.display.removeChild(this.text[0]),GameObject.display.removeChild(this.text[1]),GameObject.display.removeChild(this.text[2]),this.text=null},e.prototype.updateContent=function(){1==this.countFlag&&this.animation(),CreateStage.I.startFlag?(this.text[0].alpha=0,this.text[1].alpha=0):(this.alphaIncreaseFlag[0]=Effect.flashing(this.text[0],.02,this.alphaIncreaseFlag[0]),this.alphaIncreaseFlag[1]=Effect.flashing(this.text[1],.02,this.alphaIncreaseFlag[1]))},e.prototype.animation=function(){CreateStage.I.startFlag=!0,this.text[2].alpha<1&&(this.text[2].alpha+=.2),this.text[2].alpha>=1&&(this.text[2].alpha=1,this.count+=1,this.count>=50&&this.destroy()),GameObject.display.addChild(this.text[2])},e.I=null,e}(GameObject);__reflect(Discription.prototype,"Discription");var Effect=function(){function t(){}return t.flashing=function(t,e,i){return i?(t.alpha+=e,t.alpha>=1&&(t.alpha=1,i=!1)):i||(t.alpha-=e,t.alpha<0&&(t.alpha=0,i=!0)),i},t.prototype.updateContent=function(){},t}();__reflect(Effect.prototype,"Effect");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function o(o){e.call(i,o,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?o(r):RES.getResAsync(t,o,this)}else RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Ball=function(t){function e(e,i,o){var r=t.call(this)||this;return r.radius=null,r.setShape(e,i,o),r}return __extends(e,t),e.prototype.setShape=function(t,e,i){this.shape&&GameObject.display.removeChild(this.shape),this.shape=new egret.Shape,this.shape.x=t,this.shape.y=e,this.shape.graphics.beginFill(16711680),this.shape.graphics.drawCircle(0,0,i),this.shape.graphics.endFill(),GameObject.display.addChild(this.shape)},e.prototype.updateContent=function(){},e.I=null,e}(GameObject);__reflect(Ball.prototype,"Ball");var PhysicsBall=function(t){function e(e,i,o){var r=t.call(this)||this;return r.radius=null,r.setBody(e,i,o),r.setShape(e,i,o),r}return __extends(e,t),e.prototype.setBody=function(t,e,i){this.body=new p2.Body({mass:1,position:[t,e]}),this.bodyShape=new p2.Circle({radius:i,fixedRotation:!0}),this.body.addShape(this.bodyShape),CreateWorld.world.addBody(this.body)},e.prototype.setShape=function(t,e,i){this.shape&&GameObject.display.removeChild(this.shape),this.shape=new egret.Shape,this.shape.x=t,this.shape.y=e,this.shape.graphics.beginFill(16711680),this.shape.graphics.drawCircle(0,0,i),this.shape.graphics.endFill(),GameObject.display.addChild(this.shape)},e}(PhysicsObject);__reflect(PhysicsBall.prototype,"PhysicsBall");var MyBall=function(t){function e(e,i,o){var r=t.call(this,e,i,o)||this;return Ball.I=r,r}return __extends(e,t),e}(Ball);__reflect(MyBall.prototype,"MyBall");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.once(egret.Event.ADDED_TO_STAGE,e.addToStage,e),e}return __extends(e,t),e.prototype.addToStage=function(){GameObject.initial(this.stage),Util.init(this),Game.init(),egret.startTick(this.tickLoop,this)},e.prototype.tickLoop=function(t){return GameObject.update(),!1},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Game=function(){function t(){}return t.init=function(){this.height=egret.MainContext.instance.stage.stageHeight,this.width=egret.MainContext.instance.stage.stageWidth,new Background,new CreateStage,new Score,new Time,new Discription},t}();__reflect(Game.prototype,"Game");var Background=function(t){function e(){var e=t.call(this)||this;return e.shape=new egret.Shape,e.shape.graphics.beginFill(Util.color(255,255,255)),e.shape.graphics.drawRect(0,0,Game.width,Game.height),e.shape.graphics.endFill(),GameObject.display.addChild(e.shape),e}return __extends(e,t),e.prototype.updateContent=function(){},e}(GameObject);__reflect(Background.prototype,"Background");var CreateWorld=function(t){function e(){var i=t.call(this)||this;return e.I=i,e.world.on("beginContact",i.collision,i),i}return __extends(e,t),e.prototype.createWorld=function(){e.world=new p2.World,e.world.sleepMode=p2.World.BODY_SLEEPING,e.world.gravity=[0,9.8]},e.worldBegin=function(t){return e.world.step(1/60,t/1e3,10),!1},e.prototype.collision=function(t){},e.prototype.addDestroyMethod=function(){e.world.clear()},e.prototype.updateContent=function(){},e.I=null,e}(PhysicsObject);__reflect(CreateWorld.prototype,"CreateWorld");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Score=function(t){function e(){var i=t.call(this)||this;i.score=0,i.combo=0,i.comboFlag=!1,i.bestScore=0,i.text=null,i.textBest=null,i.textColor=Util.color(0,0,0),e.I=i,i.score=0,i.text=Util.myText(0,0,"SCORE : 0",100,.5,i.textColor,!0),GameObject.display.addChild(i.text);var o=window.localStorage.getItem("bestScore_Select_the_Different_color");return null==o&&(o="0",window.localStorage.setItem("bestScore_Select_the_Different_color",o)),i.bestScore=parseInt(o),i.textBest=Util.myText(0,50,"BEST : "+o,100,.5,i.textColor,!0),GameObject.display.addChild(i.textBest),i}return __extends(e,t),e.prototype.addDestroyMethod=function(){GameObject.display.removeChild(this.text),this.text=null,GameObject.display.removeChild(this.textBest),this.textBest=null,this.score=0,this.combo=0},e.prototype.updateContent=function(){this.text.text="SCORE : "+this.score.toFixed(),this.bestScore<this.score&&(this.bestScore=this.score,this.textBest.text="BEST : "+this.score.toFixed())},e.prototype.addScore=function(){1==CreateStage.I.startFlag&&(this.score+=1,this.comboFlag&&(this.score+=this.combo,this.combo++),this.comboFlag=!0)},e.I=null,e}(GameObject);__reflect(Score.prototype,"Score");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,o){function r(t){e.call(o,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(o))}var n=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(o,generateEUI2)},n)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var s=t.split("/");s.pop();var l=s.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(o,generateJSON.paths[t])},this):RES.getResByUrl(l,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(o,generateJSON.paths[t])},n)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Time=function(t){function e(){var i=t.call(this)||this;return i.time=60,i.text=null,i.textBest=null,i.textColor=Util.color(0,0,0),e.I=i,i.time=30,i.text=Util.myText(400,0,"Time : 30",100,.5,i.textColor,!0),GameObject.display.addChild(i.text),e.timer=new egret.Timer(1e3,0),0==e.timer.hasEventListener(egret.TimerEvent.TIMER)&&e.timer.addEventListener(egret.TimerEvent.TIMER,i.timePass,i),e.timer.start(),i}return __extends(e,t),e.prototype.addDestroyMethod=function(){GameObject.display.removeChild(this.text),this.text=null,e.timer.stop(),e.timer.removeEventListener(egret.TimerEvent.TIMER,this.timePass,this)},e.prototype.updateContent=function(){this.text.text="Time : "+this.time.toFixed()},e.prototype.timePass=function(){1==CreateStage.I.startFlag&&(this.time>0&&(this.time-=1),0==this.time&&0==CreateStage.I.gameOverFlag&&(this.time=0,new GameOver))},e.I=null,e.timer=null,e}(GameObject);__reflect(Time.prototype,"Time");var Util=function(){function t(){}return t.init=function(t){this.height=t.stage.stageHeight,this.width=t.stage.stageWidth,this.ui=t},t.random=function(t,e){return t+Math.random()*(e-t)},t.randomInt=function(t,e){return Math.floor(t+Math.random()*(e+.999-t))},t.clamp=function(t,e,i){return e>t&&(t=e),t>i&&(t=i),t},t.color=function(t,e,i){var o=t.toFixed(0),r=e.toFixed(0),a=i.toFixed(0);o=t.toString(16),r=e.toString(16),a=i.toString(16),o=("00"+o).slice(-2),r=("00"+r).slice(-2),a=("00"+a).slice(-2);var n=parseInt("0x"+o+r+a,16);return n},t.myText=function(t,e,i,o,r,a,n){var s=new egret.TextField;return s.x=t,s.y=e,s.text=i,s.bold=n,s.size=o,s.scaleX=r,s.scaleY=r,s.textColor=a,s},t.myStrokeText=function(t,e,i,o,r,a,n,s,l){var h=new egret.TextField;return h.x=t,h.y=e,h.scaleX=r,h.scaleY=r,h.textFlow=[{text:i,style:{textColor:a,size:o,fontFamily:n,strokeColor:s,stroke:l}}],h},t}();__reflect(Util.prototype,"Util");