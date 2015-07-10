//newity
ModPE.overrideTexture("images/mob/babycreeper.png","https://dl.dropboxusercontent.com/s/uvwjqtxjflyp7s7/babycreeper.png?dl=0")
ModPE.overrideTexture("images/mob/babyskeleton.png","https://dl.dropboxusercontent.com/s/xf2uoxadl8z36q3/babyskeleton.png?dl=0")
ModPE.overrideTexture("images/mob/babyenderman.png","https://dl.dropboxusercontent.com/s/w91rjc6nma7ybfb/babyenderman2.png?dl=0")
ModPE.overrideTexture("images/mob/Herobrine.png","https://dl.dropboxusercontent.com/s/n9xr91o82dffw6s/herobrine.png?dl=0")
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
function addbabyendermanRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 0, 8,true);
body.addBox(-1,12,-1.5, 3, 6, 3);
body.setTextureOffset(0, 8, true);
body.addBox(-2,12,-0.5, 1, 8, 1);
body.setTextureOffset(0, 8, true);
body.addBox(2,12,-0.5, 1, 8, 1);
body.setTextureOffset(0, 8, true);
body.addBox(-1,18,-0.5, 1, 6, 1);
body.setTextureOffset(0, 8, true);
body.addBox(1,18,-0.5, 1, 6, 1);
body.setTextureOffset(0, 0, true);
body.addBox(-1.5,8,-2, 4, 4, 4);
}
var babyendermanRenderType = Renderer.createHumanoidRenderer();
addbabyendermanRenderType(babyendermanRenderType);
var spawner = [];
setNewSpawner = function(id,tex,data,name) {
    ModPE.setItem(id,tex,data,"Spawn "+name,1);
    Item.setCategory(id,3)
    spawner.push(id);
}
var beta=false;
setNewSpawner(2100,"spawn_egg",6,"Baby Creeper");
setNewSpawner(2101,"spawn_egg",9,"Baby Skeleton");
setNewSpawner(2102,"spawn_egg",0,"Baby Creeper (Jockey)");
//setNewSpawner(2103,"spawn_egg",0,"Baby Skeleton (Jockey)"); disabled because buggy
setNewSpawner(2104,"spawn_egg",7,"Baby Enderman");
setNewSpawner(2106,"skull_steve",0,"Baby Herobrine");
setNewSpawner(2107,"spawn_egg",12,"Baby Zombie");
setNewSpawner(2108,"spawn_egg",13,"Baby Zombie Pigman");
setNewSpawner(2109,"spawn_egg",0,"Baby Zombie (Jockey)");
setNewSpawner(2110,"spawn_egg",0,"Baby Zombie Pigman (Jockey)")



function useItem(x,y,z,i,b,s) {
    var sides=[[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1],[x-1,y,z],[x+1,y,z]];
    testHerobrine(x,y,z,i,b,s);
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
                if(i==2102) {
                    var jockey = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,33,"mob/babycreeper.png");
                    Entity.setRenderType(jockey,babycreeperRenderType.renderType);
                    Entity.setCollisionSize(jockey,0.1,0.1);
                    var chicken = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,10);
                    rideAnimal(jockey,chicken)
                }
                if(i==2103) {
                    var ske = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,34,"mob/babyskeleton.png");
                    Entity.setRenderType(ske,babyskeletonRenderType.renderType);
                    Entity.setCarriedItem(ske,0,0,0);
                    Entity.setCollisionSize(ske,0.1,0.1);
                    var chick = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,10);
                    rideAnimal(ske,chick)
                }
                if(i==2104) {
                    var men = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,38,"mob/babyenderman.png");
                    Entity.setCollisionSize(men,0.1,0.1);
                    Entity.setRenderType(men,babyendermanRenderType.renderType);
                }
                if(i==2105) {
                    var herobrine = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32,"mob/Herobrine.png");
                    Entity.setHealth(herobrine,50);
                    Entity.setCarriedItem(herobrine,276,1,0);
                }
                if(i==2106) {
                    var mhero = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32,"mob/Herobrine.png");
                    Entity.setHealth(mhero,50);
                    Entity.setCarriedItem(mhero,276,1,0);
                    Entity.setAnimalAge(mhero,-24000);
                    Entity.setCollisionSize(mhero,0.1,0.1);
                }
                if(i==2107) {
                    var miniz = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32);
                    Entity.setAnimalAge(miniz,-24000);
                }
                if(i==2108) {
                    var zmpig = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,36);
                    Entity.setAnimalAge(zmpig,-24000);
                }
                if(i==2109) {
                    var minizz = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32);
                    Entity.setAnimalAge(minizz,-24000);
                    var chickey = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,10);
                    rideAnimal(minizz,chickey)
                }
                if(i==2110) {
                    var zzmpig = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,36);
                    Entity.setAnimalAge(zzmpig,-24000);
                    var chick = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,10);
                    rideAnimal(zzmpig,chick)
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
            var creepy = Level.spawnMob(Player.getX()+20+0.5,Player.getY()+3,Player.getZ()+0.5,33,"mob/babycreeper.png");
            Entity.setRenderType(creepy,babycreeperRenderType.renderType);
            Entity.setCollisionSize(creepy,0.1,0.1);
            break;
        case 2:
            var skelety =Level.spawnMob(Player.getX()+20+0.5,Player.getY()+3,Player.getZ()+0.5,34,"mob/babyskeleton.png");
            Entity.setRenderType(skelety,babyskeletonRenderType.renderType);
            Entity.setCarriedItem(skelety,0,0,0);
            Entity.setCollisionSize(skelety,0.1,0.1);
            break;
        case 3:
            var endery = Level.spawnMob(Player.getX()+20+0.5,Player.getY()+3,Player.getZ()+0.5,38,"mob/babyenderman.png");
            Entity.setCarriedItem(endery,0,0,0);
            Entity.setCollisionSize(endery,0.1,0.1);
            Entity.setRenderType(endery,babyendermanRenderType.renderType);
            break;
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
            if(Entity.getMobSkin(ent)=="mob/enderman.tga") {
                Entity.setMobSkin(ent,"mob/babyenderman.png");
                Entity.setCollisionSize(ent,0.1,0.1);
                Entity.setCarriedItem(ent,0,0,0);
            }
        }
        if(Entity.getMobSkin(ent)=="mob/Herobrine.png") {
            Entity.setRenderType(ent,3);
            Entity.setFireTicks(ent,0);
            Entity.setCarriedItem(ent,276,1,1);
        }
    }
}

function leaveGame() {
    ready=false;
    beta=false;
}
/*
function deathHook(m,v) {
    //var spw;
    if(Entity.getMobSkin(v)=="mob/Herobrine.png") {
        //spw = Math.floor(Math.random()*(7)+(3));
        Entity.remove(v); // used for avoid crashes
        explode(Entity.getX(v),Entity.getY(v),Entity.getZ(v),4);
        setTile(Entity.getX(v),Entity.getY(v),Entity.getZ(v),11);
        setTile(Entity.getX(v),Entity.getY(v)+1,Entity.getZ(v),11)
    }
}
*/ // i disable it beacuse make crash
function newLevel() {
    var colors = [ChatColor.GREEN,ChatColor.AQUA,ChatColor.BLUE,ChatColor.RED,ChatColor.GOLD];
    for(var p in colors) {
        ModPE.showTipMessage(colors[p]+"MiniMobs v0.2 by respectZ")
    }
}

function testHerobrine(x,y,z,i,b,s) {
    if(getTile(x,y,z)==87&&getTile(x,y-1,z)==87&&getTile(x,y-2,z)==41&&getTile(x,y-3,z)==41) {
        if(i==259) {
            clientMessage(ChatColor.DARK_RED +"You don't know what you did...");
            var mhero = Level.spawnMob(x+0.5,y+1,z+0.5,32,"mob/Herobrine.png");
            Entity.setHealth(mhero,50);
            Entity.setCarriedItem(mhero,276,1,0);
            Entity.setAnimalAge(mhero,-24000);
            Entity.setCollisionSize(mhero,0.1,0.1);
        }
    }
}

function procCmd(cmd) {
    if(cmd=="beta") {
        if(!beta) {
        beta=true;
        clientMessage(ChatColor.DARK_RED+"BETA Mode enabled !!!")
        clientMessage(ChatColor.DARK_RED+"If a herobrine (not baby) died, it will crash your game\nto disable beta mode, restart your blocklauncher");
        clientMessage(ChatColor.DARK_RED+"Check your creative inventory");
        setNewSpawner(2105,"skull_steve",0,"Herobrine");
        Player.addItemCreativeInv(2105,1,0);
    } else {
        clientMessage("You already turn on beta mode");
    }
    }
    if(cmd=="babyparty") {
        clientMessage("You find easter egg !!");
        var creepyz = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,33,"mob/babycreeper.png");
        Entity.setRenderType(creepyz,babycreeperRenderType.renderType);
        Entity.setCollisionSize(creepyz,0.1,0.1);
        var skelez = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,34,"mob/babyskeleton.png");
        Entity.setRenderType(skelez,babyskeletonRenderType.renderType);
        Entity.setCarriedItem(skelez,0,0,0);
        Entity.setCollisionSize(skelez,0.1,0.1);
        var menz = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,38,"mob/babyenderman.png");
        Entity.setCollisionSize(menz,0.1,0.1);
        Entity.setRenderType(menz,babyendermanRenderType.renderType);
        var miniza = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32);
        Entity.setAnimalAge(miniza,-24000);
        var zmpigy = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,36);
        Entity.setAnimalAge(zmpigy,-24000);
        var mheroz = Level.spawnMob(sides[s][0]+0.5,sides[s][1],sides[s][2]+0.5,32,"mob/Herobrine.png");
        Entity.setHealth(mheroz,50);
        Entity.setCarriedItem(mheroz,276,1,0);
        Entity.setAnimalAge(mheroz,-24000);
        Entity.setCollisionSize(mheroz,0.1,0.1);
    }
}
