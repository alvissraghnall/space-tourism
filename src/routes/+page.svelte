<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, fade } from 'svelte/transition';

	let element: HTMLDivElement;
	let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting>
	<div
		bind:this={element}
		class="container flex items-center justify-center lg:justify-between flex-col lg:flex-row px-6 md:px-o mt-12 md:mt-24 lg:mt-36 xl:mt-48 2xl:mt-64 mx-auto w-full lg:px-12 gap-8 md:gap-16 lg:gap-32"
	>
	{#if intersecting}
		<div
			class="w-full space-y-7 flex-1 text-center lg:text-left mb-20 md:mb-40 lg:mb-0 duration-300 ease-in-out transition-all {intersecting ? 'opacity-100' : 'opacity-0' }" 
			transition:fly={{
				x: -200,
				duration: 350,
				delay: 89
			}}
		>
			<h1 class="text-lg md:text-2xl lg:text-4xl uppercase text-white font-barlowCondensed -tracking-wide">
				So, you want to travel to
			</h1>
			<h2 class="text-8xl md:text-[9rem] lg:text-[10.75rem] text-white font-belle uppercase">
				Space
			</h2>
			<p class="text-base md:text-lg text-white font-barlow text-left mt-20">
				Let's face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly
				out of this world experience!
			</p>
		</div>
		<div
			class="grid flex-1 justify-center place-items-center relative duration-300 ease-in-out transition-all group {intersecting ? '-translate-x-1' : 'translate-x-0'}"
			transition:fade={{
				duration: 400,
				delay: 150
			}}
		>
		<a
				class="w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] bg-white text-darkBlue text-xl md:text-[2rem] font-belle uppercase rounded-full grid place-items-center cursor-pointer z-30 peer"
				href="/destination">Explore</a
			>
			<span
				class="absolute rounded-full w-[15.09375rem] h-[15.09375rem] md:w-[24.35125rem] md:h-[24.35125rem] lg:h-[28.125rem] lg:w-[28.125rem]  bg-white/20 opacity-0 z-20 duration-300 peer-hover:opacity-100"
			/>
		</div>
	{/if}
	</div>
</IntersectionObserver>
<!-- <div
	class="container flex items-center justify-center lg:justify-between flex-col lg:flex-row px-6 md:px-o mt-12 md:mt-[6.625rem] lg:mt-[15.6875rem] "
>
	<div
		class="w-full md:w-[28.125rem] md:h-[20.875rem] lg:h-[23.875rem] text-center lg:text-left mb-20 md:mb-[9.75rem] lg:mb-0"
		style="opacity: 0; transform: translateX(-100px) translateZ(0px);"
	>
		<h1 class="heading text-lg md:text-2xl lg:text-4xl uppercase text-white font-barlowCondensed">
			So, you want to travel to
		</h1>
		<h2 class="text-head_lg md:text-head_xl lg:text-[10.75rem] text-white font-belle uppercase">
			Space
		</h2>
		<p class="text-base md:text-lg text-white font-barlow">
			Let's face it; if you want to go to space, you might as well genuinely go to outer space and
			not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly
			out of this world experience!
		</p>
	</div>
	<div
		class="grid place-items-center relative explore"
		style="opacity: 0; transform: translateX(100px) translateZ(0px);"
	>
		<span
			class="absolute rounded-full w-[15.09375rem] h-[15.09375rem] md:w-[24.35125rem] md:h-[24.35125rem] lg:h-[28.125rem] lg:w-[28.125rem]  bg-white/20 opacity-0 z-20 duration-300 back"
		/><a
			class="w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] bg-white text-darkBlue text-xl md:text-[2rem] font-belle uppercase rounded-full grid place-items-center cursor-pointer z-30"
			href="/destination">Explore</a
		>
	</div>
</div> -->
