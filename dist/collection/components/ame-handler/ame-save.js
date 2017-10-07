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
            object[key] = {};
        }
        return this.setPathValue(object[key], path, value);
    };
    AmeSave.prototype.serializeComponentValues = function () {
        var resources = {};
        var elements = document.body.querySelectorAll('[ame-resource][ame-path]');
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
    AmeSave.prototype.handleClick = function (event) {
        var resources = this.serializeComponentValues();
        this.saveReady.emit(resources);
    };
    AmeSave.prototype.render = function () {
        return (h("button", 0, t("Save")));
    };
    return AmeSave;
}());
export { AmeSave };
