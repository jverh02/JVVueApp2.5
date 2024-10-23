app.component('TaskListCard', {

    data: function() {
        return {
            id: Math.floor(Math.random() * 10e16)
        }
    },
    props: {

        name: {
            type: String,
            default:"Unnamed Assignment"
        },
        description: {
            type: String,
            default:"No Description"
        },
        priority: {
            type: String,
            default: "1"
        },
        itemSteps: {
            type: Array,
            default: new Array([['Step 1',false],['Step 2',false]])
        },
        deadline: {
            type: Date,
            default: new Date("01-01-2001")
        }

    },
    methods: {
        edit() {

        },
        getPriority() {
            switch (this.priority) {
                case "1":
                    return "!";
                case "2":
                    return "!!";
                case "3":
                    return "!!!";
                default:
                    return "PRIORITY NOT FOUND";
            }
        },
        displayDate() {
            return this.deadline.toDateString();
        }
    },


    template: `
     <div class="row text-start">
                    <div class="col">
                        <div class="row">
                            <div class="col-1 pe-0">
                                <span class="badge text-bg-secondary w-100 py-2 px-0 border border-dark">{{this.getPriority()}}</span>
                            </div>
                            <div class="col-4">
                                <h2 class="">{{this.name}}</h2>
                            </div>
                        </div>
                    </div>
                    <p>{{this.description}}</p>
                    <p class="text-muted fw-bold">Deadline: {{this.displayDate()}}</p>

                    <form v-for="step in itemSteps" class="bg-secondary-subtle">
                        <input type="checkbox" v-bind:checked="step[1]" :id="id + ' ' + itemSteps.indexOf(step)">
                        <label v-bind:for="id + ' ' + itemSteps.indexOf(step)">{{step[0]}}</label>
                    </form>

                </div>
                <div class="btn bg-danger text-light float-end mt-3" @click="$emit('delete')">Delete</div>
                <div class="btn btn-primary float-end mt-3" data-bs-toggle="modal" v-bind:data-bs-target="'#edit' + id">Edit</div>
`
})