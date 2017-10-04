var AmeSave = /** @class */ (function () {
    function AmeSave() {
    }
    AmeSave.prototype.setPathValue = function (object, path, value) {
        var key = path.shift();
        if (path.length === 0) {
            object[key] = value;
            return object;
        }
        else if (!(key in object)) {
            object[key] = [];
        }
        return this.setPathValue(object[key], path, value);
    };
    AmeSave.prototype.serializeComponentValues = function () {
        var resources = [];
        var elements = document.body.querySelectorAll('[ame-resource]');
        for (var i = 0; i < elements.length; ++i) {
            if ('value' in elements[i] && typeof elements[i].value === 'function') {
                var split = elements[i].getAttribute('ame-resource').split('/');
                var path = split.pop();
                var key = split.join('/');
                if (!(key in resources)) {
                    resources[key] = [];
                }
                this.setPathValue(resources[key], path.split('.'), elements[i].value());
            }
        }
        console.log(resources);
    };
    AmeSave.prototype.handleClick = function (event) {
        this.serializeComponentValues();
    };
    AmeSave.prototype.render = function () {
        return (h("button", 0, t("Save")));
    };
    return AmeSave;
}());
export { AmeSave };
