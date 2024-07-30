<script>
	import RulesEntry from '$lib/data/neurathonRules';
</script>

<section class="flex flex-col items-center justify-center py-10">
	<div class="RulesHeading text-center text-3xl font-bold uppercase pb-4 text-secondary">📃 Rules</div>
	<div class="grid grid-cols-[auto_auto] gap-y-2 px-6">
		{#each RulesEntry as data}
			<div class="RulesSNo text-sm md:text-[1rem]">{data.id}.</div>
			<div class="RulesText pl-2 max-w-[720px] text-sm md:text-[1rem]">{data.rule}</div>
		{/each}
	</div>
</section>
