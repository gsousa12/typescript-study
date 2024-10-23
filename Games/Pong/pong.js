// Variaveis Globais

var DIRECTION = {
    IDLE: 0, // Parado
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [5,5,3,3,2]
var colors = ['#A3D8FF','#4F6F52','#C65BCF','#9AC8CD','#DD5746']

// Bola

var Ball = {

    new: function (incrementedSpeed) {
        return {
            width: 18,
            height: 18,
            x: (canvas.width / 2) - 9,
            y: (canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 7
        };
    }
};
