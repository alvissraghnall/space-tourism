<svelte:head>
	<title>Destination</title>
	<meta name="description" content="Destination of Space Tours" />
</svelte:head>

<script lang="ts">
	import type { Item } from "$lib/types";
	import IntroText from "$lib/IntroText.svelte";
	import {DestinationText, Tabs} from "../../components";

	let items: Item[] = [
		{
			name: 'moon', 
			text: `See our planet as you've never seen it before. A perfect relaxing trip away to help regain
			perspective and come back refreshed. While you're there, take in some history by visiting the
			Luna 2 and Apollo 11 landing sites.`,
			distance: 384400,
			time: '3 days'
		},
		{
			name: 'mars', 
			text: `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest
			planetary mountain in our solar system. It's two and a half times the size of Everest!`,
			distance: '225 mil..',
			time: '9 months'
		},
		{
			name: 'europa', 
			text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.
			With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple
			relaxation in your snug wintery cabin.`,
			distance: '628 mil.',
			time: '3 years'
		},
		{
			name: 'titan', 
			text: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from
			home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of
			Saturn.`,
			distance: "1.6 bil.",
			time: "7 years"
		},];
	let activeItem = items[0];

	let changeItem = (ev: CustomEvent) => activeItem = ev.detail;

</script>

<main>
	<IntroText text="pick your destination" num={1} />

	<div class="grid grid-cols-2 container xl:px-28 mx-auto mt-20 gap-10">
		<div class="">
			<img src="/image-moon.png" alt="Moon image" />
		</div>
		<div class="">
			<Tabs {activeItem} {items} on:tabChange={changeItem} />

			<div class="space-y-10">
				<h2 class="text-white text-5xl md:text-[5rem] lg:text-8xl font-belle uppercase">{activeItem.name}</h2>
			
				<DestinationText item={activeItem} />
			</div>
			
		</div>
	</div>
</main>
