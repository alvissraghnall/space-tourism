<svelte:head>
	<title>Destination</title>
	<meta name="description" content="Destination of Space Tours" />
</svelte:head>

<script lang="ts">
	import Tabs from "../../components/Tabs.svelte";

	let items = ['moon', 'mars', 'europa', 'titan'];
	let activeItem = items[0];

	let changeItem = (ev: CustomEvent) => activeItem = ev.detail;

</script>

<main>
	<header class="mx-auto w-fit md:mx-0 md:pl-10 lg:pl-40 mt-6 md:mt-10 lg:mt-20">
		<h1
			class="font-barlowCondensed text-base md:text-xl lg:text-3xl lg:tracking-[4.72px] uppercase text-white mb-8 md:mb-16 lg:mb-[4.4rem]"
		>
			<span
				class="mr-[1.125rem] md:mr-[1.15rem] lg:mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25"
				>01</span
			>pick your destination
		</h1>
	</header>

	<div class="grid grid-cols-2 container xl:px-28 mx-auto mt-20 gap-10">
		<div class="">
			<img src="/image-moon.png" alt="Moon image" />
		</div>
		<div class="">
			<Tabs {activeItem} {items} on:tabChange={changeItem} />

			<div class="space-y-10">
				<h2 class="text-white text-5xl md:text-[5rem] lg:text-8xl font-belle uppercase">{activeItem}</h2>
			
				<article class="mb-14 text-white leading-8 text-lg font-barlow">
					
					{#if activeItem === items[0]}
						See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
						
						{:else if activeItem === items[1]}
						Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!
							
						{:else if activeItem === items[2]}
						The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
						
						{:else if activeItem === items[3]}
						The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.

					{/if}

				</article>
			</div>
			
		</div>
	</div>
</main>
