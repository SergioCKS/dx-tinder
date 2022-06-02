import { writable } from "svelte/store";

/**
 * ## Movies buffer
 * 
 * Buffer of movies to show the user.
 */
export const moviesBuffer = writable([]);

/**
 * ## Liked movies
 * 
 * Movies like by the user.
 */
export const likedMovies = writable([]);
