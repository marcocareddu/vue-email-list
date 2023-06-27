console.log('Vue OK', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const { createApp } = Vue;

const app = createApp({

    // App name
    name: 'Email list',

    data() {
        return {
            emails: [],
            listItems: null,
        }
    },

    methods: {

        // Generate emails list from api boolean
        createEmailsList() {
            this.emails = [];
            for (let i = 0; i < this.listItems; i++) {
                axios.get(endpoint).then((res) => { this.emails.push(res.data.response); })
            }
        },
    },
});

// mount
app.mount('#root');