function encrypt() {
    var input = document.getElementById("input").value;
    var encryptionKey = document.getElementById("encryptionKey").value;
    var output = document.getElementById("output");
  
    var encryptedText = CryptoJS.AES.encrypt(input, encryptionKey).toString();
  
    output.value = encryptedText;
  }
  
  function decrypt() {
    var input = document.getElementById("input").value;
    var encryptionKey = document.getElementById("encryptionKey").value;
    var output = document.getElementById("output");
  
    var decryptedText = CryptoJS.AES.decrypt(input, encryptionKey).toString(CryptoJS.enc.Utf8);
  
    output.value = decryptedText;
  }
  