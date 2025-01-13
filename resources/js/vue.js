import './bootstrap';
import '../scss/app.scss';
import { createApp } from 'vue';
import {router} from './router';

// Components
import app from "./src/components/App.vue";

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */
createApp(app)
  .use(router)
  .mount('#app')
