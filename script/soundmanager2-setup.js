/**
 * soundmanager2-setup.js
 *
 * A default setup script for configuring SoundManager2.  This script must be imported into your page after soundmanager2.js
 *
 */

soundManager.setup({
    url: 'lib/soundmanager2/swf',
    flashVersion: 9,
    debugFlash: false,
    debugMode: false,
    flashLoadTimeout: 0,
    onready: function() {
        console.log('SM2 Ready!');
    },
    ontimeout: function() {
        console.log('SM2 timed out on startup...');
    },
    defaultOptions: {
        onfailure: function(sndObj, msg, level, code) {
            console.log('onfailure() : msg = ' + msg + ', level = ' + level + ', code = ' + code);
        }
    },
    flash9Options: {
        usePeakData: false,
        useWaveformData: false,
        useEqData: false
    }
});
