const app = new Vue(
    {

        el: '#root',

        data: {
            email: '',
        },



        methods: {



        },



        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    this.email = response.data.response;
                    console.log(this.email);
                    // for (let index = 0; index < 10; index++) {
                    //     result = risultato
                    //     console.log(risultato)

                    // }
                })

        },


    }


);








