/* Spinner/Loader Cordova Plugin - JavaScript side of the bridge to iOS
 *
 * @author Ally Ogilvie
 * @copyright Wizcorp Inc. [ Incorporated Wizards ] 2013
 * @file wizSpinner.js
 *
 */

/*
 ============= Example rotation code ====================

 function shouldRotateToOrientation (orientation) {
 if (deviceIsReady == true) {
 switch (orientation) {
 case 0:
 // portrait normal
 window.wizSpinner.rotate(1);
 return true;
 break;
 case 90:
 // landscape left
 window.wizSpinner.rotate(3);
 return true;
 break;
 case -90:
 // landscape right
 window.wizSpinner.rotate(4);
 return true;
 break;
 case 180:
 // portrait upside down
 return false;
 break;
 }
 }
 }

 function onDeviceReady() {
 deviceIsReady = true;
 }
 */

var exec = require("cordova/exec");

var WizSpinner = function () {
};

WizSpinner.prototype.throwError = function (cb, error) {
    if (cb) {
        cb(error);
    } else {
        throw error;
    }
};

// Object stringifier helper
WizSpinner.prototype.propsToString = function (obj) {
    // Stringify all vars
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = '' + obj[i];
        }
    }
}

WizSpinner.prototype.create = function (options) {
    this.propsToString(options);
    exec(win, fail, 'WizSpinnerPlugin', 'create', [options]);
};

WizSpinner.prototype.show = function (options) {
    this.propsToString(options);
    exec(null, null, 'WizSpinnerPlugin', 'show', [options]);
};

WizSpinner.prototype.hide = function (options) {
    this.propsToString(options);
    exec(null, null, 'WizSpinnerPlugin', 'hide', [options]);
};

WizSpinner.prototype.showFullScreenLoading = function (options) {
    this.propsToString(options);
    exec(null, null, 'WizSpinnerPlugin', 'showFullScreenLoading', [options]);
};

WizSpinner.prototype.hideFullScreenLoading = function (options) {
    this.propsToString(options);
    exec(null, null, 'WizSpinnerPlugin', 'hideFullScreenLoading', [options]);
};

WizSpinner.prototype.setBackPreventingText = function (options) {
    this.propsToString(options);
    exec(null, null, 'WizSpinnerPlugin', 'setBackPreventingText', [options]);
};

WizSpinner.prototype.showLogin = function (success) {
    exec(function() {
      if (angular.isFunction(success)) {
        success();
      }
    }, null, 'WizSpinnerPlugin', 'showLogin', []);
};

WizSpinner.prototype.exitApp = function () {
    exec(null, null, 'WizSpinnerPlugin', 'exitApp', []);
};

WizSpinner.prototype.rotate = function (orientation) {
    exec(null, null, 'WizSpinnerPlugin', 'rotate', [orientation]);
};

// Instantiate the wizSpinner
var wizSpinner = new WizSpinner();
module.exports = wizSpinner;
