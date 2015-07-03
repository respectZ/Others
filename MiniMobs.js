//Mo Spawn by respectZ
ModPE.setItem(1000,"spawn_egg",12,"Spawn Baby Zombie",1);
ModPE.setItem(1001,"spawn_egg",13,"Spawn Baby Zombie Pigman",1);
ModPE.setItem(1002,"spawn_egg",0,"Spawn Chicken Jockey",1);
var ready=true;
Item.setCategory(1000,3);
Item.setCategory(1001,3);
Item.setCategory(1002,3)

function modTick() {
    if(ready) {
        if(Level.getGameMode()==1) {
            ready=false;
            Player.addItemCreativeInv(1000,1);
            Player.addItemCreativeInv(1001,1);
            Player.addItemCreativeInv(1002,1);
            Player.addItemCreativeInv(383,1,41)
        }
    }
}

function useItem(x,y,z,i,b,s) {
    var sides=[[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1],[x-1,y,z],[x+1,y,z]];
    if(i==1000) {
        var zm1 = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],32);
        Entity.setAnimalAge(zm1,-24000);
    }
    if(i==1001) {
        var zm2 = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],36);
        Entity.setAnimalAge(zm2,-24000);
    }
    if(i==1002) {
        var rnd=Math.floor(Math.random()*1);
        var jock;
        if(rnd==1) {
            jock = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],36);
        } else {
            jock = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],32);
        }
        Entity.setAnimalAge(jock,-24000);
        var chicken = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],10);
        rideAnimal(jock,chicken)
    }
}

function entityAddedHook(e) {
    if(Entity.getEntityTypeId(e)==41) {
        Entity.setHealth(e,10)
    }
}
