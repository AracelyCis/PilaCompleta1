<template>
  <div class="row">
    <div v-for="note in notes" :key="note._id" class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title d-flex justify-content-between align-items-center">
            {{ note.title }} <router-link :to="'/notes/edit/' + note._id"><i class="fas fa-edit"></i></router-link>
          </h4>
          <p>{{ note.description }}</p>
          <!-- DELETE REQUEST -->
          <form @submit.prevent="deleteNote(note._id)">
            <button type="submit" class="btn btn-danger btn-block btn-sm">Delete</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="notes.length === 0" class="card mx-auto">
      <div class="card-body">
        <h1>Hello {{ user.name }}</h1>
        <p class="lead">There are no notes yet.</p>
        <router-link to="/notes/add" class="btn btn-success btn-block">Create One!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array, // Assuming 'notes' is a prop passed to this component
    user: Object // Assuming 'user' is a prop passed to this component
  },
  methods: {
    deleteNote(noteId) {
      // Handle delete logic here, for example, by emitting an event to the parent component
      this.$emit('deleteNote', noteId);
    }
  }
};
</script>

<script>
import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';

const wrapper = document.createElement('div');
// estado compartido
const estado = {
  nota: 0,
};
// crear componente en contenido
const ComponenteCalif = Vue.extend({
  data() {
    return {
      calif: 0,
    };
  },
  watch: {
    calif(nuevoValor) {
      estado.nota = nuevoValor;
    },
  },
  template: `
    <div class="rating">
      ¿Qué te pareció la reseña?
      <star-rating v-model="calif" :show-rating="false"></star-rating>
    </div>   
  `,
  components: {
    'star-rating': StarRating,
  },
});

const componente = new ComponenteCalif().$mount(wrapper);

export default {
  name: 'Titulo',
  data() {
    return {
      pelicula: [],
    };
  },
  mounted() {
    this.title();
  },
  methods: {
    async calificar() {
      this.$swal({
        content: componente.$el,
        buttons: {
          confirm: {
            value: 0,
          },
        },
      })
        .then(() => {
          const title = this.$route.params.title;
          return axios({
            method: 'post',
            data: {
              calif: estado.nota,
            },
            url: `http://localhost:8081/books/title/${title}`,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(() => {
              this.$swal(`¡Gracias por calificar! ${estado.nota}`, 'success');
            })
            .catch((error) => {
              const mensaje = error.respuesta.data.message;
              this.$swal('Oh no puede ser!', `${mensaje}`, 'error');
            });
        });
    },
    async obtenerTitulo() {
      return axios({
        method: 'get',
        url: `http://localhost:3000/api/title/${this.route.params.title}`,
      })
        .then((respuesta) => {
          this.titulo = respuesta.data;
        })
        .catch(() => {

        });
    },
  },
};
</script>

