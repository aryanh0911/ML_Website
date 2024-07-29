<script lang="ts">
	export let image:string
	export let projectType:string
	export let projectName:string
	export let oneliner:string

	function handleClick() {
		window.location.href = '/projects'
	}
</script>

<div
	class="project-showcase-card card shrink-0 snap-center aspect-[5/4.5] w-[17.7rem] md:w-[19.75rem] bg-[#191919] rounded-[4px] overflow-hidden relative"
	on:click={handleClick}
>
	<div class="image-container h-[90%] overflow-hidden relative">
		<img src={image} alt="overview of project" class="object-cover" />

		<div class="tag flex justify-end absolute bottom-2 right-2 mix-blend-hard-light">
			<div class="inline border border-dashed rounded-full px-2 py-1 text-xs text-white">
				{projectType}
			</div>
		</div>
	</div>

	<div class="p-2 flex flex-col h-full">
		<div class="">
			<div class="font-bold">
				{projectName}
			</div>
		</div>
		<div class="pt-2 text-sm flex-grow">
			{oneliner}
		</div>
		<div class="links flex flex-wrap gap-1 pt-2 text-sm">
			{#if projectType === 'Project'}
				<div class="inline border px-2 py-[.2rem] rounded-full hover:bg-[#ffffffb6] hover:text-[black]">Github</div>
			{:else if projectType === 'Research Paper'}
				<div class="inline border px-2 py-[.2rem] rounded-full hover:bg-[#ffffffb6] hover:text-[black]">Paper</div>
			{/if}
		</div>
	</div>
</div>

<style>
	img {
		transition: scale 0.3s;
	}

	.image-container:after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.461), rgba(0, 0, 0, 0));
		opacity: 1;
		transition: all 0.3s;
	}

	.card:hover .image-container:after {
		opacity: 0;
	}
	.card:hover img {
		scale: 1.05;
	}
</style>
