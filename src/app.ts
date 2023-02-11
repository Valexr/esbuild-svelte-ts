import { name } from 'package.json'
import App from './App.svelte';

var app = new App({
    target: document.body,
    props: { name }
});

export default app;