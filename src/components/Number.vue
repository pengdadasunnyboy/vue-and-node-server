<template>
  <div class="hello">
       <h1>{{msg}}</h1>
       <p>{{el}}</p>
       <form>
           <el-input v-model="name" placeholder="名称" style="width:200px"></el-input>
           <el-input v-model="price" placeholder="价格" style="width:200px"></el-input>
           <el-input v-model="sex" placeholder="称重" style="width:200px"></el-input>
           <el-button type="primary" @click="addUser">提交</el-button>
      </form>
       
  </div>
</template>

<script>
import {postNum} from '../api/locate'
export default {
  name: 'number',
  data(){
    return{
      msg:'Welcome to Your Vue',
      name:'',
      price:'',
      el:'',
      sex:''
    }
  },
  methods:{
    addUser(){
      let param = {
           name : this.name,
           price : this.price,
           sex : this.sex
      } 
      postNum(param).then(response =>{
        console.log(response);
        if(response.data == '添加成功'){
              alert(response.data);
              this.name = this.price = this.sex = "";
          }
      })
      .catch(error =>{
        console.log(error)
      })
      /* this.$http.post('/api/user/addUser',{
        name:name,
        price:price
      },{emulateJSON:true}).then((response) => {
        console.log(response);
      }).catch(() => {
         console.log("服务器异常");
      })  */
    },
    aaa(){
      this.el = "成功引入element";
    }
  }
}
</script>

<style>

</style>
