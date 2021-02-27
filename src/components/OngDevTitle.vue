<template>
    <p id="welcome-text">
        hế lô hế lô
    </p>
    <p id="Ong-Dev">
        Ông Dev đêi <span class="dot">.</span>
    </p>
</template>

<script>
export default {
    name: "OngDevTitle",
}
</script>

<style scoped>
    p {
        font-family: 'Nunito', sans-serif !important;
        margin: 0;
    }
    #welcome-text {
        font-size: 1.55rem;
    }
    #Ong-Dev {
        font-size: 2.875rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }
    #Ong-Dev > .dot {
        font-size: 1.25em;
        color: #ffb347;
        margin-left: -0.65rem;
    }
</style>
