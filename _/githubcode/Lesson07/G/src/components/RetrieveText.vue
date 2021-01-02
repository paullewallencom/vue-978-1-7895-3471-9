<template>
    <div>
        <button @click='retrieve'>Retrieve Post</button>
        <p v-if='post'>{{post}}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: undefined
        }
    },

    methods: {
        retrieve () {
            axios
                .get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    this.post = response.data.body
                })
        }
    }
    
}
</script>