const ExtensionUtils = imports.misc.extensionUtils;
const kPower = ExtensionUtils.getCurrentExtension().imports.kPower;
const Log = kPower.Log;
const Main = imports.ui.main;

var btMouseBattIndicator;
function enable() {
	Log("Enable");
	btMouseBattIndicator = new kPower.mBattIndicator();
	Main.panel.addToStatusArea('BtMouseBattIndicator', btMouseBattIndicator, 1);
}

function disable() {
	Log("Disable");
	kPower.dbusCon.signal_unsubscribe(btMouseBattIndicator.subIdAdd);
	kPower.dbusCon.signal_unsubscribe(btMouseBattIndicator.subIdRem);
	btMouseBattIndicator._proxy = null;
	btMouseBattIndicator.reset();
	btMouseBattIndicator.destroy();
	btMouseBattIndicator = null;
}
