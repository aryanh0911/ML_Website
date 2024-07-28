<script>
	import Card from './Card.svelte';
	import ProjectData from '$lib/data/projectsData';
</script>

<section class="pt-20">
	<div class="wrapper max-w-[1040px] mx-auto">
		<div class="w-full px-4">
			{#each ProjectData as data}
				<Card
                    ID={data.id}
					ProjectName={data.projectName}
					ProjectDesc={data.longDesc}
					Members={data.members}
					GithubLink={data.github}
					PaperLink={data.paper}
				/>
			{/each}
		</div>
	</div>
</section>
