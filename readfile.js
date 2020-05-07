const fs = require('fs');
const path = require('path');

// 通过回调输出信息 异步读文件方法 一瞬间到方法的最后了就没有返回值  回调两个参数成功失败
// function getFilesByPath($path,callback) {
//     fs.readFile($path,'utf-8',(err,dataStr)=>{
//         if(err) return callback(err) //throw err
//         //return dataStr;
//         callback(null,dataStr)
//     })
// }

// promise 解决回调地狱问题  如果文件多需要嵌套调用
// promise 是个构造函数 可以 new Promise()   失败reject 和 成功resolve 回调函数
// prototype 有个 .then 方法  表示异步操作
// function getFilesByPath($path, success, errCb) {
//     fs.readFile($path, 'utf-8', (err, dataStr) => {
//         if (err) return errCb(err) //throw err
//         //return dataStr;
//         success(dataStr)
//     })
// }

// 需要嵌套
// var ret = getFilesByPath(path.join(__dirname, './refs.html'), (dataStr) => {
//
//     console.log(dataStr + '44444444444444')
//     getFilesByPath(path.join(__dirname, './refs.html'), (dataStr) => {
//
//         console.log(dataStr + '44444444444444')
//     });
// }, function (err) {
//     console.log('失败')
// });

// new 这个对象就已经立即执行了
function readeFile($path) {
    var promise = new Promise(function (reject, resolve) {
        fs.readFile('./refs.html', 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            //return dataStr;
            resolve(dataStr)
        })
    });
    
    return promise;
}

// var p = readeFile();
// p.then(function(data){
//     console.log(data);
// },function (err) {
//     console.log(err);
// });



// readeFile().then(function(data){
//     console.log(data);
// },function (err) {
//     console.log(err);
// });

// 正确的使用方式
readeFile().then(function(data){
    console.log(data);
    return readeFile();
}).then(function(data){
    console.log(data);
    return readeFile();
}).then(function (data) {
    console.log(data);
})