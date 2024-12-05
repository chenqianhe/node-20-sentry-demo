import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        alias: {
            "@api": "src/routes/api",
            "@api/*": "src/routes/api/*",
            "@app": "src/routes/(app)",
            "@app/*": "src/routes/(app)/*",
        },
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            // Max of 4 min to run instead of 15 seconds, we could extend to 5 min though.
            // See https://vercel.com/docs/functions/serverless-functions/runtimes#maxduration
            maxDuration: 240,
        }),
        /**
         * TODO: optimize using https://github.com/sveltejs/kit/issues/6784
         */
        csrf: {
            checkOrigin: false,
        },
    },
};

export default config;
