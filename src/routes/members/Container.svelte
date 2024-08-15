<script>
	// @ts-nocheck

	//Components
	import Card from './Card.svelte';
	import MembersList from './MembersList.json';

	let activeTab = 'Member';

	function switchTab(tab) {
		activeTab = tab;
	}

	$: filteredMembers = MembersList.filter((member) => member.memberType === activeTab);
</script>

<section class="pt-16 relative overflow-hidden">

    <div class="tabs">
        <button class:active-tab={activeTab === 'Member'} on:click={() => switchTab('Member')}>
            <p class="text-sm">Members</p>
        </button>
        <button class:active-tab={activeTab === 'Alumni'} on:click={() => switchTab('Alumni')}>
            <p class="text-sm">Alumni</p>
        </button>
    </div>
    
    <div class="container">
        <div class="grid-container">
            {#each filteredMembers as member}
                <div class="grid-item">
                    <Card
                        memberName={member.name}
                        memberImg={member.image}
                        memberRole={member.role}
                        githubLink={member.githubLink}
                        linkedInLink={member.linkedInLink}
                        facebookLink={member.facebookLink}
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- STYLES -->
<style>
	.tabs {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;	
	}

	.tabs button {
		padding: 0;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		background: none;
		border: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.3s, color 0.3s; 
	}

	.tabs button.active-tab {
		border-color: #ff7801; 
		color: #ff7801; 
	}

	.tabs button:not(.active-tab) {
		color: #a9a9a9; 
	}

	.tabs button:hover {
		border-color: #ff7801; 
		color: #ff7801; 
	}

	section {
		background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.605)) ,url(MembersAssets/images/topography-sharp_avif.avif);
		background-size: contain;
	}

	.container {
		box-sizing: border-box;
		font-family: Montserrat;
		max-width: 85%;
		/* padding: 6rem 18rem; */
		/* padding-top: 5rem; */
		padding-bottom: 5rem;
		border-radius: 2rem;
		margin-inline: auto;
		/* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
			url(MembersAssets/images/line-gradient.jpg);
		background-size: cover; */
		position: relative;
	}

	.grid-container {
		margin: 0 auto;
		max-width: 90%;
		box-sizing: border-box;
		display: grid;
		place-content: center;
		grid-template-columns: auto auto auto;
		column-gap: 2rem;
		row-gap: 4rem;
		/* padding: 0 auto; */
	}

	.grid-item {
		text-align: center;
		/* padding: 0 1rem; */
		/* max-width: 20rem; */
	}

	/* MEDIA QUERIES */

	@media (max-width: 1340px) {
		.grid-container {
			column-gap: 1rem;
		}
	}

	@media (max-width: 650px) {
		.grid-container {
			grid-template-columns: auto auto;
		}
	}

	@media (max-width: 530px) {
		.grid-container {
			row-gap: 1.5rem;
		}

	}

	@media (max-width: 460px) {
		.container {
			max-width: 94%;
		}
	}

	@media (max-width: 400px) {
		.grid-container {
			column-gap: 0.5rem;
		}
	}
</style>
