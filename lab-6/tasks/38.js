
document.getElementById('qwx-blocked').addEventListener("input", function () {
  this.value = this.value.replaceAll(/[qwx]/gi, '')
});
