<script>
	import About from '$lib/components/home/+HomeAbout.svelte';
	import HomeProjects from '$lib/components/home/+HomeProjects.svelte';
	import Hero from '$lib/components/home/+hero.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Hero />
	<About />
	<HomeProjects />
</section>