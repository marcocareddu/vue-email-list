console.log('Vue OK', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const { createApp } = Vue;

const app = createApp({
    data() {
        return {

        }
    }
});

// mount
app.mount('#root');