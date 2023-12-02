var CHANID = /** @class */ (function () {
    function CHANID() {
    }
    CHANID.prototype.generateID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return CHANID;
}());

export { CHANID as default };
