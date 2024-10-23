app.component('AddItemMenu', {
    props:{
        uid:String,
        newName:{
            type:String,
            default:"Assignment"
        },
        newDescription: {
            type:String,
            default:"Description"
        },
        newPriority:{
            type:String,
            default:"1"
        },
        newSteps:{
            type:Array,
            default:[["Step 1", false]]
        },
        newDeadline:{
            type:Date,
            default: new Date("01-01-2001")
        }
    },
    methods: {

    },
    template: `
    <div :id = "'' + uid" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('toggle')">Close</button>
        <button type="button" class="btn btn-primary" @click="$emit('add', new Object(newName,newDescription,newPriority,newSteps,newDeadline))">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    `
})