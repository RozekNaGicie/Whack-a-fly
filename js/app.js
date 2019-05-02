const fly = document.querySelectorAll('.housefly');
const res = document.querySelector('.result');
// console.log(res)


class Flyhouse {
    constructor(loterry, flying, global1, global2) {
        this.lottery = loterry;
        this.flying = flying;
        this.global1 = global1
        this.global2 = global2
    }
    showTime() {
        this.loterry = Math.floor(Math.random() * 24);
        return this.loterry;
    }
    showMe() {
        this.flying = fly[this.loterry].classList.add('active');
        return this.flying;

    }
    hideMe() {
        this.flying = fly[this.loterry].classList.remove('active');
        // console.log(this.loterry);
    }
    interval() {
        this.global1 = setInterval(() => {
            this.showTime();
            this.showMe();
        }, 1000)
    }
    intervalHide() {
        this.global2 = setTimeout(() => {
            this.hideMe();
        }, 500)
    }

    gameTime() {
        clearInterval(this.global1);
        clearTimeout(this.global2)
    }


}
class Punch {
    constructor() {
        this.count = 0;
    }
    punchy() {
        fly.forEach((e, i, fly) => {
            if (e.classList.contains('active') == true) {
                e.classList.remove('active');
                e.classList.add('puncher');
                setTimeout(() => {
                    e.classList.remove('puncher');
                }, 500);
            } else if (e.classList.contains('active') == false) {
                //do nothing
            }
        })
    }
    counting() {
        this.count++
        res.innerHTML = `${this.count}`;
    }
}



let game = new Flyhouse();
game.interval();
let gameEnd = setInterval(() => {
    game.intervalHide();
}, 1000)

let hit = new Punch();
fly.forEach((e) => {
    e.addEventListener('click', () => {
        hit.punchy()
        hit.counting();
    })
})


let gameTime = setTimeout(() => {
    game.gameTime()
    clearInterval(gameEnd)
}, 15000)