function compose(...fns) {
  return function composed(arg) {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
}
