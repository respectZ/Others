ModPE.setItem(1000,"spawn_egg",5,"Spawn Baby Zombie",1);
ModPE.setItem(1001,"spawn_egg",5,"Spawn Baby Zombie Pigman",1);
ModPE.setItem(1002,"spawn_egg",5,"Spawn Baby Skeleton",1);
var ready=true;

function modTick() {
    if(ready) {
        if(Level.getGameMode()==1) {
            ready=true;
            Player.addItemCreativeInv(1000,1);
            Player.addItemCreativeInv(1001,1);
            Player.addItemCreativeInv(1002,1);
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
        var zm3 = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],34);
        Entity.setAnimalAge(zm3,-24000);
    }
}
