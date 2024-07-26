<script>
	import Button2 from './Button2.svelte';
</script>

<section class="flex flex-col items-center py-10">
	<div class="px-6">
		<div class="max-w-[720px]">
			<div class="heading text-center text-2xl font-bold uppercase pb-4 text-secondary">
				<span class="text-3xl">💡</span>About Neurathon
			</div>
			<div class="pb-5">
				Neurathon, hosted by the Machine Learning Club at NIT Silchar, is an exciting 3-day ML
				hackathon. It gathers talented individuals and teams to create cutting-edge machine learning
				solutions. Participants dive into the latest advancements, sharpen their skills, and connect
				with like-minded peers. With 36 hours to build and present their projects, teams will vie
				for top honors and prizes. All participants will receive a certificate of participation.
			</div>
		</div>
	</div>

	<div class="flex gap-3">
        <Button2 ButtonText="Projects List" redirect="https://neurathon.devfolio.co/projects" />
        <Button2 ButtonText="Brochure" redirect="/" />
    </div>
</section>

<style>

</style>
