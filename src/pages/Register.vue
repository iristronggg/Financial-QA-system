<template>
<v-container>
    <v-main>
    <div class="register">
        <section class="section">
        <div class="container">
            <v-toolbar-title><strong>註冊</strong></v-toolbar-title>
            <v-card-text style="margin-top: 20px;">
            <v-form>
            <div class="field">
                <label class="label is-large" for="email"></label>
                    <v-text-field outlined label="Email (登入用)" name="email" type="email" class="input is-large" id="email" prepend-icon="mdi-email" v-model="email"></v-text-field>
            </div>
            <div class="field">
                <label class="label is-large" for="password"></label>
                <div class="control">
                    <v-text-field outlined prepend-icon="mdi-lock" label="Password" name="password" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'" hint="At least 8 characters" class="input-group--focused" @click:append="show3 = !show3"
                    v-model="password"></v-text-field>
                </div>
            </div>
            <div class="field">
                <label class="label is-large" for="username"></label>
                    <v-text-field outlined label="Username (自由設定)" name="username" class="input is-large" id="username" prepend-icon="mdi-account" v-model="username"></v-text-field>
            </div>
            <div class="text-center">
                <v-btn style="margin: 5px;" @click="register">Register</v-btn>
            </div>
            </v-form>
            </v-card-text>
        </div>
        </section>
    </div>
    </v-main>
    </v-container>
</template>

<script>
export default {
    name: 'Register',
    data: () => ({
        email: '',
        password: '',
        usernmae: '',
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
        register() {
            console.log('registering...');
            console.log(this.email);
            this.axios({
                method: 'post',
                url: 'http://127.0.0.1:5020/register',
                data: {
                    email: this.email,
                    password: this.password,
                    username: this.username,
                },
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                            // eslint-disable-next-line
                            console.log(error);
                });
            this.$router.push({ path: '/login' });
            // query 帶參數過去
            // https://router.vuejs.org/zh/guide/essentials/navigation.html
        },
    },
};
</script>

<style scoped>
.register {
    width: 800px;
    height: 500px;
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
