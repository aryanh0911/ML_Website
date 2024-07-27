<script>
	// Plugins ---
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { onMount } from 'svelte';

	// Components ---
	import Hero from './Hero.svelte';
	import Timeline from './Timeline.svelte';
	import FAQ from './FAQAccordion.svelte';
	import AboutNeurathon from './AboutNeurathon.svelte';
	import Rules from './Rules.svelte';

	//GSAP ---
	onMount(()=>{
		gsap.set('*', { visibility: 'visible'})

		let tl = gsap.timeline()
		tl.from('.image-container', {
			opacity: 0,
			y: 16,
			duration: 1
		})
		.from('.Neurathon span', {
			opacity: 0,
			duration: 1.2,
			stagger: .04,
			ease:'bounce'
		}, "-=.8")
		.from('.TagLine', {
			opacity: 0,
			duration: .3
		}, "-=.6")
		.from('.AboutNeuraHeading, .AboutNeuraText, .AboutNeuraButtons', {
			opacity: 0,
			// y: 24,
			scale: .9,
			stagger: .5,
			scrollTrigger: {
				trigger: '.AboutNeuraHeading',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})
		.from('.TimelineHeading', {
			opacity: 0,
			scale: .9,
			stagger: .5,
			scrollTrigger: {
				trigger: '.TimelineHeading',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})
		.from('.TimelineContent, .TimelineDate', {
			opacity: 0,
			y: 24,
			stagger: 2,
			// ease:"expo.out",
			duration: 3,
			scrollTrigger: {
				trigger: '.TimelineContent',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})
		.from('.RulesHeading', {
			opacity: 0,
			scale: .9,
			scrollTrigger: {
				trigger: '.RulesHeading',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})
		.from('.RulesSNo, .RulesText', {
			opacity: 0,
			y: 14,
			stagger: 2,
			// ease:"expo.out",
			duration: 3,
			scrollTrigger: {
				trigger: '.RulesText',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 50%',
				once: true,
				// markers: true,
			}
		})
		.from('.FAQHeading', {
			opacity: 0,
			scale: .9,
			scrollTrigger: {
				trigger: '.FAQHeading',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})
		.from('.FAQTile', {
			opacity: 0,
			scale: .9,
			stagger: 2,
			scrollTrigger: {
				trigger: '.FAQTile',
				scrub: 2,
				start: 'top 90%',
				end: 'bottom 70%',
				once: true,
				// markers: true,
			}
		})

	})

</script>

<section class="">
	<div class="bg-black pt-20"><Hero /></div>

	<AboutNeurathon />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed" />

	<Timeline />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed" />

	<Rules />
	<hr class="w-[70%] max-w-[720px] mx-auto border-dashed" />

	<FAQ />
</section>

<style>
	* {
		visibility: hidden;
	}

	hr {
		color: rgba(128, 128, 128, 0.201);
	}
</style>
