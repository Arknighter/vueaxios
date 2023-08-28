import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'


createApp(App).mount('#app')

//发送get请求
//http://123.207.32.32:9001/lyric?id=500665346
axios.get("https://6ba25baa-2bef-4c4f-b033-d6901dd0b41f.mock.pstmn.io/test",{
    //拼接链接
    params:{
        //https://6ba25baa-2bef-4c4f-b033-d6901dd0b41f.mock.pstmn.io/test?id=1
        id:1   //id拼接
    }
}).then( res => {
    console.log("res:", res.data)
})