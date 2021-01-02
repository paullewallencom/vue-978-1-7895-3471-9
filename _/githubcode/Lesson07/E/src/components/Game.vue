<template>
    <div>
        <p>I am thinking of a number between 1 and 20.</p>
        <input v-model='guess'>
        <p v-if='guess'>{{output}}</p>
    </div>
</template>

<script>
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default {
    data() {
        return {
            number: getRandomInt(1, 20),
            guess: undefined
        }
    },

    computed: {
        output () {

        if (this.guess > 20 || this.guess < 1) {
            return 'Not even close!'
        }

        if (this.guess < this.number) {
            return 'Higher...'
        }
        if (this.guess > this.number) {
            return 'Lower...'
        }
            return "That's right!"
        }
    }
}
</script>
