<template>
    <div>
        <dl>
            <dt></dt>
            <dd>
                <h5></h5>
                <p></p>
                <p><b></b></p>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        props:[]
    }
</script>


<style lang="scss" scoped>
    dl{
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2rem;
        border-bottom: 1px solid #eee;
    }
    dl dt{
        width: 1rem;
        height: 0.8rem;
        margin-right: 0.2rem;
    }
    dl dd {
        flex: 1;
    }
    dl dd h5{
        font-weight: normal;
    }
</style>

