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
            var child = this.element.querySelector('span');
            child.innerHTML = this.editedText = child.innerText;
        }
    };
    AmeText.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };
    AmeText.prototype.render = function () {
        var text = this.editedText || this.text;
        return (h("span", { "o": { "click": this.handleClick.bind(this), "blur": this.handleBlur.bind(this), "keydown": this.handleKeyDown.bind(this) }, "a": { "contenteditable": this.editable ? 'true' : 'false' } }, text));
    };
    return AmeText;
}());
export { AmeText };
