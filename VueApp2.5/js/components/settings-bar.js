app.component('SettingsBar', {

    data: function() {
        return {}
    },
    props: {

    },

    methods: {
    },
    emits: ['sort'],

    template: `
     <nav class="navbar navbar-expand-sm ">
        <a class="navbar-brand px-2" href="#"><i class="bi bi-clipboard-check"></i> TaskTracker</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <div class="container-fluid nav">
                <ul class="navbar-nav ms-auto my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-light" data-bs-toggle="modal" data-bs-target="#addnew" role="button"
                           aria-expanded="false">Add Assignment</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">Sort</a>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" @click="sortAssignments('prio')" href="">Priority</button></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="">Due Date</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    `

})