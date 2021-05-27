const app = new Vue(
    {

        el: '#root',

        data: {
            risultato: '',
        },



        methods: {



        },



        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    let result = response.data.response;
                    for (let index = 0; index < 10; index++) {
                        result = risultato
                        console.log(risultato)

                    }
                })

        },


    }


);








