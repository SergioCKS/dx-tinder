import { writable } from "svelte/store";

/**
 * ## User logged in
 * 
 * Whether the user is logged in or not.
*/
export const userLoggedIn = writable(false);

/**
 * ## User ID
 * 
 * ID of the user in the system.
*/
export const userId = writable("");

/**
 * ## Access token
 * 
 * Access token retrieved on successful authentication.
*/
export const accessToken = writable("");

/**
 * ## User Email
 * 
 * Email of the user.
*/
export const userEmail = writable("");
