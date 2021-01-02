
<template>
    <div>
        <p>{{greeting}}</p>
        <button @click='toItalian'>Ciao Mondo!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'Hello'
        }
    },
    methods: {
        toItalian() {
            this.greeting = 'Ciao Mondo!'
        }
    }   
}
</script>
