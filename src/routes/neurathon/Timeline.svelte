<script>
	import TimelineData from '$lib/data/neurathonTimelineData';
</script>

<!-- Timeline -->
<section class="flex flex-col justify-center items-center py-10">
	<div class="text-3xl font-bold uppercase pb-8 text-secondary">
		🗓️ Timeline
	</div>
	<div class="container grid grid-cols-[auto_auto] max-w-[650px] px-3">
		{#each TimelineData as data}
			<div class={data.id === 1 ? 'text-sm md:text-[1rem] font-semibold text-right pr-8' : 'text-sm md:text-[1rem] font-semibold text-right pr-8 pt-10'}>{data.date}</div>
	
			<div class={data.id === 1 ? 'content text-sm md:text-[1rem] pl-8' : 'content text-sm md:text-[1rem] pl-8 pt-10'}>
				<p>{data.event}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.content {
		position: relative;
		border-left-width: 1px;
		border-color: gray;
	}

	.content:nth-child(2):after {
		content: '';
		position: absolute;
		inset: 0;
		left: -0.5rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: var(--primary);
	}

	.content:nth-child(even):not(:nth-child(2)):after {
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
