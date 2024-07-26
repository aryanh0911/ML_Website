<script lang="ts">
	export let heading: string;
	export let description: string;
	import image from '$lib/images/HomeTiles/gridGradientBlue.jpg'
</script>

<div class="wrapper rounded-md p-5 border-[.01rem] border-[#ffffff4a]  w-[14rem] lg:w-[14rem] xl:w-[14.5rem] snap-center relative overflow-hidden">
	<img src={image} alt="" class="absolute inset-0 -z-10">
	<h3 class="uppercase font-bold text-secondary text-sm pb-2">{heading}</h3>
	<h4 class="text-sm">{description}</h4>
</div>

<style>
	.wrapper:after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.662), rgba(255, 255, 255, 0));
		z-index: -1
	}
</style>