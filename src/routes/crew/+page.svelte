<svelte:head>
	<title>Crew</title>
	<meta name="crew" content="Meet your crew" />
</svelte:head>

<div class="text-left">
	<IntroText text="meet your crew" num={2} />
	<div class="flex w-full flex-col justify-center items-center md:flex-col-reverse lg:flex-row-reverse container mx-auto px-6 md:px-11">
		<div
			class="border-b border-[hsl(231,77%,90%)] md:border-none w-full h-56 md:h-[33rem]  max-w-xl lg:max-h-[42rem] overflow-hidden flex-1"
		>
			<img
				src="/image-anousheh-ansari.png"
				alt="image of Anousheh Ansari"
				class="h-56 md:h-[33rem] mx-auto lg:mr-0"
			/>
		</div>
		<div class="lg:items-start lg:justify-between justify-center items-center lg:text-left flex flex-col md:flex-col-reverse flex-1">
			<div
				class="mb-8 flex items-start justify-center space-x-4 lg:space-x-6 mt-28 md:mt-0"
				style=""
			>
				<span class="crew-crew" /><span class="crew-crew" /><span class="crew-crew" /><span
					class="crew-crew active"
				/>
			</div>
			<div style="">
				<h2 class="font-belle text-[hsl(231,77%,90%)] uppercase text-base mb-2 md:mb-4 md:text-2xl lg:text-4xl lg:mb-6">Flight Engineer</h2>
				<h3 class="text-2xl font-belle uppercase mb-7 text-[hsl(0,0%,100%)] md:text-4xl lg:mb-10 lg:text-6xl">Anousheh Ansari</h3>
				<p class="font-barlow md:mb-10 md:leading-7 lg:mb-28 lg:leading-8 lg:text-xl text-[hsl(231,77%,90%)] text-base">
					Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari
					was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS,
					and the first Iranian in space.
				</p>
			</div>
		</div>
	</div>
</div>

<script>
	import IntroText from "$lib/IntroText.svelte";
</script>