<template>
	<section>
		<v-photoswipe :isOpen="isOpen" :items="items" :options="optionsPS" @close="hidePhotoSwipe"></v-photoswipe>
		<vue-masonry-wall :items="items" :options="options" @append="append">
			<template v-slot:default="{ item }">
				<div class="Item">
					<img :src="item.src" @click="showPhotoSwipe(item.src)" />

					<div class="Content">
						<h5 class="text-ellipsis-1l">{{ item.title }}</h5>
						<p class="text-ellipsis-2l">{{ item.content }}</p>
					</div>
				</div>
			</template>
		</vue-masonry-wall>
	</section>
</template>

<script>
import axios from 'axios';
import { PhotoSwipe } from 'v-photoswipe'
import VueMasonryWall from "vue-masonry-wall";

export default {
	name: "FacebookFeed",
	components: {
		'v-photoswipe': PhotoSwipe,
		VueMasonryWall
	},
	data() {
		return {
			token: process.env.VUE_APP_INSTA_TOKEN,
			fields: 'albums{description,photos{height,images,width,name}}',
			isOpen: false,
			isOpenGallery: false,
			optionsPS: {
				index: 0
			},
			optionsGallery: {},
			options: {
				width: 300,
				padding: {
					2: 8,
					default: 12
				},
			},
			items: []
		}
	},
	methods: {
		showPhotoSwipe(src) {

			let index = this.items.findIndex(i => i.src === src);

			this.isOpen = true
			this.$set(this.optionsPS, 'index', index)
		},
		hidePhotoSwipe() {
			this.isOpen = false
		},
		append() {
			// for (let i = 0; i < 20; i++) {
			// 	const id = Math.floor(Math.random() * 1000)
			// 	const height = Math.floor(Math.random() * 200) + 600
			// 	this.items.push({
			// 		title: `Appended ${i}`,
			// 		w: 1000,
			// 		h: 1000,
			// 		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
			// 		src: `https://picsum.photos/id/${id}/600/${height}`
			// 	})
			// }
		},
		getUserFeed() {
			this.loading = true
			axios
				.get('https://graph.facebook.com/133570825215171', {
					params: { access_token: this.token, fields: this.fields }
				})
				.then((response) => {
					console.log('FACEBOOK RESPONSE=', response);

					let { data: albums = [] } = (response && response.data && response.data.albums) || {};

					for (let i = 0; i < albums.length; i++) {
						let { description } = albums[i]
						let { data: photos = [] } = albums && albums[i].photos || {};

						for (let i = 0; i < photos.length; i++) {
							let { height, width, name, images = [] } = photos[i] || {};

							let { source } = images.find(i => i.heigth === height) || images[0];

							this.items.push({
								src: source,
								w: width,
								h: height,
								content: name,
								title: description
							})
						}
					}
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					this.loading = true
				})
		}
	},
	mounted() {
		this.getUserFeed();
	}
}
</script>

<style scoped>
.Item {
	overflow: hidden;
	border-radius: 4px;
	width: 100%;
	background: #f5f5f5;
}
.Content {
	padding: 20px;
}
img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	line-height: 0;
	display: block;
}
</style>