<template>
     <div id="app">
        <el-button type="primary" @click="selectUser">查询</el-button>
        <!-- <ul>
            <li v-for="(item,index) in showList" :key="index">{{item}}</li>
        </ul> -->
        <template>
            <el-table
               :data="showList"
               style="width:100%">
               <el-table-column
                  type="index"
                  label="id"
                  width="300">
               </el-table-column>
               <el-table-column
                  prop="id"
                  label="id"
                  width="300"
                  v-if="show">
               </el-table-column>
               <el-table-column
                  prop="name"
                  label="姓名"
                  width="300">
               </el-table-column>
               <el-table-column
                  prop="price"
                  label="价格"
                  width="300">
               </el-table-column>
               <el-table-column
                  prop="sex"
                  label="称重"
                  width="300">
               </el-table-column>
               <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.$index + 1,scope.row.id)" type="danger" size="small" >删除</el-button>
                    <el-button @click="update()" type="primary" size="small">编辑</el-button>
                </template>
                </el-table-column>
            </el-table> 
        </template>
     </div>
</template>

<script>
import {getAll, delNum} from '../api/locate'
export default {
    name:'missing',
    data(){
         return{
             showList:[],
             show:false
         }  
    },
    methods:{
        selectUser(){
            getAll().then(response => {
                console.log(response)
                this.showList = response.data
            })
            .catch(error => {
                console.log(error)
            })

            /* console.log(this.showList);
            this.$axios.get('/api/user/userAll')
            .then(response =>{
                console.log(response);
                this.showList = response.data
            })
            .catch(error =>{
                console.log(error);
            }) */
        },
        handleClick(num,id){
            //alert(id);
            delNum({id:id}).then(response => {
                console.log(response)
                if(response.data == '删除成功'){
                    alert(response.data);
                    this.selectUser();
                    this.showList = this.showList.splice(id,1)
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
#app{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    background: url(./../assets/login.jpeg) no-repeat;

}
</style>
