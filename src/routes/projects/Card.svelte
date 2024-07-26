<script>
	export let ProjectName, ProjectDesc, Members, ID;
</script>

<div class={`card max-w-[700px] aspect-[4/1.6] rounded-sm p-4 mb-10 border border-dashed mx-auto ${ID % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}`}>
	<p class="pb-2 text-2xl font-bold">{ProjectName}</p>

	<p class="pb-2">
		{ProjectDesc}
	</p>

	<div class="grid grid-cols-[auto_auto] max-w-fit">
		<p class="">Members:</p>
		<div class="pl-2">
			<p class="inline italic">{Members.join(', ')}</p>
		</div>
	</div>
</div>
