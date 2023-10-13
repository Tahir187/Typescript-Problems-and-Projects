var make_shirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return ("Shirt size is ".concat(size, ", ").concat(message));
};
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small"));
