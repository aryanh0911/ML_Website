<script>
    import img404 from '$lib/images/404.png';
    import error from '$lib/images/error.png';
</script>

<div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
    <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
            <div class="absolute">
                <div class="">
                    <h1 class="my-2 text-primary font-bold text-2xl">
                        Looks like you've found the
                        doorway to the great nothing
                    </h1>
                    <p class="my-2 text-base">Sorry about that! Please visit our hompage to get where you need to go.</p>
                    <a class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50" href="/">Take me there!</a>
                </div>
            </div>
            <div>
                <img src={img404} class="opacity-40" alt="404 error"/>
            </div>
        </div>
    </div>
    <div>
        <img src={error} alt="404 error"/>
    </div>
</div>