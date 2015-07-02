var cursedOre = 921;
ModPE.setItem(cursedOre,"blaze_rod",0,"Cursed Ore Stick");
Item.setHandEquipped(cursedOre,true);
var mobskin = ["lapis","diamond","redstone","coal","iron","emerald","gold"];
function attackHook(a,v) {
    if(a==getPlayerEnt()) {
        if(Player.getCarriedItem()==cursedOre) {
            var rnd = Math.floor(Math.random()*mobskin.length);
            preventDefault();
            Entity.setMobSkin(v,Entity.getMobSkin(v)+":"+mobskin[rnd]+".png");
            clientMessage(Entity.getMobSkin(v))
        }
    }
}

function deathHook(m,v) {
    var spl = Entity.getMobSkin(v).split(":");
    for(var i in mobskin) {
        if(spl[1]==mobskin[i]) {
            var skin = spl[1];
            var X= Entity.getX(v);
            var Y= Entity.getY(v);
            var Z= Entity.getZ(v);
            var id=0;
            var data=0;
            if(skin=="lapis") {
                id=351;
                data=4;
            }
            if(skin=="diamond") {
                id=264;
                data=0;
            }
            if(skin=="redstone") {
                id=331;
                data=0;
            }
            if(skin=="coal") {
                id=263;
                data=0;
            }
            if(skin=="iron") {
                id=265;
                data=0;
            }
            if(skin=="emerald") {
                id=388;
                data=0;
            }
            if(skin=="gold") {
                id=266;
                data=0;
            }
            Level.dropItem(X+0.5,Y,Z+0.5,0,id,1,data);
        }
    }
}
