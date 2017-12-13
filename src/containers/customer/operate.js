const Operate = {
  /*异步操作*/
  getResponse: (url, data, type) => {
    let promise = new Promise(function(resolve, reject) {
      Operate.Ajax(url, data, type, resolve, reject)
    })
    return promise;
  },
  /*请求操作*/
  Ajax: (url, data, type, resolve, reject) => {
    window.$.ajax({
      type: type,
      url: url,
      data: data,
      success:function(res){
        resolve(res)
      },
      error:function(res){
        resolve(res)
      }
    });
  },
}

export default Operate;