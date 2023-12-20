<script lang="ts">
	import './styles.css';
	import NavLink from '$lib/NavLink.svelte';
	import { page } from '$app/stores';
	import { onMount } from "svelte";

	let windowWidth: number;

	onMount(() => {
		windowWidth = window.innerWidth;
		pageName =
		$page.url.pathname === '/'
			? 'home'
			: $page.url.pathname === '/destination'
			? 'destination'
			: $page.url.pathname === '/crew'
			? 'crew'
			: $page.url.pathname === '/technology'
			? 'technology'
			: '';
		console.log(windowWidth, pageName);
		
	});

	$: screenSize = windowWidth < 768 ? "mobile" : windowWidth < 1024 ? "tablet" : "desktop";

	let pageName: 'home' | 'destination' | 'crew' | 'technology' | '';

	const handleScreenResize = () => {
		windowWidth = window.innerWidth;
		
	}
</script>

<svelte:window on:resize={handleScreenResize}></svelte:window>

<div
	class="pt-6 hold lg:pt-10 bg-no-repeat bg-cover min-h-screen h-[44.6875rem] md:h-[64rem] lg:h-[56.25rem] md:bg-[url(/background-{pageName}-tablet.jpg)]"
	style="--pageName: url('/background-{pageName}-{screenSize}.jpg');"
>
	<nav class="flex items-center justify-between px-5 md:pl-10 md:pr-0 md:h-24 relative">
		<div><img src="/logo.svg" alt="logo" /></div>
		<span
			class=" w-[255px] lg:w-[315px] h-[1px] bg-white absolute top-1/2 left-[10.25rem] z-50 hidden lg:block"
		/>
		<div
			class="hidden md:flex h-full md:items-center justify-between  md:px-11  relative bg-white/5 backdrop-blur-sm"
		>
			<ul
				class="flex items-center lg:justify-center md:space-x-9 lg:space-x-12 w-full lg:pl-[118px] lg:pr-[165px]"
			>
				<NavLink active={$page.url.pathname === '/'}
					><a href="/" on:click={() => pageName = 'home'}><span class="mr-2">00</span>Home</a></NavLink
				>
				<NavLink active={$page.url.pathname === '/destination'}
					><a href="/destination" on:click={() => pageName = 'destination'}><span class="mr-2">01</span>Destination</a></NavLink
				>
				<NavLink active={$page.url.pathname === '/crew'}
					><a href="/crew" on:click={() => pageName = 'crew'}><span class="mr-2">02</span>crew</a></NavLink
				>
				<NavLink active={$page.url.pathname === '/technology'}
					><a href="/technology" on:click={() => pageName = 'technology'}><span class="mr-2">03</span>technology</a></NavLink
				>
			</ul>
		</div>
		<div class="md:hidden absolute top-5 right-5 z-50 cursor-pointer">
			<img src="/icon-hamburger.svg" alt="CloseIcon" />
		</div>
	</nav>
	
	<slot />
</div>

<style>

	.hold {
		background-image: url('/background-home-tablet.jpg');
	}

	@media (min-width: 768px) {
		.hold {
			background-image: var(--pageName);
		}
	}

	@media (min-width: 1024px) {
		.hold {
			background-image: var(--pageName);
		}
	}
</style>
