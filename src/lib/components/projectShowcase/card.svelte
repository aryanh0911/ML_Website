<script lang="ts">
	export let image: string;
	export let projectType: string;
	export let projectName: string;
	export let oneliner: string;
	export let GithubLink: string;
	export let PaperLink: string;

	function handleClick() {
		window.location.href = '/projects';
	}

	function openGithubLink(event){
		event.stopPropagation();
		setTimeout(()=>{
			window.open(GithubLink, '_blank')
		}, 300)
	}

	function openPaperLink(event){
		event.stopPropagation();
		setTimeout(()=>{
			window.open(PaperLink, '_blank')
		}, 300)
	}

</script>

<div
	class="project-showcase-card  shrink-0 snap-center aspect-[5/5] md:aspect-[5/4] w-[16.5rem] md:w-[19.75rem] bg-[#191919] rounded-[6px] overflow-x-hidden relative"
	on:click={handleClick}
>
	<!-- <div class="image-container h-[90%] overflow-hidden relative">
		<img src={image} alt="overview of project" class="object-cover" />

		<div class="tag flex justify-end absolute bottom-2 right-2 mix-blend-hard-light">
			<div class="inline border border-dashed rounded-full px-2 py-1 text-xs text-white">
				{projectType}
			</div>
		</div>
	</div> -->

	<div class="p-2 flex flex-col h-full justify-around">
		<div class="">
			<div class="font-bold">
				{projectName}
			</div>
		</div>

		<div class="w-fit border border-dashed rounded-full px-2 py-1 text-xs text-white opacity-60">
			{projectType}
		</div>
		
		<div class="pt-2 text-sm">
			{oneliner}
		</div>
		
		<div class="links flex flex-wrap gap-1 pt-2 text-sm">
			{#if GithubLink}
				<div class="hover:cursor-pointer text-[whitesmoke]/70 hover:text-white duration-300">
					<i class="ri-github-fill text-2xl" on:click={openGithubLink} />
				</div>
			{/if}

			{#if PaperLink}
				<div class="hover:cursor-pointer hover:text-white duration-300">
					<i class="ri-file-list-3-fill text-2xl" on:click={openPaperLink} />
				</div>
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

	.project-showcase-card {
		background: url("/topography-sharp_avif.avif");
		background-size: cover;
		transition: background-position-y .25s;
	}
	.project-showcase-card:hover {
		background-position-y: .5%;
		border: 1px solid var(--primary);
		box-shadow: 10px 10px 40px rgba(255, 166, 0, 0.144);
	}
</style>
