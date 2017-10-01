/*! Built with http://stenciljs.com */
ame.loadComponents(

/**** module id (dev mode) ****/
"ame-text",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
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

exports['AME-TEXT'] = AmeText;
},


/***************** ame-text *****************/
[
/** ame-text: tag **/
"AME-TEXT",

/** ame-text: members **/
[
  [ "editable", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "editedText", /** state **/ 5 ],
  [ "element", /** element ref **/ 7 ],
  [ "revert", /** method **/ 6 ],
  [ "text", /** prop **/ 1 ],
  [ "value", /** method **/ 6 ]
],

/** ame-text: host **/
{}

]
)