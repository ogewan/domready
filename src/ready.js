/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
 domready=((definition) => {

  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd == 'object') define(definition)
  return definition();

})(() => {

  var fns = [], listener
    , doc = typeof document === 'object' && document
    , hack = doc && doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded && doc)
  doc.addEventListener(domContentLoaded, listener = () => {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return fn => {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});
