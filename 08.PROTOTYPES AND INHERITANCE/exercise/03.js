//3. Extensible Object
function solve() {
    const proto = {};
    const instance = Object.create(proto);
    instance.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            }
            instance[key] = value;
        });
    };
    return instance;
};