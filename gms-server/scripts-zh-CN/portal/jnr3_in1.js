function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out2").getState() == 1) {
        pi.playPortalSound();
        pi.warp(926110202, 0);
        return true;
    } else {
        pi.playerMessage(5, "传送门尚未开启。");
        return false;
    }
}