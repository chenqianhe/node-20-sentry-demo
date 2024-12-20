// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Error {
            code?: number;
            message: string;
        }
        interface Locals {
            userId: string;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
