<template>
<v-container>
    <v-main>
    <div class="login">
        <section class="section">
        <div class="container">
            <v-toolbar-title><strong>已登出</strong></v-toolbar-title>
            <v-card-text style="margin-top: 20px;">
            <v-icon>mdi-source-commit-start-next-local</v-icon>   沒有帳號？<a href="/#/register">點我</a>註冊。
            </v-card-text>
        </div>
        </section>
    </div>
    </v-main>
    </v-container>
</template>

<script>
export default {
    name: 'Logout',
    data: () => ({
        email: '',
        password: '',
        proccessing: false,
        message: '',
        show3: false,
        rules: {
          required: (value) => !!value || 'Required.',
          min: (v) => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }),
    methods: {
        authenticate() {
            console.log('enter button');
            console.log(this.email);
            this.axios({
                method: 'post',
                url: 'http://127.0.0.1:5020/login',
                data: {
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                            // eslint-disable-next-line
                            console.log(error);
                });
            this.$router.push({ path: '/admin/askQuestionsChooseCompany' });
            // query 帶參數過去
            // https://router.vuejs.org/zh/guide/essentials/navigation.html
        },
    },
};
</script>

<style scoped>
.login {
    width: 500px;
    height: 450px;
    border: 1px solid #cccccc;
    background-color: white;
    border-radius: 5px;
    opacity: 0.85;
    margin: auto;
    margin-top: 80px;
    padding: 20px;
}
.input-form {
    margin-bottom: 9px;
}
</style>
