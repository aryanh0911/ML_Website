<script lang="ts">
	export let ProjectName: string,
		ProjectDesc: string,
		Members: string[],
		ID: number,
		GithubLink: string,
		PaperLink: string,
		cardClass: string;

	function openPaper() {
		setTimeout(() => {
			window.open(PaperLink, '_blank');
		}, 300);
	}

	function openGithub() {
		setTimeout(() => {
			window.open(GithubLink, '_blank');
		}, 300);
	}
</script>

<div
	class={`projectCard max-w-[700px] aspect-[4/1.6] rounded-sm p-4 mb-10 border border-dashed mx-auto ${
		ID % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
	} ${cardClass}`}
>
	<p class="pb-2 text-2xl font-bold text-[#FFFCE1]">
		{ProjectName}
	</p>

	<p class="pb-2 text-[#FFFCE1]/70">
		{ProjectDesc}
	</p>

	<div class="grid grid-cols-[auto_auto] max-w-fit pb-3">
		<p class="text-[#FFFCE1]/70">Members:</p>
		<div class="pl-2">
			<p class="text-[#FFFCE1]/80 inline italic">{Members.join(', ')}</p>
		</div>
	</div>

	{#if GithubLink && PaperLink}
		<div class="flex gap-3">
			<div class="hover:cursor-pointer hover:text-white duration-300">
				<i class="ri-github-fill text-xl" on:click={openGithub} />
			</div>
			<div class="hover:cursor-pointer hover:text-white duration-300">
				<i class="ri-file-list-3-fill text-xl" on:click={openPaper} />
			</div>
		</div>
		{:else if GithubLink}
			<div class="flex gap-3">
				<div on:click={openGithub} class="hover:cursor-pointer hover:text-white duration-300">
					<i class="ri-github-fill text-xl" on:click={openGithub} />
				</div>
			</div>
		{:else if PaperLink}
			<div class="flex gap-3">
				<div on:click={openPaper} class="hover:cursor-pointer hover:text-white duration-300">
					<i class="ri-file-list-3-fill text-xl" on:click={openPaper} />
				</div>
			</div>
	{/if}
</div>
