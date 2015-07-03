var warps = [];
var warpx = [];
var warpy = [];
var warpz = [];
function procCmd(cmd) {
    var c=cmd.split(" ");
    if(c[0]=="warp") {
        if(c[1]&&c[2]) {
            if(c[1]=="make") {
                for(var t in warps) {
                    if(c[2]!=warps[t]) {
                warps.push(c[2]);
                warpx.push(Player.getX());
                warpy.push(Player.getY());
                warpz.push(Player.getZ());
                clientMessage("Warp succesfully created.")
                    } else {
                        clientMessage("Warp named " + c[2] + " already exists.")
                    }
                }
            }
            if(c[1]=="tp") {
                for(var i in warps) {
                    if(c[2]==warps[i]) {
                        setPosition(getPlayerEnt(),warpx[i],warpy[i],warpz[i]);
                        clientMessage("Teleported to "+c[2]);
                    } else {
                        clientMessage("Warp named " + c[2] + " not exists.")
                    }
                }
            }
            if(c[1]=="list") {
                for(var i in warps) {
                    clientMessage(warps[i]);
                }
            }
            if(c[1]=="remove") {
                for(var i in warps) {
                    if(c[2]==warps[i]) {
                        clientMessage("Removed warp name " + c[2]);
                        warps.splice(i,1);
                        warpx.splice(i,1);
                        wapry.splice(i,1);
                        warpz.splice(i,1);
                    } else {
                        clientMessage("Warp named " + c[2] + " not exists.")
                    }
                }
            }
        } else {
            clientMessage("Usage : /warp <make> <name> OR /warp <tp> <name> OR /warp list")
        }
    }
}
