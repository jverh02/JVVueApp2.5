app.component('EditItemMenu', {
    props:{
        id:String,
        editItem:Object,
        newName:String,
        newDescription:String,
        newPriority:String,
        newSteps:Array,
        newDeadline:Date
    },
    methods: {
        toggle() {
            this.classList.toggle('show');
        }
    },
    template: `
    <div class="modal" :id='this.id' tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    `
})