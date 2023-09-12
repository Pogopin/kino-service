<template>
<section class="slogan">
  <div class="container">
			<div class="slogan__content">
				<h2 class="slogan__title">We are breaking</h2>
        <h2 class="slogan__subtitle">All Limitations</h2>
				<p class="slogan__text">Lorem ipsum dolor consectetur adipisicing elit, sed do eiusmod tempor incididunt labore
           etolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris.
        </p>
        <div class="slogan__img"></div>

		</div>
	</div>

</section>

</template>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.slogan__content {
  width: 100%;
  height: 322px;
  position: relative;
  background-color:  lightgray;
  color: #1d1d1d;
  padding: 30px 50px;
}

.slogan__title {
  font-size: 40px;
  margin-bottom: 40px;
}
.slogan__subtitle {
  font-size: 50px;
  margin-bottom: 40px;
  color: rgb(75, 75, 209);
}
.slogan__text {
  max-width: 300px;
}
.slogan__img {
  position: absolute;
  right: -30px;
  top: -11px;
  z-index: 100;
  width: 572px;
  height: 348px;
  background: url('@/assets/images/banner-img.png') no-repeat left top;

}
</style>
