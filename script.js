const locojs = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
locojs()


gsap.to("#page1 h2", {
  duration: 0.5,
  x: -100,
  scrollTrigger: {
    trigger: "#page1>h2",
    scroller: "#main",
    scrub: 3,
    start: 'top 20%',
    // markers:true,
  }
})
gsap.to("#page1 h1", {
  duration: 0.5,
  x: 100,
  scrollTrigger: {
    trigger: "#page1>h2",
    scroller: "#main",
    scrub: 3,
    start: 'top 15%',
    // markers:true,
  }
})
gsap.to("#navbar", {
  height: "10%",
  backgroundColor: 'transparent',
  color: 'white',
  scrollTrigger: {
    trigger: '#navbar',
    scroller: '#main',
    start: 'top -60vh',
    scrub: 2,
  }
})
gsap.to("#page3", {
  duration: 5,
  backgroundColor: 'white',
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: 'top 100%',
    end: "top 50%",
    scrub: 1,
    // markers: true,
  }
})
page61 = () => {

  var page6 = document.querySelectorAll(".page6-1")
  var page = document.querySelectorAll(".page6-1 img")
  page6.forEach((det) => {
    det.addEventListener("mousemove", (e) => {
      page.forEach(h1 => {
        h1.style.left = e.offsetX + 30 + "px"
        h1.style.transition = "0.000001s"
        h1.style.top = e.offsetY + "px"
        // console.log(e.offsetY  )

      })
    })

  });
}
page61()