import $ from "jquery"
import './app2.css'
const $tabBar = $('#app2 .tabBar')
const $tabContent = $('#app2 .tabContent')


$tabBar.on("click", "li", e=> {
    const $li = $(e.currentTarget);
    const index = $li.index()
    $li.addClass('clickChange').siblings().removeClass('clickChange');
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
})