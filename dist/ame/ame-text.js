/*! Built with http://stenciljs.com */
ame.loadComponents(

/**** module id (dev mode) ****/
"ame-text",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
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

exports['AME-TEXT'] = AmeText;
},


/***************** ame-text *****************/
[
/** ame-text: tag **/
"AME-TEXT",

/** ame-text: members **/
[
  [ "editable", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "editing", /** state **/ 5 ],
  [ "text", /** prop **/ 1 ]
],

/** ame-text: host **/
{}

]
)