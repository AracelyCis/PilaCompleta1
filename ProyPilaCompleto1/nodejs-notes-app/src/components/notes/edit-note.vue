<template>
  <div>
    <div v-for="error in errors" :key="error.id" class="alert alert-danger alert-dismissible fade show" role="alert">
      {{ error.text }}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="dismissError(error.id)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="col-md-4 mx-auto">
      <div class="card">
        <div class="card-header text-center">
          <h3>Edit Note</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="editNote">
            <div class="mb-3">
              <label for="title">Title:</label>
              <input v-model="note.title" type="text" name="title" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="description">Description:</label>
              <textarea v-model="note.description" name="description" class="form-control"></textarea>
            </div>
            <button class="btn btn-primary w-100" type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [], // Assuming 'errors' is a data property
      note: {
        _id: '', // Assuming you have the note ID available
        title: '',
        description: '',
      },
    };
  },
  methods: {
    dismissError(id) {
      this.errors = this.errors.filter(error => error.id !== id);
    },
    editNote() {
      // Handle the logic to submit the edited note, and handle errors if any
      // You can use an API call, emit an event, or any other mechanism based on your setup
    },
  },
};
</script>
