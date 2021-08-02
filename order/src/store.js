import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state:{
    // 设置属性
    num:10,
    test:'',
    list:[
      {
        name:'张三',
        age:18,

      },
      {
        name:'张死',
        age:18,

      },
      {
        name:'张唔',
        age:18,

      },
      {
        name:'张流',
        age:18,

      }
    ]
  },
  getters:{
    // 获取属性状态
    getNum(state){
    	return state.num
    }
  },
  mutations:{
    // 改变属性状态
    settest(state,data){
      state.test = data
    },
    setlist(state,data){
      state.list.push(data)
    }

  },
  actions:{
    // 应用Mutations
    setlistaync(context,data){
      setTimeout( ()=>{
        context.commit("setlist",data)
      },1000)
      
    }
  }
})
