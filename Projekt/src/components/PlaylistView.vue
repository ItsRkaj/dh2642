<script>
export default {
  data() {
    return {

    }
  },

}

</script>

<template>
    <div id="playlist">
        <h2 id="title">SPEATHER</h2>
        <ul>
            <li>Song 1</li>
        </ul>
        <h3 id="playlistFooter">
            Powered by <a href="https://spotify.com" target="_blank">Spotify</a>
        </h3>
    </div>
</template>

<style scoped>
    h1, h2, h3, h4, h5, h6 {
        text-align: center;
    }

    #title {
        background-color: rgba(255, 255, 255, 0.025);
        margin: 0;
        padding: 1rem;
    }

    #playlist {
        background-color: #191414;
        height: 100%;
        width: 500px;
        position: relative;
        color: #ececec;
        box-sizing: border-box;
    }

    #playlistFooter {
        position: absolute;
        bottom: 1rem;
        text-align: center;
        width: 100%;
        color: #ececec;
    }

    #playlistFooter > a {
        color: #1db954;
    }
</style>
