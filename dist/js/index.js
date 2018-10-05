var gmc = $('.gmc'),
      gm = $('.gm'),
      gma = [],
      act = 0;
    gm.each(function () {
      gma.push($(this));
    });
    $(function () {
      gallery();
    });

    function gallery() {
      gma[act + 1].on('mouseover', function () {
          $(this).addClass('on');
        })
        .on('mouseleave', function () {
          $(this).removeClass('on')
        });
      TweenMax.set(gma[act], {
        'left': '-5%',
        'opacity': '.5',
        'transformPerspective': '800',
        'rotationY': '-50',
        'scale': '.8'
      });
      TweenMax.set(gma[act + 1], {
        'left': '30%',
        'z-index': '1',
        'opacity': '1'
      });
      TweenMax.set(gma[act + 2], {
        'left': '65%',
        'opacity': '.5',
        'transformPerspective': '800',
        'rotationY': '50',
        'scale': '.8'
      });
      TweenMax.set(gma[act + 3], {
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '.6',
        'opacity': '0',
        'left': '30%'
      });
      TweenMax.set(gma[act + 4], {
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '.6',
        'opacity': '0',
        'left': '30%'
      });
    }

    function galleryRight() {
      $.each(gma, function () {
        $(this).off();
      });
      gma[OR(act)].on('mouseover', function () {
          $(this).addClass('on');
        })
        .on('mouseleave', function () {
          $(this).removeClass('on')
        });
      console.log(OR(act - 1), OR(act), OR(act + 1), OR(act + 2));
      TweenMax.to(gma[OR(act - 1)], 1, {
        'left': '-5%',
        'opacity': '.5',
        'scale': '1',
        'transformPerspective': '800',
        'rotationY': '-50',
        'scale': '.8'
      });
      TweenMax.set(gma[OR(act)], {
        'z-index': '1'
      });
      TweenMax.to(gma[OR(act)], 1, {
        'left': '30%',
        'opacity': '1',
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '1'
      });
      TweenMax.set(gma[OR(act + 1)], {
        'z-index': '0'
      });
      TweenMax.to(gma[OR(act + 1)], 1, {
        'left': '65%',
        'opacity': '.5',
        'transformPerspective': '800',
        'rotationY': '50',
        'scale': '.8'
      });
      TweenMax.to(gma[OR(act + 2)], 1, {
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '.6',
        'opacity': '0',
        'left': '30%'
      });
      act--;
      if (act < 0) act = 4;
    }

    function galleryLeft() {
      $.each(gma, function () {
        $(this).off();
      });
      gma[OR(act + 2)].on('mouseover', function () {
          $(this).addClass('on');
        })
        .on('mouseleave', function () {
          $(this).removeClass('on')
        });
      console.log(OR(act - 1), OR(act), OR(act + 1), OR(act + 2));
      TweenMax.to(gma[OR(act)], 1, {
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '.6',
        'opacity': '0',
        'left': '30%'
      });
      TweenMax.to(gma[OR(act + 1)], 1, {
        'left': '-5%',
        'opacity': '.5',
        'scale': '1',
        'transformPerspective': '800',
        'rotationY': '-50',
        'scale': '.8'
      });
      TweenMax.set(gma[OR(act + 2)], {
        'z-index': '1'
      });
      TweenMax.to(gma[OR(act + 2)], 1, {
        'left': '30%',
        'opacity': '1',
        'transformPerspective': '800',
        'rotationY': '0',
        'scale': '1'
      });
      TweenMax.set(gma[OR(act + 3)], {
        'z-index': '0'
      });
      TweenMax.to(gma[OR(act + 3)], 1, {
        'left': '65%',
        'opacity': '.5',
        'transformPerspective': '800',
        'rotationY': '50',
        'scale': '.8'
      });
      act++;
      if (act > 4) act = 0;
    }

    function OR(val) {
      if (val > 4) {
        return val - 5;
      } else if (val < 0) {
        return val + 5;
      } else {
        return val;
      }
    }