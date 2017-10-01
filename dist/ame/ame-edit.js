/*! Built with http://stenciljs.com */
ame.loadComponents(

/**** module id (dev mode) ****/
"ame-edit",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
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

exports['AME-EDIT'] = AmeEdit;
exports['AME-REVERT'] = AmeRevert;
exports['AME-TEXT'] = AmeText;
},


/***************** ame-edit *****************/
[
/** ame-edit: tag **/
"AME-EDIT",

/** ame-edit: members **/
[
  [ "enabled", /** state **/ 5 ]
],

/** ame-edit: host **/
{}

],

/***************** ame-revert *****************/
[
/** ame-revert: tag **/
"AME-REVERT",

/** ame-revert: members **/
0 /* no members */,

/** ame-revert: host **/
{}

],

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