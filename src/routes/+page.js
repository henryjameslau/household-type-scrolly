export const prerender = true;

import { getData } from "$lib/utils";

export async function load({ fetch }) {
	let places = await getData(`/data/household-type.csv`, fetch); // Array of data for all places

  return {places};
}