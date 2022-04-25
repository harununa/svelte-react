<script>
  const rainbowColor = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
  export let start;
  export let index;
  $: color = '';
  $: if (start) {
    setTimeout(() => {
      if (index === 0) {
        console.time();
      } else if (index === 5000) {
        console.timeEnd();
      }
      color = rainbowColor[index % 7];
    }, 1);
  }
</script>

<div class={`${color} wrap`} />

<style>
  .wrap {
    border: 1px solid;
    width: 20px;
    height: 20px;
  }
  .red {
    background-color: red;
  }
  .orange {
    background-color: orange;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
  .navy {
    background-color: navy;
  }
  .purple {
    background-color: purple;
  }
</style>
