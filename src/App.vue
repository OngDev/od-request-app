<template>
<div>
    <h1>App View</h1>
    <router-view />
</div>
</template>

<script>
import store from './store/index';
export default {
    data: () => ({
        shareState: store.state
    }),
    mounted() {
        store.removeUserOutOfState()
    },
}
</script>
<style lang="less"/>
