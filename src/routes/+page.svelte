<script>
  import { focusTrap, ProgressRadial } from "@skeletonlabs/skeleton";
  import { enhance } from "$app/forms";
  import { redirect } from '@sveltejs/kit';

  let postalCode = null
  const handleSubmit = () => {
    window.location.href = `/weather/${postalCode}`
  }


</script>


<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-8 text-center">
    <h1 class="font-bold text-8xl">Welcome to Easy Weather!</h1>
    <h3 class="font-medium text-cyan-300">Enter your postal code below for the latest weather</h3>
    <div class="flex justify-center space-x-2 space-y-3">
      <form  id="weatherForm"
            use:focusTrap={true} on:submit|preventDefault={handleSubmit}>

        <input id="postalCode" bind:value={postalCode}  placeholder="90210" required type="number" min="10000" max="99999" />
        <button class="btn btn-lg w-1/2 font-bold text-white bg-primary-500 mt-4" type="submit">Submit</button>


      </form>
    </div>
  </div>


</div>
