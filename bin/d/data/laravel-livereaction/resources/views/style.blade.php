<style>
:root {
    --c-1: #A5A692;
    --c-2: #011F26;
    --c-3: #025E73;
    --c-4: #F2A71B;
    --c-5: #BFB78F;
    --effect-distance: -10rem;

}
body, html {
    margin: 0; padding: 0;
}

body {
    background: var(--c-3);
}

.app {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    height: 100vh;
}

.video-container {
    aspect-ratio: 16 / 10;
    width: 80%;
    background: var(--c-2);
}

.video-container__video {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: black;
}

.live-reaction {
    display: flex;
    padding: 1rem;
}

.live-reaction__reaction {
    padding-right: 1rem;
    position: relative;
}

.live-reaction__reaction .button {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: var(--c-4);
    padding: .7rem 1rem;
    border-radius: 10px;
    cursor: pointer;
}

.live-reaction__reaction .button:hover {
    background: var(--c-5);
}

.live-reaction__reaction .effect {
    position: absolute;
    top: -4rem;
}

.live-reaction__reaction .effect__item {
    animation: effect 2s linear 0s 1 forwards;
    background: var(--c-4);
    display: block;
    color: white;
    position: absolute;
}

@keyframes effect {
    0% {
        opacity: 0;
        transform:
            scale(0.3)
            translateY(-0)
    }
    10% {
        opacity: 1;
        transform:
            scale(1.2)
            translateY(-2rem);
    }

    90 {
        opacity: 1;
        transform:
            scale(1.4)
            translateY(calc(var(--effect-distance) + 2));
    }
    100% {
        opacity: 0;
        transform:
            scale(.9)
            translateY(var(--effect-distance));
    }

}
</style>