<template>
	<div class="login-wrap">
		<div class="login">
			<h1>{{title}}</h1>
			 <Form ref="formInline" :model="formInline" :rules="ruleInline">
		        <FormItem prop="phone">
		            <Input type="text" v-model="formInline.phone" clearable placeholder="Phone">
		                <Icon type="ios-person-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem prop="passwd">
		            <Input type="password" v-model="formInline.passwd" clearable placeholder="Password" @keyup.13="handleSubmit('formInline')">
		                <Icon type="ios-lock-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem>
		            <Button long type="primary" :loading="isLoading" @click="handleSubmit('formInline')">{{btn}}</Button>
		        </FormItem>
		    </Form>
		    <div @click="changeS" class="change">{{change}}<Icon size="16" type="ios-return-right" /></div>
		    <div class="close-login" @click="closeLogin">暂不登录</div>
		</div>
	</div>
</template>

<script>
	import { request } from '../common_js/requestApi.js'
	const isPhone = /^(1)\d{10}$/i
	
	export default {
		data () {
			return {
				title: '登录',
				change: '立即注册',
				btn: 'Signin',
				loginFlag: true,
				isLoading: false,
				formInline: {
					key: '00d91e8e0cca2b76f515926a36db68f5',
                    phone: '',
                    passwd: ''
                },
                ruleInline: {
                    phone: [
                        { required: true, message: 'Please fill in the user phone', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
			}
		},
		methods: {
			handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	if (!isPhone.test(this.formInline.phone)) {
					        this.$Message.error('手机格式错误')
					        return false
					    }
                        this.submit()
                    } else {
                        this.$Message.error('请填完正确的信息!');
                    }
                })
            },
            async submit () {
            	if (this.loginFlag === true) {
            		try {
	            		this.isLoading = true
	            		let data = await request('https://www.apiopen.top/login?', 'get', this.formInline)
	            		this.$Message.success('登录成功!');
	            		this.$emit('isLogin')
	            		sessionStorage.setItem('isLogin', this.formInline.phone)
	            		this.isLoading = false
	            	} catch (e) {
	            		this.isLoading = false
	            	}
            	} else {
            		try {
	            		this.isLoading = true
	            		let data = await request('https://www.apiopen.top/createUser?', 'get', this.formInline)
	            		this.$Message.success('注册成功!');
	            		this.isLoading = false
	            		this.loginFlag = true
	            	} catch (e) {
	            		this.isLoading = false
	            	}
            	}
            },
            changeS () {
            	this.loginFlag = !this.loginFlag
            	this.formInline.phone = ''
            	this.formInline.passwd = ''
            },
            closeLogin () {
            	this.$emit('closeLogin')
            }
		},
		watch: {
			loginFlag(val) {
				if (this.loginFlag === true) {
            		this.title = '登录'
            		this.change = '立即注册'
            		this.btn = 'Signin'
            	} else {
            		this.title = '注册'
            		this.change = '立即登录'
            		this.btn = 'register'
            	}
			}
		}
	}
</script>

<style scoped>
	.login-wrap {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: url(../assets/img/body_bg.jpg) center center repeat;
    	background-size: 100px 100px;
		z-index: 980;
	}
	.login {
		width: 400px;
		height: 260px;
		padding: 24px 24px 0;
		background: #fff;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 981;
		box-sizing: border-box;
		border-radius: 6px;
	}
	.login h1 {
		width: 100%;
		text-align: center;
		margin-bottom: 15px;
	}
	.login .change {
		position: absolute;
		top: 15px;
		right: 15px;
		color: rgb(87,163,243);
	}
	.login .change:hover {
		cursor: pointer;
	}
	.close-login {
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 10px;
		left: 0;
	}
	.close-login:hover {
		cursor: pointer;
	}
</style>