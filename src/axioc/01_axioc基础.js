//发送request请求
axios.request({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "get"
}).then( res => {
    console.log("res:", res.data)
})


//发送get请求
//http://123.207.32.32:9001/lyric?id=500665346
axios.get("http://123.207.32.32:8000/home/multidata",{
    //拼接链接
    params:{
        //http://123.207.32.32:9001/lyric
        //?id=500665346   
        id:500665346   //id拼接
    }
}).then( res => {
    console.log("res:", res.data)
})