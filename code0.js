gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.localVariables = [];
gdjs.Start_32ScreenCode.GDCursorObjects1= [];
gdjs.Start_32ScreenCode.GDCursorObjects2= [];
gdjs.Start_32ScreenCode.GDCursorObjects3= [];
gdjs.Start_32ScreenCode.GDStartObjects1= [];
gdjs.Start_32ScreenCode.GDStartObjects2= [];
gdjs.Start_32ScreenCode.GDStartObjects3= [];
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects1= [];
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects2= [];
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects3= [];
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects1= [];
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2= [];
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects3= [];


gdjs.Start_32ScreenCode.mapOfGDgdjs_9546Start_959532ScreenCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.Start_32ScreenCode.GDCursorObjects1});
gdjs.Start_32ScreenCode.mapOfGDgdjs_9546Start_959532ScreenCode_9546GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Start_32ScreenCode.GDStartObjects1});
gdjs.Start_32ScreenCode.asyncCallback12601796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback12601796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_32ScreenCode.asyncCallback12601348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("FadeMePlease"), gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;45;93", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback12601348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_32ScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Start-Scene-Song.mp3", 2, true, 50, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Start_32ScreenCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32ScreenCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12578988);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32ScreenCode.mapOfGDgdjs_9546Start_959532ScreenCode_9546GDCursorObjects1Objects, gdjs.Start_32ScreenCode.mapOfGDgdjs_9546Start_959532ScreenCode_9546GDStartObjects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32ScreenCode.GDStartObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Start Button.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartObjects1[i].getBehavior("FlashColor").Flash(0.2, "245;166;35", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
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

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDCursorObjects1.length = 0;
gdjs.Start_32ScreenCode.GDCursorObjects2.length = 0;
gdjs.Start_32ScreenCode.GDCursorObjects3.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects3.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects3.length = 0;

gdjs.Start_32ScreenCode.eventsList2(runtimeScene);
gdjs.Start_32ScreenCode.GDCursorObjects1.length = 0;
gdjs.Start_32ScreenCode.GDCursorObjects2.length = 0;
gdjs.Start_32ScreenCode.GDCursorObjects3.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects3.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTitle_9595CardObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFadeMePleaseObjects3.length = 0;


return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
