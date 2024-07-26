<script lang="ts">
	import HomeAboutCard from './+HomeAboutCard.svelte';
	import cardData from '$lib/data/homeAboutCardData.json';
</script>

<section class="w-full flex justify-center pt-20">
	<section class="w-full max-w-6xl xl:max-w-7xl py-10 px-7">
		<h2 class="uppercase text-center text-secondary font-bold text-3xl md:text-4xl">
			The stuff we do
		</h2>
		<div class="py-12 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-10">
			<div class="text-wrapper flex justify-center">
				<div class="text-sm md:text-[1rem] max-w-[43rem]">
					<p class="pb-4">
						Welcome to the Machine Learning Club of NIT Silchar, where we foster a vibrant community
						of students passionate about artificial intelligence and machine learning. If you're a
						student at our college with an interest in these cutting-edge fields, we invite you to
						join our dynamic club through our engaging classes and workshops. Our club is dedicated
						to educating students about machine learning, providing a platform for insightful
						discussions on AI trends, and offering valuable resources and guidance for hands-on
						learning and experimentation.
					</p>
					<p>
						At the Machine Learning Club, we go beyond the classroom, organizing diverse events like
						hackathons, workshops, talks, and weekly classes that are open to all ML enthusiasts.
						Whether you're a beginner or an experienced practitioner, our club creates an inclusive
						environment for everyone to explore, learn, and collaborate. Join us to build a strong
						network, stay updated on the latest developments, and be a part of a community that is
						passionate about both research and development in the exciting realm of artificial
						intelligence.
					</p>
				</div>
			</div>
			<div class="grid-wrapper flex justify-center">
				<div
					class="tiles grid grid-rows-[auto_auto] lg:grid-rows-[auto_auto_auto] grid-flow-col overflow-x-scroll lg:overflow-x-hidden gap-3 lg:gap-2 pb-[.4rem] snap-x snap-mandatory"
				>
					{#each cardData as card}
						<HomeAboutCard heading={card.heading} description={card.description} />
					{/each}
				</div>
			</div>
		</div>
	</section>
</section>

<style>
	.tiles::-webkit-scrollbar {
		height: 0.3rem;
	}

	.tiles::-webkit-scrollbar-thumb {
		border-radius: 0.8rem;
		background-color: rgba(255, 255, 255, 0.084);
	}
</style>
