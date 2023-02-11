<script lang="ts" context="module">
    import type { Header } from "$types";
    import gh from "$svg/gh.svg";
</script>

<script lang="ts">
    let header: Header = "esbuild-svelte-ts";
</script>

<header>
    <button>Some</button>
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
    <button>Else</button>
</header>

<main>
    <p>Main</p>
</main>

<footer><p>Footer</p></footer>

<style>
    @import "app.css";
</style>
