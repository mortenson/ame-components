var AmeText = /** @class */ (function () {
    function AmeText() {
    }
    AmeText.prototype.revert = function () {
        this.editedText = this.text;
    };
    AmeText.prototype.value = function () {
        return this.editedText;
    };
    AmeText.prototype.handleClick = function (event) {
        if (this.editable) {
            var child = this.element.querySelector('span');
            child.setAttribute('contenteditable', 'true');
            child.focus();
        }
    };
    AmeText.prototype.handleBlur = function (event) {
        if (this.editable) {
            this.editedText = this.element.querySelector('span').innerText;
        }
    };
    AmeText.prototype.render = function () {
        var text = this.editedText || this.text;
        return (h("span", { "o": { "click": this.handleClick.bind(this), "blur": this.handleBlur.bind(this) } }, text));
    };
    return AmeText;
}());
export { AmeText };
