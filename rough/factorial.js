module.exports = {
    f: [],
    fat: function(n) {
        if (n == 0 || n == 1)
            return 1;
        if (this.f[n] > 0)
            return this.f[n];
        return this.f[n] = this.fat(n-1) * n;
    }
}