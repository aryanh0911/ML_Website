<script>
	import About from '$lib/components/home/+HomeAbout.svelte';
	import HomeProjects from '$lib/components/home/+HomeProjects.svelte';
	import Hero from '$lib/components/home/+hero.svelte';
</script>

<svelte:head>
	<meta name="description" content="Machine Learning Club, NIT Silchar" />
</svelte:head>

<section>
	<Hero />
	<About />
	<HomeProjects />
</section>