var AmeEdit = /** @class */ (function () {
    function AmeEdit() {
    }
    AmeEdit.prototype.getEditableElements = function () {
        var editable = [];
        var elements = document.body.querySelectorAll('*');
        for (var i = 0; i < elements.length; ++i) {
            if ('editable' in elements[i]) {
                editable.push(elements[i]);
            }
        }
        return editable;
    };
    AmeEdit.prototype.handleClick = function (event) {
        var _this = this;
        this.enabled = !this.enabled;
        this.getEditableElements().forEach(function (element) {
            element.setAttribute('editable', _this.enabled ? 'true' : 'false');
        });
    };
    AmeEdit.prototype.render = function () {
        return (h("button", 0, this.enabled ? 'Disable editing' : 'Enable editing'));
    };
    return AmeEdit;
}());
export { AmeEdit };
