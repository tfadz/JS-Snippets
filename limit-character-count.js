// Limit text characters to 45 characters
$st = $('.slick-slide .product-item .product-cta h3');
$st.text(function(i, txt) {
  return txt.substring(0,45) + (txt.length > 45 ? '...' : '');
});