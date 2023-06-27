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
            isLoading: false,
        }
    },

    methods: {

        // Generate emails list from api boolean
        createEmailsList() {
            this.isLoading = true;
            this.emails = [];
            for (let i = 0; i < this.listItems; i++) {
                axios.get(endpoint).then((res) => { this.emails.push(res.data.response); })
            }
            this.isLoading = false;
        },
    },
});

// mount
app.mount('#root');