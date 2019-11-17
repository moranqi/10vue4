<template>
    <div class="register">
        <h3>用户注册</h3>
        <p>
            <Input prefix="ios-contact" v-model="username" placeholder="请输入用户名"
                   class="input" @on-blur="validateUser()"/>
            <span class="err">{{errmsg1}}</span>
        </p>
        <p>
            <Input prefix="ios-lock" v-model="password" placeholder="请输入密码"
                   class="input" @on-blur="validatePass()"/>
            <span class="err">{{errmsg2}}</span>
        </p>
        <p>
            <Input prefix="ios-lock" v-model="passagain" placeholder="请再次确认密码"
                   class="input" @on-blur="validatePass2()"/>
            <span class="err">{{errmsg3}}</span>
        </p>
        <p>
            <Button type="primary" class="btn" @click="doRegister()">注册</Button>
            <Button type="primary" class="btn">重置</Button>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Register",
        data(){
            return{
                username:'',
                password:'',
                passagain:'',
                errmsg1:'',
                errmsg2:'',
                errmsg3:''
            }
        },
        methods:{
            validateUser(){
                let valid=true;
                if (this.username==''){
                    this.errmsg1='用户名不能为空';
                    valid=false;
                }
                else {
                    axios.get('http://localhost:8080/api/isexist',{params:{username:this.username}})
                        .then((res)=>{
                            if (res.data){
                                this.errmsg1='用户名已存在'
                                valid=false;
                            }
                        })
                }
                if(valid==true)
                    this.errmsg1='';
                return valid;
            },
            validatePass(){
                let valid = true;
                if(this.password==''){
                    this.errmsg2='密码不能为空';
                    valid=false;
                }
                else{
                    var reg=new RegExp(/^\w{6,16}$/)
                    valid = reg.test(this.password);
                    if(!valid)
                        this.errmsg2='密码需要6-16位字符'
                }
                if (valid)
                    this.errmsg2='';
                return valid;
            },
            validatePass2(){
                let valid=true;
                if(this.passagain==''){
                    valid=false;
                    this.errmsg3='请输入确认密码';
                }
                else {
                    if(this.passagain!=this.password){
                        valid=false;
                        this.errmsg3='两次密码不一致'
                    }
                }
                if (valid)
                    this.errmsg3='';
                return valid;

            },
            validate(){
                let validate1=this.validateUser();
                let validate2=this.validatePass();
                let validate3=this.validatePass2();
                return validate1&&validate2&&validate3;
            },
            doRegister(){
                if(this.validate()){
                    axios.post('http://ocalhost:8080/api/register',{username:this.username,password:this.password})
                        .then((res)=>{
                            if(res.data){
                                alert("注册成功，将跳转到登录页面");
                                this.$router.push('/login');
                            }
                        })
                }
            }

        }
    }
</script>

<style scoped>

</style>