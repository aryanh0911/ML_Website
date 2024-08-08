<script>
	import FAQData from '$lib/data/FAQData';
</script>

<section class="flex flex-col justify-center items-center py-10">
    <div class="FAQHeading text-3xl font-bold uppercase pb-6 text-secondary">
        ❔FAQ
    </div>
	<div class="flex flex-col gap-2 max-w-[750px] w-full px-3">
		{#each FAQData as data}
			<div class="FAQTile collapse collapse-arrow bg-gray rounded-lg">
				<input type="checkbox" class="peer" />
				<div class="collapse-title text-sm md:text-[1rem] font-medium peer-checked:bg-[#2e2e2e]">
					{data.question}
				</div>
				<div class="collapse-content text-sm md:text-[.9rem] peer-checked:collapse-open peer-checked:bg-[#2e2e2e] text-[#bcbcbce1]">
					<p>{data.answer}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
