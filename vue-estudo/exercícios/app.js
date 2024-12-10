new Vue ({
    el: '#desafio',
    data: {
        nome: 'Pedro',
        idade: '25',
        imagem: 'https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_640.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})