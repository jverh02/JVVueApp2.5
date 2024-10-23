app.component('TaskList', {

    data: function() {
        return {
            id: Math.floor(Math.random() * 10e16),
        }

    },

    props: {
        tasks: Array
    },

    methods: {
        addTask: function(item) {
            this.tasks.push(item);
        },

    },

    computed: {

    },

    template: `
    <ul class="list-group list-group-flush border bottom">
            <li class="list-group-item bg-dark-subtle border border-dark" v-for="task in tasks">
                <task-list-item
                        :name="task.name",
                        :description = "task.description",
                        :priority="task.priority",
                        :item-steps="task.steps"
                        :deadline="task.deadline"
                        @delete="tasks.splice(tasks.indexOf(task), 1)"></task-list-item>

            </li>
            
        </ul>
    `,

});