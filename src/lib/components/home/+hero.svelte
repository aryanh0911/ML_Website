<script>
	//Assets
	import inscribedGIF from '$lib/images/Home/inscribed-cropped.gif'

	//Plugins ---
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { onMount } from 'svelte';

	//GSAP ---
	onMount(() => {
		gsap.set('*', { visibility: 'visible' });

		let tl = gsap.timeline();
		tl.from('.hero-image-container', {
			opacity: 0,
			y: 16,
			duration: 1
		})
			.from(
				'.MachineLearning span',
				{
					opacity: 0,
					duration: 1.2,
					stagger: 0.04,
					ease: 'bounce'
				},
				'-=.8'
			)
			.from(
				'.TagLine',
				{
					opacity: 0,
					duration: 0.3
				},
				'-=.6'
			)
			.from('.homeAccessorialImg', {
				opacity: 0,
				scale: .9,
				duration: 1,
			}, '-=.5')
            .from('.project-showcase-card', {
                opacity: 0,
                stagger: .13,

                scrollTrigger: {
                    trigger: '.project-showcase-card',
                    scrub: 3,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    once: true,
                    // markers: true,
                }
            })
	});
</script>

<section class="flex justify-center px-0 md:px-10 bg-black pt-20">
	<div class="wrapper w-full">
		<div class="image-wrapper">
			<div class="hero-image-container relative">
				 <enhanced:img src="$lib/images/Neurathon/hero/cyborg-black.jpg" fetchprioriy="high" loading="eager" />
			</div>
		</div>
		<div class="text">
			<div class="MachineLearning text-3xl md:text-[3rem] tracking-wider">
				<div class="flex flex-col gap-3">
					<div class="flex gap-2">
						<div class="">
							<span>M</span><span>a</span><span>c</span><span>h</span><span>i</span><span>n</span
							><span>e</span>
						</div>
						<div>
							<span>L</span><span>e</span><span>a</span><span>r</span><span>n</span><span>i</span
							><span>n</span><span>g</span>
						</div>
					</div>
                    <div>
                        <span>C</span><span>l</span><span>u</span><span>b.</span>
                    </div>
				</div>
			</div>
			<div class="TagLine text-lg opacity-75 lg:text-xl pt-2">Innovate beyond boundaries.</div>
			<div class="homeAccessorialImg">
				<img src={inscribedGIF} alt="" class="w-[8rem] mx-auto">
			</div>
		</div>
	</div>
</section>

<style>
	* {
		visibility: hidden;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000000;
		min-height: 100vh;
		max-width: 1300px;
		position: relative;
		z-index: 0;
		overflow: hidden;

		@media (min-width: 1280px) {
			justify-content: end;
		}
	}

	.image-wrapper {
		position: absolute;
		z-index: -1;
		top: 50%;
		transform: translateY(-50%);
		scale: 1.4;
		max-width: 470px;
		@media (min-width: 768px) {
			top: 58%;
			scale: 1.42;
		}
		@media (min-width: 1280px) {
			left: 8%;
		}
	}
	.hero-image-container::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
	}

	.text {
		padding-inline: 6px;
		margin-bottom: 8rem;

        @media (min-width: 1280px) {
            padding-right: 2.3rem;
        }
	}

	.homeAccessorialImg {
		display: none;

		@media (min-width: 1280px) {
			display: block;
		}
	}
</style>
