console.log('Vue OK', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const { createApp } = Vue;

const app = createApp({

    // App name
    name: 'Email list',

    data() {
        return {
            emails: [],
            listItems: 10,
        }
    },

    methods: {

        // Generate emails list from api boolean
        createEmailsList() {
            for (let i = 0; i < this.listItems; i++) {
                axios.get(endpoint)
                    .then((res) => {
                        const newEmail = res.data.response;
                        this.emails.push(newEmail);
                    })
            }
        },
    },

    mounted() {

        // Create emails array at loading page
        this.createEmailsList()
    }
});

// mount
app.mount('#root');