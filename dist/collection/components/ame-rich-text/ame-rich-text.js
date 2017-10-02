import Quill from 'quill';
var AmeRichText = /** @class */ (function () {
    function AmeRichText() {
    }
    AmeRichText.prototype.value = function () {
        if (this.quill) {
            return this.quill.root.innerHTML;
        }
        else {
            return this.getChild().innerHTML;
        }
    };
    AmeRichText.prototype.handleEditableChange = function (editable) {
        if (!this.quill) {
            this.quill = new Quill(this.getChild(), {
                theme: 'bubble'
            });
        }
        this.quill.enable(editable);
    };
    AmeRichText.prototype.getChild = function () {
        return this.element.querySelector('span');
    };
    AmeRichText.prototype.render = function () {
        return (h("span", 0,
            h(0, 0)));
    };
    return AmeRichText;
}());
export { AmeRichText };
