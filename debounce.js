

function debounce(fn, time, triggerNow){
    var t  = null
  var debounce = function(){
    var _self = this
    var args = arguments
    if(t){
        clearTimeout(t)
    }
    if(triggerNow){
        var exec = !t
        t = setTimeout(() => {
            t = null
            
        },time);
    }
    if(exec){
        fn.apply(_self, args)
    }else{
        t = setTimeout(() => {
         fn.apply(_self, args)
            
        }, time);
    }
  }
  debounce.remove = function(){
    clearTimeout(t)
    t = null
  }

  return debounce
}