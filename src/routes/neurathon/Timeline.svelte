<script>
	import TimelineData from '$lib/data/neurathonTimelineData';
</script>

<!-- Timeline -->
<section class="flex flex-col justify-center items-center py-10">
	<div class="TimelineHeading text-3xl font-bold uppercase pb-8 text-secondary">
		🗓️ Timeline
	</div>
	<div class="container grid grid-cols-[auto_auto] max-w-[650px] px-3">
		{#each TimelineData as data}
			<div class={data.id === 1 ? 'TimelineDate text-sm md:text-[1rem] font-semibold text-right pr-8' : 'TimelineDate text-sm md:text-[1rem] font-semibold text-right pr-8 pt-10'}>{data.date}</div>
	
			<div class={data.id === 1 ? 'TimelineContent text-sm md:text-[1rem] pl-8' : 'TimelineContent text-sm md:text-[1rem] pl-8 pt-10'}>
				<p>{data.event}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.TimelineContent {
		position: relative;
		border-left-width: 1px;
		border-color: gray;
	}

	.TimelineContent:nth-child(2):after {
		content: '';
		position: absolute;
		inset: 0;
		left: -0.5rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: var(--primary);
	}

	.TimelineContent:nth-child(even):not(:nth-child(2)):after {
		content: '';
		position: absolute;
		inset: 0;
		left: -0.5rem;
		top: 2.8rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: var(--primary);
	}
</style>
