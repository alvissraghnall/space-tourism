<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();

    export let items: string[];
    export let activeItem: string;

</script>

<div class="mb-10">
    <ul class="flex justify-left p-0 list-none space-x-10">
        {#each items as item}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatch('tabChange', item)} class="my-0 text-lg text-[#555] cursor-pointer relative" aria-label="see {item} info">
                <div class="{ item === activeItem ? 'text-white after:w-[50%]' : 'hover:after:w-[30%] after:w-0' } text-slate-200 transition-all ease-in-out duration-300 uppercase tracking-[2.7px] leading-6 after:block after:top-full after:left-0 after:h-1 after:bg-white after:transition-all after:duration-500 after:ease-in-out after:text-white pb-2">
                    { item }
                </div>
            </li>
        {/each}
    </ul>
</div>