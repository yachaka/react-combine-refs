
function combineRefs() {
  var args = Array.prototype.slice.call(arguments);

  return function combinedRefCallback(el) {
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];

      if (typeof arg === 'function') {
        arg(el);
      } else if (typeof arg === 'object' && arg !== null && arg.hasOwnProperty('current')) {
        arg.current = el;
      } else if (arg === null) {
        // No-op
      } else {
        console.warn('[react-combine-refs] Ref argument is neither an object with a .current property or a function. This is a no-op.');
      }
    }
  };
}

module.exports = combineRefs;
