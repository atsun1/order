<template>
  <div>
     <div>
       {{$store.getters.getNum}}  通过getters
     </div>
     <div>
       {{$store.state.num}}   直接调用
     </div>
     <div>
       {{$store.state.test}}   改变VUEX属性
     </div>
     <div>
       {{com}}  通过computed获得属性
     </div>

     <input type="text" v-model="changenub" >
     <p>{{changenub}}</p>
     <button @click="change(changenub)">修改数值</button>

    <div v-for="(ite,ind) in hlist" :key="ind">
       <p>{{ite.name}},{{ite.age}}</p>
     </div>
    <input type="text" v-model="hname">
    <input type="text" v-model="hage">
    <button @click="pushlist">增加数组</button>
  </div>
</template>

<script>
	export default{
		// beforeRouteEnter (to, from, next) {
		//    // next()
  //      console.log(to,'111111')
  //      console.log(from,'111111')
  //      console.log(next,'111111')
		//   },
    data(){
      return{
        changenub:0,
        hage:0,
        hname:'',
        // hlist:[
        //     {
        //       name:'张三',
        //       age:18,

        //     },
        //     {
        //       name:'张死',
        //       age:18,

        //     },
        //     {
        //       name:'张唔',
        //       age:18,

        //     },
        //     {
        //       name:'张流',
        //       age:18,

        //     }
        // ],
      }
    },
    created(){
      this.$store.commit("settest",'新的属性1')
    },
    computed:{
      com(){
        console.log('调用')
        return this.$store.state.test
      },
      hlist(){
        return this.$store.state.list
      }
    },
    methods:{
      change(e){
        console.log(e)
        // this.$store.commit("settest",changenub)
      },
      pushlist(){
        // this.hlist.push({name:this.hname,age:this.hage})
        console.log(this.hlist)
        this.$store.commit("setlist",{name:this.hname,age:this.hage})
      }
    }
	}
</script>

<style>
</style>
