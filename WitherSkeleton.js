ModPE.setItem(2002,"spawn_egg",2,"Spawn Wither Skeleton");
var wth=[];
var ready=false;
ModPE.overrideTexture("mob/wither_skeleton.png","https://dl.dropboxusercontent.com/s/1eoe51c0fveizub/wither_skeleton.png?dl=0");
function useItem(x,y,z,i,b,s) {
    if(i==2002) {
        var wither = Level.spawnMob(x,y+1,z,32,"mob/wither_skeleton.png");
        Entity.setRenderType(wither,witherRenderType.renderType);
        wth.push(Entity.getUniqueId(wither));
    }
}

function leaveGame() {
    ModPE.saveData("wither"+Level.getWorldDir(),wth.toString())
}

function newLevel() {
    load();
}

function load() {
    var wat = ModPE.readData("wither"+Level.getWorldDir());
    if(wat) {
    wth = wat.split(",")
    }
}

function entityAddedHook(e) {
    for(var i in wth) {
        if(Entity.getUniqueId(e)==wth[i]) {
            Entity.setMobSkin(e,"mob/wither_skeleton.png");
        }
    }
}

function modTick() {
    if(!ready) {
        if(Level.getGameMode()==1) {
            Player.addItemCreativeInv(2002,1,0);
            ready=true;
        }
    }
}

function addwitherRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 0, 0);
body.addBox(-4,-8,-4, 8, 8, 8);
body.setTextureOffset( 16, 16);
body.addBox(-4,0,-2, 8, 12, 4);
body.setTextureOffset( 40, 16);
body.addBox(-1,0,-1, 2, 12, 2);
body.setTextureOffset( 40, 16);
body.addBox(-1,0,-1, 2, 12, 2);
body.setTextureOffset( 0, 16);
body.addBox(-4,7,-1, 2, 12, 2);
body.setTextureOffset( 0, 16);
body.addBox(2,8,-1, 2, 12, 2);
}
var witherRenderType = Renderer.createHumanoidRenderer();
addwitherRenderType(witherRenderType);
