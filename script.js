
development.forEach(function(value){
  $('.about').after(`
  <section class=" item">
  <div class="container">
      <div class="row">
          <div class="col-lg-8">
              <div class="ratio ratio-4x3">
                  <img src="img/shots/${value.img}" alt="">
              </div>
          </div>

          <div class="col-lg-4">
              <h1>${value.title}</h1>
              <p>${value.desc}</p>

              <a href="${value.url}"><img src="img/open_in_new.svg" alt="">${value.urltext}</a>
          </div>
      </div>
  </div>
</section>
  `)
});