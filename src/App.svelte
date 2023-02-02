<script lang="ts" context="module">
    import type { Header } from "$types";
</script>

<script lang="ts">
    let header: Header = "esbuild-svelte-ts";
</script>

<main>
    <h1>{header}</h1>
</main>

<style>
    h1 {
        color: red;
        text-align: center;
    }
</style>
