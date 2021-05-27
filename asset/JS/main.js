const app = new Vue(
    {

        el: '#root',

        data: {
            email: '',
            listEmail: [

            ],
        },



        methods: {



        },



        mounted() {

            for (let index = 0; index < 10; index++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {

                        this.email = response.data.response;
                        this.listEmail.push(this.email)



                    })
            }

        },


    }


);








