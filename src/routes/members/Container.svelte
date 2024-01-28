<script>
    import Card from "./Card.svelte"
    import MembersList from './MembersList.json'

</script>



<div class="container">

    <div class="grid-container">
        {#each MembersList as member}
        <div class="grid-item"> 
            <Card 
                memberName = {member.name}
                memberImg = {member.image}
                memberRole = {member.role}
                githubLink = ""
                linkedInLink = ""
                facebookLink = ""
            /> 
        </div>
        {/each}
    </div>

</div>





<!-- STYLES -->
<style>
    .container {
        box-sizing: border-box;
        font-family: Montserrat;
        max-width: 92%;
        /* padding: 6rem 18rem; */
        padding-top: 5rem;
        padding-bottom: 5rem;
        margin: 4rem auto;
        border-radius: 2rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(MembersAssets/images/armand-khoury-4cBVro7SHLs-unsplash.jpg);
        background-size:contain;
        position: relative; 
        
    }

    .grid-container{
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

    @media (max-width: 1100px) {
        .container {
            padding-top: 6rem;
        }
    }


    @media (max-width: 770px) {
        .container {
            padding-top: 4.5rem;
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

        .container {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
    }

    @media (max-width: 460px) {
        .container {
            max-width: 94%;
        }
    }

    @media (max-width: 400px) {
        .grid-container {
            column-gap: .5rem;
        }
    }

    
</style>