
const navMenuMobile = document.querySelector('.nav-menu-mobile')

function showMenu() { 
    navMenuMobile.style.display = 'flex'
}
function closeMenu() { 
    navMenuMobile.style.display = 'none'
}


const scrollers = document.querySelectorAll(".scroller"); 

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { 
    addAnimation()
}

function addAnimation() { 
    scrollers.forEach((scroller) => { 
        scroller.setAttribute("data-animated", true) 
        // add data-animated="true" to every `.scroller` on the page

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => { 
            const duplicatedItem = item.cloneNode(true); 
            duplicatedItem.setAttribute("area-hidden", true);
            scrollerInner.appendChild(duplicatedItem)
        })
    });
}

