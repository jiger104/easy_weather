<script>
  import { page } from "$app/stores";
</script>


<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-8 text-center">
  <h1>{$page.status}</h1>
  <h2>{$page.error.message + "!"}</h2>
    <a class="btn btn-lg btn-ghost-surface" href="/" rel="noreferrer">Try Again</a>
  </div>

</div>