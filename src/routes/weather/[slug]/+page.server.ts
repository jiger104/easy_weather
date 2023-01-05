import { error } from "@sveltejs/kit";
import { fail, redirect } from '@sveltejs/kit';
import { OPEN_WEATHER_API_KEY } from "$env/static/private";

// Get slug from params and run it through open-weather. Ensure the slug contains 5 digit number only

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
  const slug = params.slug;
  const regex = new RegExp("(^[0-9]{5}$)");
  if (!regex.test(slug)) {
    throw error(404, "Invalid Zip");
  } else {
    const url = new URL("https://api.openweathermap.org/data/2.5/forecast?");
    const params = { zip: slug, appid: OPEN_WEATHER_API_KEY, units: 'imperial' };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const { list, city } = await response.json();
    if (!list && !city) {
      throw error(404, "Could not find weather for given zip code");
    } else {
      // console.log(list, city);
      return { slug: slug,  name: city.name, weather: list };
    }


  }


}

