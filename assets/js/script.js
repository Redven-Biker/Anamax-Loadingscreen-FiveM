(function($) { "use strict";

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	$(".information-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".information-close").on('click', function () {
		$("body").removeClass("about-on");
	});
	
	$(".discord-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".discord-close").on('click', function () {
		$("body").removeClass("contact-on");
	});
	
	$(".staff").on('click', function () {
		$("body").addClass("staff-on");
	});
	$(".staff-close").on('click', function () {
		$("body").removeClass("staff-on");
	});
	
	$(".rules").on('click', function () {
		$("body").addClass("rules-on");
	});
	$(".rules-close").on('click', function () {
		$("body").removeClass("rules-on");
	});

	
})(jQuery);