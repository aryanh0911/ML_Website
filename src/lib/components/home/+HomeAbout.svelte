<script lang="ts">
    import HomeAboutCard from "./+HomeAboutCard.svelte";
    import cardData from '$lib/data/homeAboutCardData.json'
</script>

<section class="w-full flex justify-center">
    <section class="w-full max-w-6xl xl:max-w-7xl p-12">
        <h2 class="uppercase text-center text-secondary font-bold text-4xl">The stuff we do</h2>
        <div class="py-12 grid grid-cols-2 grid-rows-1 gap-20">
            <div class="text-sm">
                <p class="pb-4">
                    Welcome to the Machine Learning Club of NIT Silchar, where we foster a vibrant community of students passionate about artificial intelligence and machine learning. If you're a student at our college with an interest in these cutting-edge fields, we invite you to join our dynamic club through our engaging classes and workshops. Our club is dedicated to educating students about machine learning, providing a platform for insightful discussions on AI trends, and offering valuable resources and guidance for hands-on learning and experimentation.
                </p>
                <p>
                    At the Machine Learning Club, we go beyond the classroom, organizing diverse events like hackathons, workshops, talks, and weekly classes that are open to all ML enthusiasts. Whether you're a beginner or an experienced practitioner, our club creates an inclusive environment for everyone to explore, learn, and collaborate. Join us to build a strong network, stay updated on the latest developments, and be a part of a community that is passionate about both research and development in the exciting realm of artificial intelligence.
                </p>
            </div>
            <div class="grid grid-cols-2 grid-rows-3 gap-4">
                {#each cardData as card}
                    <HomeAboutCard heading={card.heading} description={card.description}/>
                {/each}
            </div>
        </div>
    </section>
</section>