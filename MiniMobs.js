//More Mobs by rz
ModPE.setItem(1000,"spawn_egg",12,"Spawn Baby Zombie",1);
ModPE.setItem(1001,"spawn_egg",13,"Spawn Baby Zombie Pigman",1);
ModPE.setItem(1002,"spawn_egg",0,"Spawn Chicken Jockey",1);
ModPE.setItem(1003,"spawn_egg",6,"Spawn Baby Creeper",1);
ModPE.setItem(1004,"spawn_egg",9,"Spawn Baby Skeleton",1);
var ready=true; 
Item.setCategory(1000,3);
Item.setCategory(1001,3);
Item.setCategory(1002,3);
Item.setCategory(1003,3);
Item.setCategory(1004,3);

function modTick() {
    if(ready) {
        if(Level.getGameMode()==1) {
            ready=false;
            Player.addItemCreativeInv(1000,1);
            Player.addItemCreativeInv(1001,1);
            Player.addItemCreativeInv(1002,1);
            Player.addItemCreativeInv(1003,1);
            Player.addItemCreativeInv(1004,1);
            Player.addItemCreativeInv(383,1,41);
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
        var rnd=Math.floor(Math.random()*15);
        var jock;
        if(rnd<6) {
            jock = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],36);
            Entity.setAnimalAge(jock,-24000);
        }
        if(rnd>=6&&rnd<=10) {
            jock = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],32);
            Entity.setAnimalAge(jock,-24000);
        }
        if(rnd>10) {
            jock = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],33,"mob/babycreeper.png");
            Entity.setRenderType(jock,babycreeperRenderType.renderType);
            Entity.setCollisionSize(jock,0.1,0.1);
        }
        var chicken = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],10);
        rideAnimal(jock,chicken);
    }
    if(i==1003) {
        var creepy = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],33,"mob/babycreeper.png");
        Entity.setRenderType(creepy,babycreeperRenderType.renderType);
        Entity.setCollisionSize(creepy,0.1,0.1);
    }
    if(i==1004) {
        var skele = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],34,"mob/babyskeleton.png");
        Entity.setAnimalAge(skele,-24000);
        Entity.setCollisionSize(skele,0.1,0.1);
        Entity.setRenderType(skele,babyskeletonRenderType.renderType);
    }
}

function entityAddedHook(e) {
    if(Entity.getEntityTypeId(e)==41) {
        Entity.setHealth(e,10);
    }
}
function addbabycreeperRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2,11,-3, 4, 4, 4);
body.setTextureOffset(8, 8, true);
body.addBox(-2,15,-2, 4, 6, 2);
body.setTextureOffset(0, 8, true);
body.addBox(0,21,0, 2, 3, 2);
body.setTextureOffset(0, 8, true);
body.addBox(-2,21,0, 2, 3, 2);
body.setTextureOffset(0, 8, true);
body.addBox(0,21,-4, 2, 3, 2);
body.setTextureOffset(0, 8, true);
body.addBox(-2,21,-4, 2, 3, 2);
}
var babycreeperRenderType = Renderer.createHumanoidRenderer();
addbabycreeperRenderType(babycreeperRenderType);

function addbabyskeletonRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2,11,-3, 4, 4, 4);
body.setTextureOffset(8, 8, true);
body.addBox(-2,15,-2, 4, 5, 2);
body.setTextureOffset(0, 8, true);
body.addBox(-3,15,-1.5, 1, 4, 1);
body.setTextureOffset(0, 8, true);
body.addBox(2,15,-1.5, 1, 4, 1);
body.setTextureOffset(0, 8, true);
body.addBox(-2,20,-1.5, 1, 4, 1);
body.setTextureOffset(0, 8, true);
body.addBox(1,20,-1.5, 1, 4, 1);
}
var babyskeletonRenderType = Renderer.createHumanoidRenderer();
addbabyskeletonRenderType(babyskeletonRenderType);

function leaveGame() {
    ready=true;
}
