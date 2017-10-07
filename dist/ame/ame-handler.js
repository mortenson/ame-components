/*! Built with http://stenciljs.com */
ame.loadComponents(

/**** module id (dev mode) ****/
"ame-handler",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var AmeHandler = /** @class */ (function () {
    function AmeHandler() {
    }
    AmeHandler.prototype.save = function () {
        var resources = this.prepareResources();
        this.saveComplete.emit(resources);
    };
    AmeHandler.prototype.setPathValue = function (object, path, value) {
        var key = path.shift();
        if (path.length === 0) {
            object[key] = value;
            return object;
        }
        else if (!(key in object)) {
            object[key] = {};
        }
        return this.setPathValue(object[key], path, value);
    };
    AmeHandler.prototype.prepareResources = function () {
        var resources = {};
        var selector = '[ame-resource][ame-path][ame-handler="' + this.handlerName + '"]';
        var elements = document.body.querySelectorAll(selector);
        for (var i = 0; i < elements.length; ++i) {
            if ('value' in elements[i] && typeof elements[i].value === 'function') {
                var path = elements[i].getAttribute('ame-path');
                var key = elements[i].getAttribute('ame-resource');
                if (!(key in resources)) {
                    resources[key] = {};
                }
                this.setPathValue(resources[key], path.split('.'), elements[i].value());
            }
        }
        return resources;
    };
    AmeHandler.prototype.render = function () {
        return (h("span", 0));
    };
    return AmeHandler;
}());

exports['AME-HANDLER'] = AmeHandler;
},


/***************** ame-handler *****************/
[
/** ame-handler: tag **/
"AME-HANDLER",

/** ame-handler: members **/
[
  [ "handlerName", /** prop **/ 1 ],
  [ "save", /** method **/ 6 ]
],

/** ame-handler: host **/
{},

/** ame-handler: events **/
[
  [
    /*****  ame-handler saveComplete ***** /
    /* event name ***/ "saveComplete"
  ]
]

]
)