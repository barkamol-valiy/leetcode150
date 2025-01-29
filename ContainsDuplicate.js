function hasDuplicate(nums) {
  const korilgan = new Set(); // o'zgaruvchini yangi setga tenglaymiz.

  for (let n of nums) {
    if (korilgan.has(n)) {
      return true; // agar setda n bor bo'lsa true qaytaradi.
    }

    korilgan.add(n); // aks holda setga n qo'shamiz.
  }

  return false;
}
