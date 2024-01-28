<script lang="ts">
    export let heading : string;
    export let description : string;
</script>
<div class="bg-black rounded-lg p-3 h-28">
    <h3 class="uppercase font-bold text-secondary text-sm pb-2">{heading}</h3>
    <h4 class="text-xs">{description}</h4>
</div>