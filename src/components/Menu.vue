 <template>
	<div class="menu">
		<div class="menu-icon" @click="show = !show">
			<svg @click="toggleNav()" :class="{ active: changed }" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
				<transition-group name="layout" tag="g">
					<rect class="items line1" ref="rect" key="rect1" width="15" height="2" />
					<rect class="items line2" ref="rect" key="rect2" x="0" y="6" width="30" height="2" />
					<rect class="items line3" ref="rect" key="rect3" x="15" y="12" width="15" height="2" />
				</transition-group>
			</svg>
		</div>

		<div id="myNav" class="overlay" @click="toggleNav()">
			<div class="overlay-content">
				<router-link to="/" class="header__nav-item">Accueil</router-link>
				<router-link to="/cours" class="header__nav-item">Apprendre</router-link>
				<router-link to="/creations" class="header__nav-item">Découvrir</router-link>
				<router-link to="/a-propos" class="header__nav-item">à propos</router-link>
				<router-link to="/contact" class="header__nav-item">Contact</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			changed: false
		}
	},
	methods: {
		toggleNav() {
			this.changed = !this.changed;
			if (this.changed) document.getElementById("myNav").style.width = "100%";
			else document.getElementById("myNav").style.width = "0%";
		}
	}
}
</script>

<style lang="scss" scoped>
.menu-icon {
	position: fixed;
	z-index: 10;
	left: auto;
	right: 40px;
	top: 33px;
	cursor: pointer;
	z-index: 10;
	transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
	z-index: 999;
}
.menu-icon:hover {
	transform: scale(1.1);
}
@media screen and (max-width: 999px) {
	.menu-icon {
		left: auto;
		right: 40px;
		top: 33px;
	}
}

.active {
	fill: black;
}
.active .rect {
	transform: translate3d(0, 30px, 0);
}
.active .line1 {
	transform: translateX(1px) rotate(45deg);
}
.active .line2 {
	transform: translate3d(-4px, 18px, 0px) rotate(-45deg);
}
.active .line3 {
	transform: translate3d(10px, -7px, 0px) rotate(45deg);
}

.items {
	transition: all 0.4s ease;
}

.overlay {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: rgb(246, 236, 221);
	overflow-x: hidden;
	transition: 0.5s;
}

.overlay-content {
	position: relative;
	top: 25%;
	width: 100%;
	text-align: center;
	margin-top: 30px;
	text-transform: uppercase;
}

.overlay a {
	padding: 8px;
	text-decoration: none;
	font-size: 36px;
	color: #818181;
	display: block;
	transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
	color: #f1f1f1;
}

.overlay .closebtn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 60px;
}

@media screen and (max-height: 450px) {
	.overlay a {
		font-size: 20px;
	}
	.overlay .closebtn {
		font-size: 40px;
		top: 15px;
		right: 35px;
	}
}
</style>