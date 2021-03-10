class Game{
    constructor(){
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                    player.getPos();
                }
                form = new Form()
                form.display();
            }
    redJet = createSprite(200,500);
    redJet.addImage("player1",redJetImg);
    
    blueJet = createSprite(800,500);
    blueJet.addImage("player2",blueJetImg );
    players=[redJet,blueJet];

        }
    
    play(){
        
        form.hide();
        player.getPos();
        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
 
        var index =0;
        drawSprites();
    

        if(keyDown(UP_ARROW)&& player.index != null) {//Move Up
            console.log(player.index);
            if(player.index === 1){
                players[0].setSpeedAndDirection(2, player.angle-90);
                player.updatePos(players[0].x,players[0].y);
                player.getPos();
            }
            if(player.index === 2){
                players[1].setSpeedAndDirection(2, player.angle-90);
                player.updatePos(players[1].x,players[1].y);
                player.getPos();
            }

        }
           
           if(keyDown(LEFT_ARROW)&& player.index != null) {//Move Left
            if(player.index === 1){
            player.angle -= 1;
            players[0].rotation = player.angle;
            player.updatePos(players[0].x,players[0].y);
            player.getPos();
            }
            if(player.index === 2){
                player.angle -= 1;
            players[1].rotation = player.angle;
            player.updatePos(players[1].x,players[1].y);
            player.getPos();
        }
    }
            if(keyDown(RIGHT_ARROW)&& player.index != null) {//Move Right
                if(player.index === 1){
                    player.angle += 1;
                    players[0].rotation = player.angle;
                    player.updatePos(players[0].x,players[0].y);
                    player.getPos();
                    }
                    if(player.index === 2){
                        player.angle += 1;
                    players[1].rotation = player.angle;
                    player.updatePos(players[1].x,players[1].y);
                    player.getPos();
                }
            }

    }
    end(){
       console.log("Game Ended");
    }
}