function MvvmDemo(options = {}) {
  this.$options = options;
  
  var data = this._data = this.$options.data
  
  observe (data)
  //this代理了ｔｈｉｓ．＿ｄａｔａ
  for (var prop in data) {
    
    Object.defineProperty(this, prop,{
      enumerable:true,
      get(){
        return this._data[prop]
      },
      set(newVal){
        this._data[prop]=newVal
      }
    })
  }
  
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
          return ;
        }
        val =newVal
      }
    })
  }
  
}


function observe(data) {
  return new Observe (data)
}


