<script lang="ts">
    export let memberImg : string 
    export let memberName : string 
    export let memberRole : string
    export let githubLink : string 
    export let linkedInLink : string 
    export let facebookLink : string

    function openGithubLink(){
        setTimeout(()=>{
            window.open(githubLink, '_blank')
        }, 300)
    }
    function openLinkedinLink(){
        setTimeout(()=>{
            window.open(linkedInLink, '_blank')
        }, 300)
    }
    function openFacebookLink(){
        setTimeout(()=>{
            window.open(facebookLink, '_blank')
        }, 300)
    }
</script>


<div class="card aspect-[5/6] min-w-[20rem]">
    <div class="member-image">
    <img src={memberImg} class="object-cover" alt="a member right here" />
    </div>

    <div class="member-name">
        <p>{memberName}</p>
    </div>

    <div class="member-role">
        <p>{memberRole}</p>
    </div>

    <div class="member-contacts">
        <div>
            <!-- GITHUB -->
             {#if githubLink}
                <div on:click={openGithubLink} class="text-[whitesmoke]/70 hover:text-white hover:cursor-pointer"><i class="ri-github-fill"></i></div>
             {/if}
            
            <!-- LINKEDIN -->
             {#if linkedInLink}
                <div on:click={openLinkedinLink} class="text-[whitesmoke]/70 hover:text-white hover:cursor-pointer"><i class="ri-linkedin-box-fill"></i></div>
             {/if}
            
            <!-- FACEBOOK -->
             {#if facebookLink}
                 <div on:click={openFacebookLink} class="text-[whitesmoke]/70 hover:text-white hover:cursor-pointer"><i class="ri-facebook-circle-fill"></i></div>
             {/if}
        </div>
    </div>
</div>





<!-- STYLES -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');  

    .card {
        background-color: rgba(35, 34, 34, 0.502);
        box-sizing: border-box;
        margin: 0 auto;
        padding-bottom: .8rem;
        /* padding: 3rem 1rem; */
        color: rgba(255, 255, 255, 0.863);
        /* border: 1px solid rgb(0, 0, 0); */
        border-radius: .8rem;
        /* padding: 1rem; */
        /* max-width: 340px; */
        /* min-width: 340px; */
        backdrop-filter: blur(1.5px);
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.546);
        transition: backdrop-filter 0.2s, transform .3s, box-shadow .3s;
    }

    .member-image {
        padding-top: 2.5rem;
        padding-bottom: 1rem;
        margin: 0 auto;
    }

    .member-image img {
        border-radius: 50%;
        width: 11rem;
        height: 11rem;
        /* object-fit: cover; */;
        border: 1px solid #ff7801;
        padding: .2rem;
        /* margin-bottom: 20rem; */

        @media (min-width: 768px) {
            border-width: 2px;
        }
    }

    .member-name {
        font-family: Montserrat,sans-serif;
        font-size: 1rem;
        font-weight: 700;
        /* font-size: .9rem; */
        /* display: inline-block; */
    }

    .member-role {
        font-weight: 200;
        font-size: .8rem;
        margin-top: .2rem;
    }

    .member-contacts div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .member-contacts {
        margin-top: 1rem;
        margin-bottom: 2.3rem;
        font-size: 1.5rem;
        /* color: red; */
    }

    .card:hover {
        backdrop-filter: blur(6px);
        transform: translateY(-4px);
        box-shadow: 4px 12px 9px rgba(0, 0, 0, 0.546);
    }
    




    /* MEDIA QUERIES */
    
    @media (max-width: 1340px) {
        .card {
            min-width: 20rem;
            height: 23.8rem;

        }

    }

    @media (max-width: 1200px) {
        .card {
            min-width: 18rem;
            height: 23rem;

        }

        .member-image img{
            height: 10rem;
            width: 10rem;
        }

    }

    @media (max-width: 1100px) {
        .card {
            min-width: 16rem;
            height: 21rem;

        }

        .member-image img{
            height: 9rem;
            width: 9rem;
        }

    }

    @media (max-width: 980px) {

        .card {
            min-width: 14rem;
            height: 19.2rem;

        }

        .member-image img{
            height: 8rem;
            width: 8rem;
        }
    }   

    @media (max-width: 850px) {
        .card {
            min-width: 12rem;
            height: 16.6rem;

        }

        .member-image img{
            height: 7rem;
            width: 7rem;
        }

        .member-image {
            padding-top: 2rem;
        }

        .member-contacts div {
            font-size: 1rem;
        }

        .member-name {
            font-size: .8rem;
        }

    }   

    @media (max-width: 770px) {

        .card {
            min-width: 12rem;
            height: 15.6rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 6rem;
            width: 6rem;
        }


    }   

    @media (max-width: 700px) {
       .card {
            min-width: 11rem;
            height: 15rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 6rem;
            width: 6rem;
        }


    }

    @media (max-width: 650px) {
        .card {
            min-width: 15rem;
            height: 17.8rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 8rem;
            width: 8rem;
        }

        .member-contacts div {
            font-size: 1.2rem;
        }

        .member-name {
            font-size: 1rem;
        }
        .member-role {
            font-size: .8rem;
        }

    } 

    @media (max-width: 580px) {
        .card {
            min-width: 14rem;
            height: 17.5rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 8rem;
            width: 8rem;
        }

        .member-contacts a {
            font-size: 1.2rem;
        }

        .member-name {
            font-size: 1rem;
        }
        .member-role {
            font-size: .6rem;
        }

    } 

    @media (max-width: 530px) {
        .card {
            min-width: 13.2rem;
            height: 16rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 7rem;
            width: 7rem;
        }

        .member-name {
            font-size: .9rem;
        }
        .member-role {
            font-size: .8rem;
        }
        .member-contacts {
            margin-top: .2rem;
        }

    } 

    @media (max-width: 495px) {
        .card {
            min-width: 12.5rem;
            height: 16rem;

        }

        .member-role {
            font-size: .7rem;
        }

        .member-image img{
            height: 7rem;
            width: 7rem;
        }

        .member-name {
            font-size: .9rem;
        }
        .member-role {
            font-size: .8rem;
        }

    } 

    @media (max-width: 460px) {
        .card {
            min-width: 11.4rem;
            height: 14.5rem;

        }

        .member-image img{
            height: 6rem;
            width: 6rem;
        }

        .member-name {
            font-size: .8rem;
        }
        .member-role {
            font-size: .7rem;
        }

    } 

    @media (max-width: 400px) {
        .card {
            min-width: 10.2rem;
            height: 13rem;

        }

        .member-image img{
            height: 5.5rem;
            width: 5.5rem;
        }

        .member-name {
            font-size: .8rem;
        }
        .member-role {
            font-size: .6rem;
            /* padding-bottom: ; */
        }

        /* .member-contacts {
            margin-top: .7rem;
        } */

        .member-contacts div{
            font-size: 1rem;
        }

    } 

    @media (max-width: 360px) {
        .card {
            min-width: 8.8rem;
            height: 12rem;

        }

        .member-image img{
            height: 5rem;
            width: 5rem;
        }

        .member-name {
            font-size: .7rem;
        }
        .member-role {
            font-size: .6rem;
        }

        .member-contacts div{
            font-size: .9rem;
        }

        /* .member-contacts {
            margin-top: .7rem;
        } */

    } 
    

</style>