---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# API04:2023 — Unrestricted Resource Consumption

Both endpoints work correctly, but neither defines <span v-mark.orange="1">usage boundaries</span>

<div class="mt-12 grid grid-cols-2 gap-10">

  <div class="p-6 rounded-lg border ">
    <div class="flex items-center gap-3 mb-4">
      <carbon:data-base class="text-3xl" />
      <div class="text-xl font-semibold0">
        Get all the transactions
      </div>
    </div>
    <div>

  ```ts
    app.get('/transactions', async (req, res) => {
      return transactionRepo.find({
        userId: req.user.id,
      });
    });
  ```
  </div>

  </div>
    <div class="p-6 rounded-lg border">
  <div class="flex items-center gap-3 mb-4">
    <carbon:cloud-upload class="text-3xl" />
    <div class="text-xl font-semibold">
      Unbounded file upload
    </div>
  </div>

  ```ts
  app.post('/files/upload', async (req, res) => {
    return fileService.save(req.file);
  });
  ```
  </div>
</div> 
