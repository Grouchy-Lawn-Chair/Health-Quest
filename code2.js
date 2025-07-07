gdjs.End_32SceneCode = {};
gdjs.End_32SceneCode.localVariables = [];
gdjs.End_32SceneCode.GDCursorObjects1= [];
gdjs.End_32SceneCode.GDCursorObjects2= [];
gdjs.End_32SceneCode.GDStartObjects1= [];
gdjs.End_32SceneCode.GDStartObjects2= [];
gdjs.End_32SceneCode.GDTitle_9595CardObjects1= [];
gdjs.End_32SceneCode.GDTitle_9595CardObjects2= [];
gdjs.End_32SceneCode.GDFadeMePleaseObjects1= [];
gdjs.End_32SceneCode.GDFadeMePleaseObjects2= [];
gdjs.End_32SceneCode.GDNewSpriteObjects1= [];
gdjs.End_32SceneCode.GDNewSpriteObjects2= [];


gdjs.End_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "end music.mp3", 2, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeMePlease"), gdjs.End_32SceneCode.GDFadeMePleaseObjects1);
{for(var i = 0, len = gdjs.End_32SceneCode.GDFadeMePleaseObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDFadeMePleaseObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;45;93", 1, "Horizontal", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.End_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32SceneCode.GDCursorObjects1.length = 0;
gdjs.End_32SceneCode.GDCursorObjects2.length = 0;
gdjs.End_32SceneCode.GDStartObjects1.length = 0;
gdjs.End_32SceneCode.GDStartObjects2.length = 0;
gdjs.End_32SceneCode.GDTitle_9595CardObjects1.length = 0;
gdjs.End_32SceneCode.GDTitle_9595CardObjects2.length = 0;
gdjs.End_32SceneCode.GDFadeMePleaseObjects1.length = 0;
gdjs.End_32SceneCode.GDFadeMePleaseObjects2.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects2.length = 0;

gdjs.End_32SceneCode.eventsList0(runtimeScene);
gdjs.End_32SceneCode.GDCursorObjects1.length = 0;
gdjs.End_32SceneCode.GDCursorObjects2.length = 0;
gdjs.End_32SceneCode.GDStartObjects1.length = 0;
gdjs.End_32SceneCode.GDStartObjects2.length = 0;
gdjs.End_32SceneCode.GDTitle_9595CardObjects1.length = 0;
gdjs.End_32SceneCode.GDTitle_9595CardObjects2.length = 0;
gdjs.End_32SceneCode.GDFadeMePleaseObjects1.length = 0;
gdjs.End_32SceneCode.GDFadeMePleaseObjects2.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['End_32SceneCode'] = gdjs.End_32SceneCode;
