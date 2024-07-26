<script>
	// Components
	import Hero from './Hero.svelte';
	import Timeline from './Timeline.svelte';
	import FAQ from './FAQAccordion.svelte';
	import AboutNeurathon from './AboutNeurathon.svelte';
	import Rules from './Rules.svelte'
</script>

<section class="">
	<div class="bg-black pt-20"><Hero /></div>
	
	<AboutNeurathon />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed">
	
	<Timeline />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed">
	
	<Rules />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed">
	
	<FAQ />
</section>

<style>
	hr {
		color: rgba(128, 128, 128, 0.201);
	}
</style>
