ModPE.overrideTexture("images/mob/babycreeper.png","https://dl.dropboxusercontent.com/s/uvwjqtxjflyp7s7/babycreeper.png?dl=0")
ModPE.overrideTexture("images/mob/babyskeleton.png","https://dl.dropboxusercontent.com/s/xf2uoxadl8z36q3/babyskeleton.png?dl=0")
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
setNewSpawner = function(id,tex,data,name) {
    ModPE.setItem(id,tex,data,"Spawn "+name,1);
    Item.setCategory(id,3)
    spawner.push(id);
}
setNewSpawner(2100,"spawn_egg",6,"Baby Creeper");
setNewSpawner(2101,"spawn_egg",9,"Baby Skeleton");
var spawner = [];


function useItem(x,y,z,i,b,s) {
    var sides=[[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1],[x-1,y,z],[x+1,y,z]];
    for(var t in spawner) {
        if(i==spawner[t]) {
            if(getTile(x,y,z)!=52) {
                if(i==2100) {
                    var creepy = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,33,"mob/babycreeper.png");
                    Entity.setRenderType(creepy,babycreeperRenderType.renderType);
                    Entity.setCollisionSize(creepy,0.1,0.1);
                }
                if(i==2101) {
                    var skele = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,34,"mob/babyskeleton.png");
                    Entity.setRenderType(skele,babyskeletonRenderType.renderType);
                    Entity.setCarriedItem(skele,0,0,0);
                    Entity.setCollisionSize(skele,0.1,0.1);
                }
            } else {
                if(i==2100) {
                    Level.setSpawnerEntityType(x,y,z,33);
                }
                if(i==2101) {
                    Level.setSpawnerEntityType(x,y,z,34)
                }
            }
        }
    }
}
var ready = false;
function modTick() {
    if(!ready) {
        if(Level.getGameMode()==1) {
            for(var i in spawner) {
                Player.addItemCreativeInv(spawner[i],1,0);
                ready=true;
            }
        }
    }
    var rnd = Math.floor(Math.random()*6000);
    randomSpawn(rnd);
    checkMobs();
}

function randomSpawn(random) {
    switch(random) {
        case 1:
            var creepy = Level.spawnMob(sides[s][0],sides[s][1],sides[s][2],33,"mob/babycreeper.png");
            Entity.setRenderType(creepy,babycreeperRenderType.renderType);
            Entity.setCollisionSize(creepy,0.1,0.1);
            break;
        case 2:
            var skelety =Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,34,"mob/babyskeleton.png");
            Entity.setRenderType(skelety,babyskeletonRenderType.renderType);
            Entity.setCarriedItem(skelety,0,0,0);
            Entity.setCollisionSize(skelety,0.1,0.1);
    }
}

function checkMobs() {
    var all=Entity.getAll();
    for(var k in all) {
        var ent=all[k];
        if(Entity.getRenderType(ent)>3000) {
            if(Entity.getMobSkin(ent)=="mob/creeper.png") {
                Entity.setMobSkin(ent,"mob/babycreeper.png");
                Entity.setCollisionSize(ent,0.1,0.1);
            }
            if(Entity.getMobSkin(ent)=="mob/skeleton.png") {
                Entity.setMobSkin(ent,"mob/babyskeleton.png");
                Entity.setCollisionSize(ent,0.1,0.1);
                Entity.setCarriedItem(ent,0,0,0);
            }
        }
    }
}

function leaveGame() {
    ready=false;
}

function newLevel() {
    var colors = [ChatColor.GREEN,ChatColor.AQUA,ChatColor.BLUE,ChatColor.RED,ChatColor.GOLD];
    for(var p in colors) {
        ModPE.showTipMessage(colors[p]+"MiniMobs v0.1")
    }
}
