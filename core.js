      $(document).on('click', '.javascript', function (e) {
            e.preventDefault();
            toggle = $(this).attr('toggle');
            hide = $(this).attr('hide');
            show = $(this).attr('show');
            scroll = $(this).attr('scroll');
            url = $(this).attr('location');
            remove = $(this).attr('remove');
            content = $(this).attr('content');
            alert = $(this).attr('alert');

            if (alert) {
                  alert(alert);
            }

            if (remove) {
                  $(remove).remove();
            }


            if (hide) {
                  $(hide).slideUp('fast');
            }

            if (toggle) {
                  $(toggle).slideToggle('fast');
            }

            if (show) {
                  $(show).slideDown('fast');
            }

            if (scroll) {
                  var animate_scroll = $('html, body').stop(!0,!1).animate({
                  scrollTop:$(scroll).offset().top - 50},
                  500);
                  clearTimeout(animate_scroll);
            }

            if (url) {
                  $(this).addClass('loadingi');
                  $.get(url, '', '', 'json').always(function (data) {
                  if (data.status == 'success') {
                  toastr.success(data.message);
            }

            if (data.status == 'error') {
                  toastr.error(data.message);
            }

            if (data.status == 'redirect') {
               redirect(data.message);
            }

            $('.javascript').removeClass('loadingi');
            });
        }
     });
