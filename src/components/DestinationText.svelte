<script lang="ts">
	import type { Item } from "$lib/types";

	export let item: Item;
</script>

<article class="mb-14 text-white leading-8 text-lg font-barlow divide-y divide-neutral-400">
	<div class="pb-16">
		{item.text}
	</div>

	<div class="flex items-center py-8">
		<div class="flex-1 text-center lg:text-left space-y-3">
			<p class="text-slate-400 uppercase text-sm tracking-[2.36px] font-barlowCondensed">
				avg. distance
			</p>
			<p class="text-white uppercase font-belle text-[1.75rem]">{item.distance} km</p>
		</div>
		<div class="flex-1 text-center lg:text-left space-y-3">
			<p class="text-slate-400 uppercase text-sm tracking-[2.36px] font-barlowCondensed">
				Est. travel time
			</p>
			<p class="text-white uppercase font-belle text-[1.75rem]">{item.time}</p>
		</div>
	</div>
</article>
