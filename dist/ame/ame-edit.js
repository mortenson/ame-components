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

exports['AME-EDIT'] = AmeEdit;
exports['AME-RICH-TEXT'] = AmeRichText;
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

/***************** ame-rich-text *****************/
[
/** ame-rich-text: tag **/
"AME-RICH-TEXT",

/** ame-rich-text: members **/
[
  [ "editable", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "element", /** element ref **/ 7 ],
  [ "value", /** method **/ 6 ]
],

/** ame-rich-text: host **/
{}

],

/***************** ame-text *****************/
[
/** ame-text: tag **/
"AME-TEXT",

/** ame-text: members **/
[
  [ "editable", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "element", /** element ref **/ 7 ],
  [ "value", /** method **/ 6 ]
],

/** ame-text: host **/
{}

]
)