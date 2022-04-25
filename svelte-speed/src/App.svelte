<script>
  import Rainbow from './Rainbow.svelte';
  const arr = new Array(5001).fill(0);
  $: start = false;
  const onStart = () => {
    start = true;
  };
</script>

<div class="app">
  <div class="header">
    <button class="btn" on:click={onStart}>strat</button>
  </div>
  {#each arr as a, index}
    <Rainbow {start} {index} />
  {/each}
</div>

<style>
  .app {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .btn {
    height: 30px;
  }
  .header {
    height: 50px;
    width: 100%;
  }
</style>
