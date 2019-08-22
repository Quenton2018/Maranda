<template>
	<div class="login-wrap">
		<div class="login">
			<h1>{{title}}</h1>
			 <Form ref="formInline" :model="formInline" :rules="ruleInline">
		        <FormItem prop="user">
		            <Input type="text" v-model="formInline.user" placeholder="Username">
		                <Icon type="ios-person-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem prop="password">
		            <Input type="password" v-model="formInline.password" placeholder="Password">
		                <Icon type="ios-lock-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem>
		            <Button long type="primary" @click="handleSubmit('formInline')">Signin</Button>
		        </FormItem>
		    </Form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: '注册',
				formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
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
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
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
</style>