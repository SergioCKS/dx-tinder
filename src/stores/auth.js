import { writable } from "svelte/store";

export const userLoggedIn = writable(false);
export const userId = writable("");
export const accessToken = writable("");
export const userEmail = writable("");
