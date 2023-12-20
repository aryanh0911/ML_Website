<script lang="ts">
	import './app.css';
	// data
	import navlinks from '$lib/data/navlinks.json';
	// components
	import Footer from '$lib/components/+Footer.svelte';
	// assets
	import logo from '$lib/images/logo.png'
</script>

<div class="app">
	<div class="drawer">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="w-full navbar bg-base-300 flex justify-center">
				<div class="w-full max-w-6xl flex justify-between">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="px-2 mx-2 font-bold text-primary flex z-30 items-center">
						<div class="h-16">
							<img src={logo} height="64" alt="" class="h-full">
						</div>
						<div class="hidden lg:block">Machine Learning Club, <span class="text-base"> NIT Silchar</span></div>
					</div>
					<div class="hidden lg:block">
						<ul class="menu menu-horizontal">
							{#each navlinks as link}
								<li><a href={link.url}>{link.title}</a></li>
							{/each}
						</ul>
					</div>
				</div>
				
			</div>
			<slot />
			<Footer />
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-80 min-h-full bg-base-200">
				{#each navlinks as link}
					<li><a href={link.url}>{link.title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
