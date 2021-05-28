const app = new Vue(
    {

        el: '#root',

        data: {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',

            listEmail: [

            ],
        },



        methods: {



        },



        mounted() {

            for (let index = 0; index < 10; index++) {

                axios
                    .get(this.url)
                    .then(response => {
                        this.listEmail.push(response.data.response)

                    })


            }

        },


    }


);








