var AmeRevert = /** @class */ (function () {
    function AmeRevert() {
    }
    AmeRevert.prototype.getRevertableElements = function () {
        var revertable = [];
        var elements = document.body.querySelectorAll('*');
        for (var i = 0; i < elements.length; ++i) {
            if ('revert' in elements[i]) {
                revertable.push(elements[i]);
            }
        }
        return revertable;
    };
    AmeRevert.prototype.handleClick = function (event) {
        this.getRevertableElements().forEach(function (element) {
            element.revert();
        });
    };
    AmeRevert.prototype.render = function () {
        return (h("button", 0, t("Revert")));
    };
    return AmeRevert;
}());
export { AmeRevert };
