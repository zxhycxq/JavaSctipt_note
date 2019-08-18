function MvvmDemo(options = {}) {
  this.$options = options;
  
  var data = this._data = this.$options.data
  
  observe (data)
  //this代理了ｔｈｉｓ．＿ｄａｔａ
  for (var prop in data) {
    
    Object.defineProperty (this, prop, {
      enumerable: true,
      get() {
        return this._data[prop]
      },
      set(newVal) {
        this._data[prop] = newVal
      }
    })
  }
  new Complie (options.el, this)
}

function Complie(el, vm) {
  vm.$el=document.querySelector (el);
  var fragment = document.createDocumentFragment ()
  while (child = vm.$el.firstChild) {
    fragment.appendChild (child)
  }
  replace (fragment)
  
  function replace(fragment) {
    Array.from (fragment.childNodes).forEach (function (node) {
      var test = node.textContent;
      let reg = /\{\{(.*)\}\}/;
      if (node.nodeType === 3 && reg.test (test)) {
        console.log (`%c--reg-- `, 'color:blue;', RegExp.$1)
        let arrs = RegExp.$1.split ('.') //[a,a]
        let val = vm;
        arrs.forEach (function (k) {
          val = val[k]
        });
        
        node.textContent = test.replace (/\{\{(.*)\}\}/, val)
      }
      if (node.childNodes) {
        replace (node)
      }
    })
  }
  
  
  vm.$el.appendChild (fragment)
}

function Observe(data) {
  for (var prop in data) {
    let val = data[prop]
    Object.defineProperty (data, prop, {
      enumerable: true,
      get() {
        return val
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal
      }
    })
  }
  
}


function observe(data) {
  if (typeof data != 'object') return
  return new Observe (data)
}


