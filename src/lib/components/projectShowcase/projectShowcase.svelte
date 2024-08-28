<script lang="ts">
	import CardData from '$lib/data/projectsData.js';
	import Card from './card.svelte';


</script>

<section class="">
	<div class="slider-wrapper flex justify-center">
		<div
			class="slider flex flex-nowrap gap-4 overflow-x-scroll  overflow-y-visible max-w-[80rem] pb-[.3rem] pt-2 snap-x snap-mandatory"
		>
			{#each CardData as data, index}
				<Card
					image={data.projectImg}
					projectType={data.projectType}
					projectName={data.projectName}
					oneliner={data.shortDesc}
					GithubLink={data.github}
					PaperLink={data.paper}
				/>
			{/each}
		</div>
	</div>

	<div class="flex justify-end max-w-[1280px] mr-auto ml-auto">
		<a href="/projects" class="md:text-lg hover:scale-105 duration-300">
			<i class="ri-compass-line" /> | Explore
		</a>
	</div>
</section>

<style>
	.slider::-webkit-scrollbar {
		height: var(--scrollbar-height);
	}
	.slider::-webkit-scrollbar-thumb {
		border-radius: var(--scrollbar-radius);
		background-color: var(--scrollbar-color-inactive);
	}
	.slider:hover {
		cursor: pointer;
	}
	.slider::-webkit-scrollbar-thumb:hover {
		cursor: grab;
	}
	.slider::-webkit-scrollbar-thumb:active {
		cursor: grabbing;
	}
</style>
