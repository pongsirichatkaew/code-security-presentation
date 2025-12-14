---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# Resource consumption — enforcing boundaries

<div class="mb-6 text-lg">
Same endpoints, but <span v-mark.green="1">resource limits</span>.
</div>

<div class="mt-12 grid grid-cols-2 gap-10">

  <div class="p-6 rounded-lg border border-lime-400/60">
    <div class="flex items-center gap-3 mb-4">
      <carbon:data-base class="text-lime-400 text-3xl" />
      <div class="text-xl font-semibold0">
        Get all the transactions
      </div>
    </div>
    <div>

  ```ts
    app.get('/transactions', async (req, res) => {
        return transactionRepo.find({
            userId: req.user.id,
            limit: 50,
            offset: 0,
        });
    });
  ```
  </div>

  </div>
    <div class="p-6 rounded-lg border border-lime-400/60">
  <div class="flex items-center gap-3 mb-4">
    <carbon:cloud-upload class="text-lime-400 text-3xl" />
    <div class="text-xl font-semibold">
      Unbounded file upload
    </div>
  </div>

  ```ts
  app.post('/files/upload', upload({
    limits: { fileSize: 5 * 1024 * 1024 },
}), async (req, res) => {
    return fileService.save(req.file);
});
  ```
  </div>
</div> 
