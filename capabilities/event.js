var slice = Array.prototype.slice;

module.exports = function(object) {

    if (typeof object.on !== "undefined") {
        return object;
    }

    var listeners = {};

    Object.defineProperty(object, "listeners", {
        value: function(identifier, fnc) {
            listeners[identifier] = listeners[identifier] || [];
            listeners[identifier].push(fnc);

            return object;
        }
    });


    Object.defineProperty(object, "on", {
        value: function(identifier, fnc) {
            listeners[identifier] = listeners[identifier] || [];
            listeners[identifier].push(fnc);

            return object;
        }
    });


    Object.defineProperty(object, "removeListener", {
        value: function(identifier, fnc) {
            if (identifier in listeners === true) {
                listeners[identifier].splice(listeners[identifier].indexOf(fnc), 1);
            }

            return object;
        }
    });


    Object.defineProperty(object, "emit", {
        value: function(identifier, fnc) {
            if (identifier in listeners === true) {
                for (var i = 0; i < listeners[identifier].length; i++) {
                    listeners[identifier][i].apply(object, slice.call(arguments, 1));
                }
            }

            return object;
        }
    });


    return object;

};
