<template>

        <v-container
                class="fill-height"
                fluid
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        cols="12"
                        sm="8"
                        md="4"
                >
                    <v-card class="elevation-12">
                        <v-toolbar
                                color="primary"
                                dark
                                flat
                        >
                            <v-toolbar-title>Регистрация</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>

                            <v-alert
                                    :value="error"
                                    type="warning">
                                {{error}}
                            </v-alert>

                            <v-form v-model="valid">
                                <v-text-field
                                        label="E-mail"
                                        name="login"
                                        prepend-icon="person"
                                        type="mail"
                                        v-model="email"
                                        :rules="emailRules"
                                        required
                                ></v-text-field>

                                <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="lock"
                                        type="password"
                                        v-model="password"
                                        :rules="passwordRules"
                                        required
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click.prevent="signup" :disabled="processing || !valid">Зарегистрироваться</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

</template>

<script>
    export default {
       /* props: {
            source: String,
        },*/
        name: "Signup",
        data(){
            return{
                email: null,
                password: null,
                valid: false,

                emailRules: [
                    (v) => !!v || 'Пожалуйста введите емайл',
                    // (v) => /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/.test(v) || 'Неправильный емайл'
                    (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный емайл'
                ],
                passwordRules: [
                    (v) => !!v || 'Пожалуйста введите пароль',
                    (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
                ]
            }
        },
        computed:{
            error(){
                return this.$store.getters.getError;
            },
            processing(){
                return this.$store.getters.getProcessing;
            },
            isUserAuthenticated(){
                console.log('this.$store:', this.$store);
                console.log('this.$store.getters:', this.$store.getters);
                return this.$store.getters.isUserAuthenticated;
            }
        },
        watch:{
            isUserAuthenticated(val){
                if(val === true)
                    console.log('this.$router:', this.$router);
                    this.$router.push("/") /*переход на главную страницу после успешной регистрации*/
            }

        },
        methods:{
            signup(){
                this.$store.dispatch('SIGNUP', {
                    email: this.email,
                    password: this.password
                });
                /*this.email = null;
                this.password = null;*/
            }
        }
    }
</script>

<style scoped>

</style>