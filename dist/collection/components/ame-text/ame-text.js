var AmeText = /** @class */ (function () {
    function AmeText() {
    }
    AmeText.prototype.value = function () {
        return this.getChild().innerText;
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
            this.getChild().innerHTML = this.getChild().innerText;
        }
    };
    AmeText.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };
    AmeText.prototype.render = function () {
        return (h("span", { "o": { "click": this.handleClick.bind(this), "blur": this.handleBlur.bind(this), "keydown": this.handleKeyDown.bind(this) }, "a": { "contenteditable": this.editable ? 'true' : 'false' } },
            h(0, 0)));
    };
    return AmeText;
}());
export { AmeText };
