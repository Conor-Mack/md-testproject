<script>
  import { buildStyle } from "helpers";

  export let opacity = "";
  export let margin = "";
  export let padding = "";

  $: style = buildStyle({ opacity, margin, padding });
</script>

<h2 {style} class="mdc-typography--headline2">
  <slot />
</h2>
