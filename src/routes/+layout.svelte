<script lang="ts">
	import './app.css';
	import navlinks from '$lib/data/navlinks.json';
	import Footer from '$lib/components/+Footer.svelte';
	import logo from '$lib/images/logo.png';
	import { afterNavigate } from '$app/navigation';

	function closeDrawer() {
		const drawerToggle = document.getElementById('my-drawer-3') as HTMLInputElement;
		if (drawerToggle) {
			drawerToggle.checked = false;
		}
	}

	function handleNavClick(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		if (href) {
			window.location.href = href;
			afterNavigate(() => {
				closeDrawer();
			});
		}
	}
</script>

<div class="app">
	<div class="drawer">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col min-h-screen">
			<!-- Navbar -->
			<div class="w-full navbar bg-base-300/50 backdrop-blur-lg flex justify-center fixed z-[9999]">
				<div class="w-full max-w-[92rem] flex justify-between">
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
					<div class="mx-2 font-bold text-primary flex items-center">
						<div class="h-14">
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

			<main class="flex-grow">
				<slot />
			</main>
			
			<Footer />
		</div>
		<div class="drawer-side z-[9999]">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-64 md:w-96 min-h-full bg-base-200/80 backdrop-blur-lg rounded-lg border-r-2 border-gray">
				{#each navlinks as link}
					<li><a href={link.url} on:click={handleNavClick}>{link.title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
