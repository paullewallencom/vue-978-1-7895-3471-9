
<template>
    <div>
        <p>{{greeting}}</p>
        <button @click='toItalian'>Ciao Mondo!</button>
        <input id='name' v-model='name'>
        <p id='output'>{{name}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'Hello',
            name: ''
        }
    },
    methods: {
        toItalian() {
            this.greeting = 'Ciao Mondo!'
        }
    }   
}
</script>
