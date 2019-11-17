<template>
    <div>
        <h3>用户登录</h3>
        <p>
            <Input prefix="ios-contact" v-model="username" placeholder="请输入用户名" class="input"/>
        </p>
        <p>
            <Input prefix="ios-lock" v-model="password" type="password" placeholder="请输入密码" class="input"/>
        </p>
        <p><Checkbox v-model="save">登录名和密码保留一周</Checkbox></p>
        <p>
            <Button type="primary" class="btn" @click="doLogin()">登录</Button>
            <Button type="primary" class="btn" to="/register">注册</Button>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data(){
            return{
             username:'',
             password:'',
             save:false
            }
        },
        methods:{
            doLogin(){
                axios.post('http://localhost:8080/api/login',{username:this.username,password:this.password})
                    .then((res)=>{
                        if (res.data)
                            this.$router.push('/productlist');
                        else {
                            alert('用户名或密码错误，请重新输入');
                            this.username='';
                            this.password='';
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>