
import { _decorator, CCInteger, CCString, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Game
 * DateTime = Mon Aug 07 2023 18:50:39 GMT+0800 (中国标准时间)
 * Author = mrwhen
 * FileBasename = Game.ts
 * FileBasenameNoExtension = Game
 * URL = db://assets/Game.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Game')
export class Game extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    job: string = '法师';
    @property({type: CCInteger})
    hp: number = 10;

    @property({type: Label})
    lable: Label = null; // 绑定lable节点

    start () {
        // console.log(this.job)
        // console.log(this.hp)
        this.lable.string = 'Game Start'; // 修改label内容
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
