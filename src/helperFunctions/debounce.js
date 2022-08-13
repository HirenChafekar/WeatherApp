export const debounce = function(fn, d, args = []) {
  let timer;
  return function() {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (args.length > 0) fn.apply(context, args);
      else fn.apply(context);
    }, d);
  };
};
