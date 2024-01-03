function init()
{
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    }
init();

var cursor=document.querySelector(".cursor")
var main=document.querySelector(".main")

//why we used here document instead of  main vvi
// bcz
document.addEventListener("mousemove",function(a)
{
cursor.style.left=a.x+20+"px" // adding 20 so that their is smooth transition

cursor.style.top=a.y+20+"px"
})

var video=document.querySelector("video")

video.addEventListener("mouseenter",function(a)
{
    cursor.innerHTML="SoundON";
    cursor.style.backgroundColor="rgb(200, 219, 24)"
    
})


video.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""; // Clear the content when leaving

  });

gsap.from(["nav>h1","nav>.nav-right>h3"],
{
opacity:0,
stagger:0.5,
delay:0.5
})



 var tl= gsap.timeline({
    scrollTrigger:
{
    trigger:".page1>h1",
scroller:".main",
// markers:true,
start:"top 14%",// ye relatively batayega top se kitna dur agar 50% matlab 50% dur
end:"top 0%",
scrub:5}
}
)



tl.to(".page1>h1",
{
x:100,
},"venom")





tl.to(".page1>video",
{
width:"80%",
left:"12%",
},"venom")




var tl2= gsap.timeline({
  scrollTrigger:
{
  trigger:".page1>video",
scroller:".main",
// markers:true,
start:"top 8%",// ye relatively batayega top se kitna dur agar 50% matlab 50% dur
end:"top 70%",
scrub:5}
}
)



tl2.to(".main",
{
  backgroundColor:"white"
})

var tl3= gsap.timeline({
    scrollTrigger:
{
    trigger:".page4",
scroller:".main",
//  markers:true,
start:"top 38%",// ye relatively batayega top se kitna dur agar 50% matlab 50% dur
end:"bottom 0%",
scrub:5}
}
)

tl3.to(".main",
{
  backgroundColor:"black"
})


var boxes=document.querySelectorAll(".box")
 
boxes.forEach(function(a) {
  a.addEventListener("mouseenter",function()
  {
    var att=a.getAttribute("data-image")
  cursor.style.width="200px";
  cursor.style.height="200px";
  cursor.style.borderRadius="0";
  cursor.style.backgroundImage=`url(${att})`
 })

 a.addEventListener("mouseleave",function()
 {
  a.style.backgroundColor="transparent"
  cursor.style.width="20px";
  cursor.style.height="20px";
  cursor.style.borderRadius="50%";
  cursor.style.backgroundImage=`none`
 })
});