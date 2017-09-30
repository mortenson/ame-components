var AmeText = /** @class */ (function () {
    function AmeText() {
    }
    AmeText.prototype.handleClick = function (event) {
        if (this.editable && !this.editing) {
            this.editing = true;
        }
    };
    AmeText.prototype.render = function () {
        return (h("span", { "a": { "contenteditable": this.editing ? "true" : "false" } }, this.text));
    };
    return AmeText;
}());
export { AmeText };
