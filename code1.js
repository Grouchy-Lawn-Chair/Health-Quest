gdjs.InstructionsCode = {};
gdjs.InstructionsCode.localVariables = [];
gdjs.InstructionsCode.GDCursorObjects1= [];
gdjs.InstructionsCode.GDCursorObjects2= [];
gdjs.InstructionsCode.GDCursorObjects3= [];
gdjs.InstructionsCode.GDStartObjects1= [];
gdjs.InstructionsCode.GDStartObjects2= [];
gdjs.InstructionsCode.GDStartObjects3= [];
gdjs.InstructionsCode.GDTitle_9595CardObjects1= [];
gdjs.InstructionsCode.GDTitle_9595CardObjects2= [];
gdjs.InstructionsCode.GDTitle_9595CardObjects3= [];
gdjs.InstructionsCode.GDFadeMePleaseObjects1= [];
gdjs.InstructionsCode.GDFadeMePleaseObjects2= [];
gdjs.InstructionsCode.GDFadeMePleaseObjects3= [];


gdjs.InstructionsCode.asyncCallback59768228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstructionsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}gdjs.InstructionsCode.localVariables.length = 0;
}
gdjs.InstructionsCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstructionsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.InstructionsCode.asyncCallback59768228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstructionsCode.asyncCallback59767300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstructionsCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("FadeMePlease"), gdjs.InstructionsCode.GDFadeMePleaseObjects2);
{for(var i = 0, len = gdjs.InstructionsCode.GDFadeMePleaseObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDFadeMePleaseObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;45;93", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.InstructionsCode.localVariables.length = 0;
}
gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstructionsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.InstructionsCode.asyncCallback59767300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstructionsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Start-Scene-Song.mp3", 2, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeMePlease"), gdjs.InstructionsCode.GDFadeMePleaseObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDFadeMePleaseObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDFadeMePleaseObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;45;93", 1, "Horizontal", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(59765396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.InstructionsCode.GDStartObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Start Button.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.InstructionsCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartObjects1[i].getBehavior("FlashColor").Flash(0.2, "245;166;35", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList1(runtimeScene);} //End of subevents
}

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

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDCursorObjects1.length = 0;
gdjs.InstructionsCode.GDCursorObjects2.length = 0;
gdjs.InstructionsCode.GDCursorObjects3.length = 0;
gdjs.InstructionsCode.GDStartObjects1.length = 0;
gdjs.InstructionsCode.GDStartObjects2.length = 0;
gdjs.InstructionsCode.GDStartObjects3.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects1.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects2.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects3.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects1.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects2.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects3.length = 0;

gdjs.InstructionsCode.eventsList2(runtimeScene);
gdjs.InstructionsCode.GDCursorObjects1.length = 0;
gdjs.InstructionsCode.GDCursorObjects2.length = 0;
gdjs.InstructionsCode.GDCursorObjects3.length = 0;
gdjs.InstructionsCode.GDStartObjects1.length = 0;
gdjs.InstructionsCode.GDStartObjects2.length = 0;
gdjs.InstructionsCode.GDStartObjects3.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects1.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects2.length = 0;
gdjs.InstructionsCode.GDTitle_9595CardObjects3.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects1.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects2.length = 0;
gdjs.InstructionsCode.GDFadeMePleaseObjects3.length = 0;


return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
