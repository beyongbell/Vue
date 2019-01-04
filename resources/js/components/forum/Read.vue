<template>
    <div v-if="question">
        <edit-question :data="question" v-if="editing"></edit-question>
        <show-question :data="question" v-else></show-question>
        <v-container>
            <replies :question="question"></replies>
            <new-reply :QuestionSlug="question.slug"></new-reply>
        </v-container>
    </div>
</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../reply/Replies'
import NewReply from '../reply/NewReply'
export default {
    components: {ShowQuestion,EditQuestion,Replies,NewReply},
    data(){
        return {
            question:null,
            editing:false
        }
    },
    created(){
        this.listen()
        this.getQuestion()
    },
    methods: {
        listen(){
            EventBus.$on('startEditing', () => {
                this.editing = true
            })
             EventBus.$on('cancelEditing', () => {
                this.editing = false
            })
        },
        getQuestion() {
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }
}
</script>

<style>

</style>
