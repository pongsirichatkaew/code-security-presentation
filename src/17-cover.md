---
layout: full
class: text-center relative
transition: slide-left
---

<img
  src="https://watermark.lovepik.com/photo/20211125/large/lovepik-cats-in-black-background-picture_501024334.jpg"
  class="absolute inset-0 w-full h-full object-cover"
/>

<div class="absolute inset-0 bg-black/60"></div>

<div class="relative z-10 flex flex-col items-center justify-center text-white h-full">
  <h1 class="text-6xl font-bold mb-4">
    Summary & Quiz 🐾
  </h1>

  <div
    @click="$slidev.nav.next"
    class="mt-12 py-2 px-4 inline-block rounded cursor-pointer border border-white/30 transition-all hover:bg-white/10"
  >
    Press <kbd>Space</kbd> to Continue <span class="opacity-70">(almost there)</span> <carbon:arrow-right />
  </div>
</div>
