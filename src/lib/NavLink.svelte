<script lang="ts">
    export let active: boolean;
</script>

<li class="relative h-full font-barlow text-white tracking-wide uppercase text-sm lg:text-base after:absolute after:-bottom-4 after:block after:h-1 after:w-full after:duration-500 after:bg-[#969696] after:scale-0 md:after:-bottom-9 after:opacity-0 { active ? 'after:scale-100 after:bg-white after:opacity-100' : '' }">
    <slot></slot>
</li>