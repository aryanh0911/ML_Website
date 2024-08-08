<script>
	import cloneImg from '$lib/images/Neurathon/hero/clone-black.jpg';
	import cyborgImg from '$lib/images/Neurathon/hero/cyborg-black.jpg';
    import iceVariantEntityImg from '$lib/images/Neurathon/hero/iceVarintEntity_Blacked_2x.jpg'
    import morphShapesGIF from '$lib/images/Neurathon/hero/morphShapes.gif'
</script>

<section class="flex justify-center px-0 md:px-10">
	<div class="wrapper w-full ">
        <div class="image-wrapper">
            <div class="image-container relative">
                <img src={iceVariantEntityImg} alt="" />
            </div>
        </div>
		<div class="text">
			<div class="Neurathon text-5xl lg:text-[4rem] tracking-wider lowercase">
				<span>N</span><span>e</span><span>u</span><span>r</span><span>a</span><span>t</span><span>h</span><span>o</span><span>n</span><span>.</span>
			</div>
            <div class="TagLine text-lg lg:text-xl opacity-70">A.I. for good</div>
            <div class="neuraAccessorialImg">
                <img src={morphShapesGIF} alt="" class="w-[8rem] mx-auto">
            </div>
		</div>
	</div>
</section>


<style>
	.wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
		background-color: #000000;
		min-height: 100vh;
        position: relative;
        z-index: 0;
        overflow: hidden;
        max-width: 1300px;

        @media (min-width: 1280px) {
            justify-content: end;
        }
	}

    .image-wrapper {
        position: absolute;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        scale: 1.2;
        max-width: 470px;
        @media (min-width: 768px) {
            top: 60%;
            scale: 1.3;
        }
        @media (min-width: 1280px) {
            left: 8%;
        }
    }
    .image-container::after{
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

    .neuraAccessorialImg {
        display: none;

        @media (min-width: 1280px) {
            display: block;
        }
    }
</style>
