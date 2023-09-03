<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},

        }
    },
    methods: {
        sendEmail() {
            const data = {
                name: this.name,
                email: this.email,
                description: this.message
            }

            //PULISCO L'ARRAY DEGLI ERRORI
            this.errors = {};

            axios.post(`${this.store.basicUrl}/api/contacts/`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                }
                else {
                    //PULISCO I DATI IN INPUT
                    this.name = '';
                    this.email = '';
                    this.message = '';

                    this.$router.push({ name: 'thanks' })
                }
            });
        },
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="col-12 text-center">
                <h1 class="text-center my-3">Contattaci</h1>
            </div>
            <div class="row">
                <div class="col-12 card p-5">
                    <form @submit.prevent="sendEmail()" class="row">
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Nome e Cognome</label>
                            <input type="text" name="name" id="name" v-model="name"
                                placeholder="Inserisci il tuo nome e cognome" class="form-control"
                                :class="errors.name ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="email">Email</label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="email@example.com"
                                class="form-control" :class="errors.email ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Messaggio</label>
                            <textarea name="message" id="message" v-model="message"
                                placeholder="Scrivi un messaggio da inviare" class="form-control"
                                :class="errors.description ? 'is-invalid' : ''"></textarea>
                            <p v-for="(error, index) in errors.description" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12  my-3">
                            <button class="btn btn-sm btn-success" type="submit">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>