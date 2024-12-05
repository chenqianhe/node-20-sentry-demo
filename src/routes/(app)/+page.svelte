<script lang="ts">
    import { Test2 } from "@api/test2";

    async function test() {
        const requests = Array(20)
            .fill(null)
            .map(() =>
                fetch("/api/test", {
                    method: "POST",
                    body: JSON.stringify({ hello: "world" }),
                })
            );

        const responses = await Promise.all(requests);
        console.log(responses);
    }

    async function test2() {
        const requests = Array(20)
            .fill(null)
            .map(() => Test2.mFetch("hello world"));

        const responses = await Promise.all(requests);
        console.log(responses);
    }
</script>

<div>
    <button on:click={test}>Click me</button>
    <button on:click={test2}>Click me2</button>
</div>
