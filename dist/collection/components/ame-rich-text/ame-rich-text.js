var AmeRichText = /** @class */ (function () {
    function AmeRichText() {
    }
    AmeRichText.prototype.value = function () {
        return this.getChild().innerText;
    };
    AmeRichText.prototype.getChild = function () {
        return this.element.querySelector('span');
    };
    AmeRichText.prototype.handleClick = function (event) {
        if (this.editable) {
            var child = this.getChild();
            child.setAttribute('contenteditable', 'true');
            child.focus();
        }
    };
    AmeRichText.prototype.handleBlur = function (event) {
        if (this.editable) {
            this.getChild().innerHTML = this.getChild().innerText;
        }
    };
    AmeRichText.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };
    AmeRichText.prototype.render = function () {
        return (h("span", { "o": { "click": this.handleClick.bind(this), "blur": this.handleBlur.bind(this), "keydown": this.handleKeyDown.bind(this) }, "a": { "contenteditable": this.editable ? 'true' : 'false' } },
            h(0, 0)));
    };
    return AmeRichText;
}());
export { AmeRichText };
