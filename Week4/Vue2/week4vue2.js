Vue.component('new-div', {

    props: ['todo'],
    template: '<li>{{todo.text}}</li>'

})



const app22=new Vue({
    el: '#app22',
    data: {
        message: "Hello Vue22!" , 
        message2: "Dumb" ,
        message3: "said" ,
        check: false,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],

        animals:[
            {name: 'cat', sound: 'meow'},
            {name: 'dog', sound: 'woof'},
            {name: 'cow', sound: 'moo'},
            {name: 'pig', sound: 'oink'},
            {name: 'duck', sound: 'quack'}
        ]
    }
})
 

