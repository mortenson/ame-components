var AmeText = /** @class */ (function () {
    function AmeText() {
    }
    AmeText.prototype.revert = function () {
        this.editedText = this.text;
    };
    AmeText.prototype.value = function () {
        return this.editedText;
    };
    AmeText.prototype.getChild = function () {
        return this.element.querySelector('span');
    };
    AmeText.prototype.handleClick = function (event) {
        if (this.editable) {
            var child = this.getChild();
            child.setAttribute('contenteditable', 'true');
            child.focus();
        }
    };
    AmeText.prototype.handleBlur = function (event) {
        if (this.editable) {
            this.editedText = this.getChild().innerText;
        }
    };
    AmeText.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };
    AmeText.prototype.render = function () {
        return (h("span", { "o": { "click": this.handleClick.bind(this), "blur": this.handleBlur.bind(this), "keydown": this.handleKeyDown.bind(this) }, "a": { "contenteditable": this.editable ? 'true' : 'false' } }, this.editedText || this.text));
    };
    return AmeText;
}());
export { AmeText };
