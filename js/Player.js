class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.score =0;
        this.bulletGroup = createGroup();
        this.angle = 0;
        this.x = 200;
        this.y = 100;
        
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score:this.score,
            x:this.x,
            y:this.y
        });
    }
    
    updatePos(a,b){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            x:a,
            y:b
        }) 
        this.x = a;
        this.y = b;
    }

    getPos(){
        var playerPosRef = database.ref('players/player'+this.index);
        playerPosRef.on("value", (data) => {
            console.log(data.val())
            this.x = data.val().x;
            this.y = data.val().y;
            
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
