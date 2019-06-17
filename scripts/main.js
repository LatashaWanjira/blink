$(document).ready(function() {


  var url = window.location.href;
  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
  url = url.substr(url.lastIndexOf("/") + 1);
  // If file name not avilable
  if (url == '') {
    url = 'index.html';
  }
  $('.navlinks li').each(function() {
    var href = $(this).find('a').attr('href');
    if (url == href) {
      $(this).addClass('active');
    }
  });

  // Dropdown
  $('.dropdown-toggle .ion-md-more').click(function() {
    $('.dropdown-list').stop().slideToggle(400, 'linear')
    $('.dropdown-toggle .icon').toggleClass('ion-md-more , ion-md-close');
  })

  $(window).click(function() {
    $('.dropdown-list').stop().slideUp(400, 'linear')
    $('#toggle').removeClass('ion-md-close');
    $('#toggle').addClass('ion-md-more');
  })

  $(".dropdown").click(function(e) {
    e.stopPropagation();
  });

  // Get the modal
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  $(function() {
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
    });
  });

  $('#freeze').on('click', function() {
    $('.freeze-duration').slideToggle(400, 'linear')
  })

  $('.checkbox1').change(function() {
    if (this.checked)
      $('.datePicker').slideUp(400, 'linear')
    else
      $('.datePicker').slideDown(400, 'linear')
  });

  // Slick JS
  if ($(".children-row > div").length > 3) {
    $('.children-row').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 468,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  } else {
    $('.children-row').addClass('children-flex')
  }
});
