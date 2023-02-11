<script lang="ts" context="module">
    import type { Header } from "$types";
    import gh from "$assets/gh.svg";
</script>

<script lang="ts">
    let header: Header = "esbuild-svelte-ts";
</script>

<main>
    <h1>
        <a
            href="https://github.com/Valexr/esbuild-svelte-ts"
            target="_blank"
            rel="noreferrer"
            id="gh"
        >
            {@html gh}
        </a>
        {header}
    </h1>
</main>

<style>
    h1 {
        color: red;
        text-align: center;
    }
</style>
