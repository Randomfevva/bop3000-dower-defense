import { ctx } from "./game.js";
import { cellSize } from "./grid.js";
import { gridRectColission, mouse } from "./eventhandler.js";
import { enemies } from "../entities/enemies/Enemy.js";

/**
 * Tower Class
 *               

 * @description Blueprint for each cellvalue in the grid. 
 * Author:    Anarox
 * Created:   25.01.2025
 **/
export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw() {
        const enemyWithinRect = enemies.filter(enemy => gridRectColission(this, enemy)).length > 0;

        if (mouse.x && mouse.y && gridRectColission(this, mouse)) {
            ctx.strokeStyle = enemyWithinRect ? 'gray' : 'black';
            ctx.lineWidth = 1;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}