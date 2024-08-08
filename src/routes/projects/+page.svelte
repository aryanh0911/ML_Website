<script>
	// Components ---
	import Card from './Card.svelte';
	import ProjectData from '$lib/data/projectsData';

	// Plugins ---
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { onMount } from 'svelte';

	// GSAP ---
	onMount(() => {
		gsap.set('*', { visibility: 'visible' });

		ProjectData.forEach((data, index) => {
			let tl = gsap.timeline();
			tl.from(`.projectCard-${index}`, {
				opacity: 0,
				y: 24,

				scrollTrigger: {
					trigger: `.projectCard-${index}`,
					scrub: 2,
					start: 'top 79%',
					end: 'bottom 79%',
					once:true,
					// markers: true,
				}
			});
		});
	});
</script>

<section class="pt-20">
	<div class="wrapper max-w-[1040px] mx-auto">
		<div class="w-full px-4">
			{#each ProjectData as data, index}
				<Card
					ID={data.id}
					ProjectName={data.projectName}
					ProjectDesc={data.longDesc}
					Members={data.members}
					GithubLink={data.github}
					PaperLink={data.paper}
					cardClass={`projectCard-${index}`}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	* {
		visibility: hidden;
	}
</style>
