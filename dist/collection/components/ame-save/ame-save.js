var AmeSave = /** @class */ (function () {
    function AmeSave() {
    }
    AmeSave.prototype.handleClick = function (event) {
        var elements = document.body.querySelectorAll('[handler-name]');
        for (var i = 0; i < elements.length; ++i) {
            if ('save' in elements[i] && typeof elements[i].save === 'function') {
                elements[i].save();
            }
        }
    };
    AmeSave.prototype.render = function () {
        return (h("button", 0, t("Save")));
    };
    return AmeSave;
}());
export { AmeSave };
