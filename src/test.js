app.get('/transactions', async (req, res) => {
    return transactionRepo.find({
        userId: req.user.id,
        limit: 50,
        offset: 0,
    });
});