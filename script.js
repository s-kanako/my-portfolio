$(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('active');        

        if ($(this).hasClass('active')) {
            $('.navmenu').addClass('active'); //クラスを付与
        } else {
            $('.navmenu').removeClass('active'); //クラスを外す
        }
    });
});


$(function(){
    $('.about_txt p').addClass('move');
    $(window).scroll(function(){
        $(".about_txt").each(function(){
            var imgPos = $(this).offset().top;    
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
            $(this).find("p").removeClass('move');
            } else {
            $(this).find("p").addClass('move');
            }
        });
    });
});


var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
var slideContsRect = []; // 要素の位置を入れるための配列
var slideContsTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
    for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
    }
    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function () {
    windowH = window.innerHeight;
    });
    // スクロールされたら
    window.addEventListener('scroll', function () {
    // スクロール位置を取得
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
        // 要素が画面の下端にかかったら
        if(windowY > slideContsTop[i] - windowH + remainder) {
        // .showを付与
        slideConts[i].classList.add('show');
        } else {
        // 逆に.showを削除
        slideConts[i].classList.remove('show');
        }
    }
});

// fadein
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});
});


var fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var windowH = window.innerHeight; // ウィンドウの高さ
var remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
    for (var i = 0; i < fadeConts.length; i++) {
    fadeContsRect.push(fadeConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < fadeContsRect.length; i++) {
    fadeContsTop.push(fadeContsRect[i].top + windowY);
    }
    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function () {
    windowH = window.innerHeight;
    });
    // スクロールされたら
    window.addEventListener('scroll', function () {
    // スクロール位置を取得
    windowY = window.pageYOffset;
    
    for (var i = 0; i < fadeConts.length; i++) {
        // 要素が画面の下端にかかったら
        if(windowY > fadeContsTop[i] - windowH + remainder) {
        // .showを付与
        fadeConts[i].classList.add('show');
        } else {
        // 逆に.showを削除
        fadeConts[i].classList.remove('show');
        }
    }
    });

// タイピング風
const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 100 * ++index);
    });
}      
typing('#typing', 'Hello My name is Kanako.');