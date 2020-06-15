const mmm = {
  set: function() {
    var ChoSeong = [
      0x3131, 0x3132, 0x3134, 0x3137, 0x3138,
      0x3139, 0x3141, 0x3142, 0x3143, 0x3145,
      0x3146, 0x3147, 0x3148, 0x3149, 0x314a,
      0x314b, 0x314c, 0x314d, 0x314e
    ];
    var JungSeong = [
      0x314f, 0x3150, 0x3151, 0x3152, 0x3153,
      0x3154, 0x3155, 0x3156, 0x3157, 0x3158,
      0x3159, 0x315a, 0x315b, 0x315c, 0x315d,
      0x315e, 0x315f, 0x3160, 0x3161, 0x3162,
      0x3163
    ];
    var JongSeong = [
      0x0000, 0x3131, 0x3132, 0x3133, 0x3134,
      0x3135, 0x3136, 0x3137, 0x3139, 0x313a,
      0x313b, 0x313c, 0x313d, 0x313e, 0x313f,
      0x3140, 0x3141, 0x3142, 0x3144, 0x3145,
      0x3146, 0x3147, 0x3148, 0x314a, 0x314b,
      0x314c, 0x314d, 0x314e
    ];

    $(".input, .article p, h1 a, h2, h3, h4, header span, nav a, .commentList p, .commentList .name, .commentList .name a, .commentList .date, .another_category a").each(function() {
      var text = $(this).text();
      var output = "";
      var i = 0;
      var i1, i2, i3;
      while (i < text.length) {
        var code = text.charCodeAt(i);
        if (code >= 0xAC00 && code <= 0xD7A3) {
          i3 = code - 0xAC00;
          i1 = Math.floor(i3 / (21 * 28));
          i3 = Math.floor(i3 % (21 * 28));
          i2 = Math.floor(i3 / 28);
          i3 = Math.floor(i3 % 28);
          if (i1 == 11) { //ㅇ->ㅁ
            i1 = 6;
          } else if (i1 == 18) { //ㅎ->ㅍ
            i1 = 17;
          }
          if (i3 == 21) { //ㅇ->ㅁ
            i3 = 16;
          } else if (i3 == 6) { //ㄶ->ㄵ
            i3 = 5;
          } else if (i3 == 15) { //ㅀ->ㄼ
            i3 = 11;
          }
          output += String.fromCharCode(i1 * 21 * 28 + i2 * 28 + i3 + 0xAC00);
        } else if (code == 0x3147 || code == 0x11BC || code == 0x25CB || code == 0x06c1 || code == 0x0665 || code == 0x0966 || code == 0x09f9 || code == 0x00b0) {
          output += "ㅁ"; //|ㅇ|
        } else if (code == 0x314E) {
          output += "ㅍ"; //|ㅎ|
        } else if (code == 0x006F || code == 0x03BF || code == 0x0d20) {
          output += "◻"; //|o|ο|
        } else if (code == 0x004F || code == 0x039F || code == 0x0030 || code == 0xff4f || code == 0x043e || code == 0x1c5b) {
          output += "◻"; //|O|Ο|0|ｏ|ᱛ|
        } else if (code == 2838) {
          output += "머"; //|ଖ|
        } else if (code == 0x0B17) {
          if (text.charCodeAt(i + 1) == 0x0B63) {
            output += "밀"; //|ଗୣ|
            i++;
          } else {
            output += "미"; //|ଗ|
          }
        } else if (code == 0x0B20) {
          if (text.charCodeAt(i + 1) == 0x0B3E) {
            output += "미"; //|ଠା|
            i++;
          } else {
            output += "◻"; //|ଠ|
          }
        } else if (code == 0x0028) {
          output += "["; //|(|
        } else if (code == 0x0029) {
          output += "]"; //|)|
        } else if (code == 0x25CF) {
          output += "■"; //|●|
        } else if (code == 0x25CF || code == 0xFF10 || code == 0xFF2F || code == 0x3181 || code == 0x25ef || code == 0x3007) {
          output += "□"; //|０Ｏㆁ|
        } else if (code == 0x24DE || code == 0x0398 || code == 0x2299 || code == 0x3181 || code == 0x3267 || code == 0x25ce) {
          output += "▣"; //|ⓞΘ⊙◎|
        } else if (code == 0x25d0) {
          output += "◧"; //|◐|
        } else if (code == 0x25d1) {
          output += "◨"; //|◑|
        } else {
          output += text.charAt(i);
        }
        i++;
      }

      $(this).text(output);
    });
    console.log("멈멈미믜 저주메 걸렸습니다!");
  }
}


$(document).ready(function() {
  mmm.set();
  $("button.submit").on("click", function() {
    setTimeout(function() {
      location.reload();
    }, 3000);
  })
});
