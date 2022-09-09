const app = Vue.createApp({
    data() {
        return {
            name: 'joe',
            good: false,
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 66],
            message: 'Hello World',
            items: ['a', 'b', 'c', 'd', 'e'],
            inputValue: "",
            places: [
                "melbourne",
                "sydney",
                "brisbane",
                "perth",
                "adelaide"
            ],
            properties:
                [
                    { id: 1, name: "house", price: 100000, sold: false },
                    { id: 2, name: "apartment", price: 200000, sold: true },
                    { id: 3, name: "townhouse", price: 300000, sold: false },
                    { id: 4, name: "unit", price: 400000, sold: true }
                ],
        }
    },
    methods: {
        firstMethod() {
            alert("dont click me");
        },

        secondMethod(inlineHandler) {
            alert(inlineHandler);
        },

        thirdMethod() {
            this.name = "Dick";
            this.count = 100;
        },

        fourthMethod(msg, event) {
            if (event) {
                event.preventDefault();
            }
            alert(msg)
        },
    },

    computed: {
        placesVisited() {
            return this.places.length > 0 ? "yes" : "no";
        },
        timeNow() {
            return Date.now();
        },
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0);
        }
    }




});


app.mount('#app11')