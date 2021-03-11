const app = Vue.createApp({
    data(){
        return{
            url: 'https://www.google.com',
            showBooks: true,
            books:[
                {title: 'Name of the wind', author: 'Patrick Rothfuss', age: 45, img: 'assets/1.jpg', isFav: true},
                {title: 'The way of king', author: 'Brandon Sanderson', age: 38, img: 'assets/2.jpg', isFav: true},
                {title: 'The final empire', author: 'Brandon Sanderson', age: 45, img: 'assets/3.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
        setAllFav(){
            this.books.forEach(item => {
                item.isFav = true
            });
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')