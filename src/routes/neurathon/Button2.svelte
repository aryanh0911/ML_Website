<script lang="ts">
    // Props
    export let ButtonText: string;
    export let redirect: string;

    function handleClick() {
		if(ButtonText==="Projects List"){
			setTimeout(() => {
				window.open(redirect, '_blank');
			}, 500);
			console.log(ButtonText)
		}
		else {
			setTimeout(() => {
				window.location.href = redirect;
			}, 500);
			console.log(ButtonText)
		}
    }
</script>

<div on:click={handleClick}>
    <span class="text">{ButtonText}</span>
    <span class="line -right"></span>
    <span class="line -top"></span>
    <span class="line -left"></span>
    <span class="line -bottom"></span>
</div>

<style>
    div {
        color: white;
        padding: 0.5rem 0.84rem;
        display: inline-block;
        position: relative;
        font-size: 1.5em;
        cursor: pointer;
        letter-spacing: 0.02em;
    }

    div .text {
        font-family: monospace;
        transform: translateY(0.7em);
        display: block;
        transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    }

    div::after {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0.84em;
        right: 0.84em;
        height: 3px;
        background: #f26522;
        transition: 
            transform 0.3s cubic-bezier(1, 0, 0.37, 1) 0.1s,
            right 0.1s cubic-bezier(0.04, 0.48, 0, 1) 0.2s,
            left 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.2s;
        transform-origin: left;
    }

    .line {
        position: absolute;
        background: #f26522;
    }

    .line.-right,
    .line.-left {
        width: 3px;
        bottom: -3px;
        top: -3px;
        transform: scale3d(1, 0, 1);
    }

    .line.-top,
    .line.-bottom {
        height: 3px;
        left: -3px;
        right: -3px;
        transform: scale3d(0, 1, 1);
    }

    .line.-right {
        right: -3px;
        transition: transform 0.05s cubic-bezier(1, 0, 0.65, 1.01) 0.1s;
        transform-origin: top;
    }

    .line.-top {
        top: -3px;
        transition: transform 0.04s linear 0.2s;
        transform-origin: left;
    }

    .line.-left {
        left: -3px;
        transition: transform 0.04s linear 0.25s;
        transform-origin: bottom;
    }

    .line.-bottom {
        bottom: -3px;
        transition: transform 0.15s cubic-bezier(1, 0, 0.65, 1.01);
        transform-origin: right;
    }

    div:hover .text,
    div:active .text {
        transform: translate3d(0, 0, 0);
        transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1) 0.2s;
    }

    div:hover::after,
    div:active::after {
        transform: scale3d(0, 1, 1);
        right: -3px;
        left: -3px;
        transform-origin: right;
        transition: 
            transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.08s,
            right 0.1s cubic-bezier(1, 0, 0.65, 1.01),
            left 0s 0.15s;
    }

    div:hover .line,
    div:active .line {
        transform: scale3d(1, 1, 1);
    }

    div:hover .line.-right,
    div:active .line.-right {
        transition: transform 0.05s cubic-bezier(1, 0, 0.65, 1.01) 0.1s;
        transform-origin: bottom;
    }

    div:hover .line.-top,
    div:active .line.-top {
        transition: transform 0.04s linear 0.2s;
        transform-origin: right;
    }

    div:hover .line.-left,
    div:active .line.-left {
        transition: transform 0.04s linear 0.24s;
        transform-origin: top;
    }

    div:hover .line.-bottom,
    div:active .line.-bottom {
        transition: transform 0.25s cubic-bezier(0, 0.53, 0.29, 1) 0.28s;
        transform-origin: left;
    }
</style>
