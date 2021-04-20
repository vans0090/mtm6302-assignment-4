// targetting the main div container
const $container = document.getElementById('container')

// adding innerHTML in the container
$container.innerHTML = `
<div id = "menu" class = "menu">
    <button id='menuBtn' class="menu-btn"><i class="fas fa-bars"></i></button>
    <div id = 'links' class='links'>
        <a href="#sectionOne">Section One</a>
        <a href="#sectionTwo">Section Two</a>
        <a href="#sectionThree">Section Three</a>
    </div>
</div>

<div id = "content">
    <div id = "sectionOne">
        <h1>Section One</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
    </div>
    <div id = "sectionTwo">
        <h1>Section Two</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
    </div>
    <div id = "sectionThree" class= "fadeOut">
        <h1>Section Three</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
    </div>
</div>`

// targetting all elements through variable added dynamically
const $menu = document.getElementById('menu')
const $menuBtn = document.getElementById('menuBtn')
const $links = document.getElementById('links')
const $content = document.getElementById('content')
const $sectionOne = document.getElementById('sectionOne')
const $sectionTwo = document.getElementById('sectiontwo')
const $sectionThree = document.getElementById('sectionThree')

// hiding menu at first place
$links.style.display = 'none'

// adding ecent listener to show the menu when button is clicked
$menuBtn.addEventListener('click', function(){
    if($links.style.display === 'none'){
        $links.style.display = 'block'
        // console.log('show')
    }
    else{
        $links.style.display = 'none'
        // console.log('hide')
    }
})

// ***************************************************************************************************************************************
    // adding and triggering css on section three when entered into the viewport
// ***************************************************************************************************************************************
const sectionThreeHeight = $sectionThree.clientHeight;
// console.log(sectionThreeHeight)

// event listerener on the document to behave when user scrolls
document.addEventListener('scroll', visible);

// funtion to return whether the element is in viewport or not
function checkInView() {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPosition = scrollY + viewportHeight;
    const sectionThreePosition = $sectionThree.getBoundingClientRect().top;

    console.log(scrollPosition, sectionThreePosition)

    if (scrollPosition > sectionThreePosition) {
        console.log('element is in viewport')
        return true;
    }
    console.log('element is not in viewport')
        return false;
}


// function to toggle between fade-in fade-out classes to trigger animation on element 3
function visible() {
    if (checkInView()) {
        $sectionThree.classList.remove('fadeOut');
        $sectionThree.classList.add('fadeIn');
    }
    else {
        $sectionThree.classList.remove('fadeIn');
        $sectionThree.classList.add('fadeOut');
    }
}

// *********************************************************************************************************************************************
// References

// https://codepen.io/jr-cologne/pen/zdYdmx
// https://developer.mozilla.org/en-US/
// *********************************************************************************************************************************************
