```javascript
window.onload = function () {
var dom  = document.querySelector('div')
var ismove = false;
var startTime;
var finishTime;
dom.ontouchstart = function () {
startTime = Date.now();
}
dom.ontouchmove = function () {
ismove = true
}
dom.ontouchend = function () {
finishTime = Date.now();
if(!ismove && finishTime - startTime < 150){
console.log('tap');


}
ismove  = false;    //ismove 終わった時　いつもfalse
}


}
```

