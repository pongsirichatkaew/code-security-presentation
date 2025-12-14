---
layout: full
class: text-center relative fwd-logo
transition: slide-left
---

<img
  src="https://media.istockphoto.com/id/813499684/photo/furry-british-cat-white-color-on-isolated-black-background.jpg?s=612x612&w=0&k=20&c=p8my7Xog8Tce3iP0ai5DbNf0Rb34lsr0Re3NUZ_Ix2s="
  class="absolute inset-0 w-full h-full object-cover"
/>

<div class="absolute inset-0 bg-black/60"></div>

<div class="relative z-10 flex flex-col items-center justify-center text-white h-full">
  <h1 class="text-6xl font-bold mb-4">
    The End
  </h1>

  <div
    @click="$slidev.nav.next"
    class="mt-12 py-2 px-4 inline-block rounded cursor-pointer border border-white/30 transition-all hover:bg-white/10"
  >
    Press <kbd>Space</kbd> to End 
  </div>
</div>
