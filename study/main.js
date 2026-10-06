// -------------------
// 会員登録、ログイン
// -------------------

var window_a,window_b;
function newwindowa() {
  window_a = window.open("register/register.html");
}
function newwindowb() {
  window_b = window.open("login/login.html");
}


// --------------------
// スライドの表示
// --------------------
 
 
// スライド1枚あたりの幅（px）
let slideWidth1 = 0.9*innerWidth;

// 現在表示中のスライドが何番目か（0から数え始める）
let currentSlide = 0;

// スライドの全枚数
let numSlides = 4;

// index（0から始まる）番目のスライドを表示する関数
const showSlide = (index) => {
// 1番目のスライドでは左矢印を非表示
  if (index === 0) {
    $('.carousel-control-prev').hide();
  } else {
    $('.carousel-control-prev').show();
  }

  // 最後のスライドでは右矢印を非表示
  if (index === numSlides - 1) {
    $('.carousel-control-next').hide();
  } else {
    $('.carousel-control-next').show();
  }

  // 実行中のアニメーションがあればキャンセルした後、
  // leftを変化させるアニメーションを開始
  $('.slides')
    .stop()
    .animate(
      {
        left: `${-slideWidth1 * index}px`,
      },
      600,
    );
};

// 左矢印がクリックされたら1つ前のスライドを表示
$('.carousel-control-prev').on('click', (e) => {
  e.preventDefault();

  currentSlide -= 1;
  showSlide(currentSlide);
});

// 右矢印がクリックされたら1つ後のスライドを表示
$('.carousel-control-next').on('click', (e) => {
  e.preventDefault();

  currentSlide += 1;
  showSlide(currentSlide);
});

// 最初のスライドを表示
showSlide(currentSlide);

 
//ウインドウがリサイズされたら発動
$(window).resize(function() {
  
  let ww1;
 
  //ウインドウの幅を変数に格納
  ww1 = $(window).width();
  
  // スライド1枚あたりの幅（px）
  slideWidth1 = 0.9*ww1;

  // 現在表示中のスライドが何番目か（0から数え始める）
  let currentSlide = 0;

  // スライドの全枚数
  let numSlides = 4;

  // index（0から始まる）番目のスライドを表示する関数
  const showSlide = (index) => {
  // 1番目のスライドでは左矢印を非表示
    if (index === 0) {
      $('.carousel-control-prev').hide();
    } else {
      $('.carousel-control-prev').show();
    }

    // 最後のスライドでは右矢印を非表示
    if (index === numSlides - 1) {
      $('.carousel-control-next').hide();
    } else {
      $('.carousel-control-next').show();
    }

    // 実行中のアニメーションがあればキャンセルした後、
    // leftを変化させるアニメーションを開始
    $('.slides')
      .stop()
      .animate(
        {
          left: `${-slideWidth1 * index}px`,
        },
        600,
      );
  };

  // 左矢印がクリックされたら1つ前のスライドを表示
  $('.carousel-control-prev').on('click', (e) => {
    e.preventDefault();

    currentSlide -= 1;
    showSlide(currentSlide);
  });

  // 右矢印がクリックされたら1つ後のスライドを表示
  $('.carousel-control-next').on('click', (e) => {
    e.preventDefault();

    currentSlide += 1;
    showSlide(currentSlide);
  });

  // 最初のスライドを表示
  showSlide(currentSlide);

});



// ----------------------
// スライドのアニメーション
// ----------------------


$('.carousel-control').on('click', function(){

  var animationName = $('.carouselp').data('animate');

  //アニメーション要素にdata属性から取得したclassを追加　1秒後に削除
  $('.carouselp').addClass(animationName).delay(1000).queue(function(next){
    $('.carouselp').removeClass(animationName);
    next();
  });
});



// --------------------
// Upcoming event
// --------------------

  
// スライド1枚あたりの幅（px）
let slideWidth2 = 0.45*innerWidth;

// 現在表示中のスライドが何番目か（0から数え始める）
let currentSlide2 = 0;

// スライドの全枚数
let numSlides2 = 5;

// index（0から始まる）番目のスライドを表示する関数
const showSlide2 = (index) => {
  // 1番目のスライドでは左矢印を非表示
  if (index === 0) {
    $('.event-control-prev').hide();
  } else {
    $('.event-control-prev').show();
  }

  // 最後のスライドでは右矢印を非表示
  if (index === numSlides2 - 2) {
    $('.event-control-next').hide();
  } else {
    $('.event-control-next').show();
  }

  // 実行中のアニメーションがあればキャンセルした後、
  // leftを変化させるアニメーションを開始
  $('.events')
    .stop()
    .animate(
      {
        left: `${-slideWidth2 * index}px`,
      },
      600,
    );
};

// 左矢印がクリックされたら1つ前のスライドを表示
$('.event-control-prev').on('click', (e) => {
  e.preventDefault();

  currentSlide2 -= 1;
  showSlide2(currentSlide2);
});
// 右矢印がクリックされたら1つ後のスライドを表示
$('.event-control-next').on('click', (e) => {
  e.preventDefault();

  currentSlide2 += 1;
  showSlide2(currentSlide2);
});

// 最初のスライドを表示
showSlide2(currentSlide2);


//ウインドウがリサイズされたら発動
$(window).resize(function() {
  
  let ww2;
 
  //ウインドウの幅を変数に格納
  ww2 = $(window).width();

  // スライド1枚あたりの幅（px）
  slideWidth2 = 0.45*ww2;

  // 現在表示中のスライドが何番目か（0から数え始める）
  let currentSlide2 = 0;

  // スライドの全枚数
  let numSlides2 = 5;

  // index（0から始まる）番目のスライドを表示する関数
  const showSlide2 = (index) => {
  // 1番目のスライドでは左矢印を非表示
    if (index === 0) {
      $('.event-control-prev').hide();
    } else {
      $('.event-control-prev').show();
    }

    // 最後のスライドでは右矢印を非表示
    if (index === numSlides2 - 2) {
      $('.event-control-next').hide();
    } else {
      $('.event-control-next').show();
    }

    // 実行中のアニメーションがあればキャンセルした後、
    // leftを変化させるアニメーションを開始
    $('.events')
      .stop()
      .animate(
        {
          left: `${-slideWidth2 * index}px`,
        },
        600,
      );
  };

  // 左矢印がクリックされたら1つ前のスライドを表示
  $('.event-control-prev').on('click', (e) => {
    e.preventDefault();

    currentSlide2 -= 1;
    showSlide2(currentSlide2);
  });

  // 右矢印がクリックされたら1つ後のスライドを表示
  $('.event-control-next').on('click', (e) => {
    e.preventDefault();

    currentSlide2 += 1;
    showSlide2(currentSlide2);
  });

  // 最初のスライドを表示
  showSlide2(currentSlide2);

});





// ----------
// Fade in
// ----------

$('.animated1').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $('.animated1').removeClass('fadeOutUp');
      $(this.element).addClass('fadeInDown');
    }
    if (direction === 'up') {
      $('.animated1').removeClass('fadeInDown');
      $(this.element).addClass('fadeOutUp');
    }
  },
  offset: '100%',
});



// -----------
// スクロール
// -----------

$('.nav-item').on('click', (e) => {
  const destination = $(e.target).attr('href');

  // 本来のクリックイベントは処理しない
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $(destination).offset().top,
    },
    1000,
  );

  // ハンバーガーメニューが開いている場合は閉じる
  $('.navbar-toggler:visible').trigger('click');
});
