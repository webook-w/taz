$(()=>{const headerCloseButton=$("#close-header-menu");const headerCollapseSection=$("#navbarHeader");headerCloseButton.click(()=>{headerCollapseSection.removeClass("show")})
$(window).scroll(()=>{headerCollapseSection.removeClass("show")})})
$(()=>{const mainContentSection=$("#content");const headerHeight=$("#header").outerHeight(true);const footerHeight=$("#footer").outerHeight(true);mainContentSection.css({minHeight:`calc(100vh - ${headerHeight+footerHeight}px)`});$(window).resize(()=>{const headerHeight=$("#header").outerHeight(true);const footerHeight=$("#footer").outerHeight(true);mainContentSection.css({minHeight:`calc(100vh - ${headerHeight+footerHeight}px)`});})})
$(()=>{const buttonShowPassword=$(".show-password");buttonShowPassword.click(function(){const passwordFeild=$(this).prev();if($(this).hasClass("active")){passwordFeild.attr("type","password");$(this).removeClass("active");}else{passwordFeild.attr("type","text");$(this).addClass("active")}})})
const otpInput=document.querySelectorAll('.otp-input input');if(otpInput){otpInput.forEach((input)=>{input.onkeyup=(e)=>{const element=e.target;if(element.value.match(/\d/)){if(element.nextElementSibling){element.nextElementSibling.focus();}}else{e.target.value=""}}})}
$(()=>{let carousel=$('#slides');let carouselContainer=$("section.characters");let threshold=150;let slideWidth=$("#slides .slide").outerWidth(true);let slideHeight=$("#slides .slide").outerHeight(true);let offsetStart;let offsetEnd;carouselContainer.css({height:slideHeight});$(window).resize(()=>{slideWidth=$("#slides .slide").outerWidth();const slideHeight=$("#slides .slide").outerHeight();carouselContainer.css({height:slideHeight});});$('#next').click(function(){shiftSlide(-1)})
$('#prev').click(function(){shiftSlide(1)})
carousel.on('mousedown',function(e){if(carousel.hasClass('transition'))return;offsetStart=e.pageX;$(this).on('mousemove',(e)=>{offsetEnd=e.pageX;$(this).css('transform','translateX('+offsetMove()+'px)')})
$(document).on('mouseup',()=>{if(offsetMove()>threshold){return shiftSlide(-1)}
if(offsetMove()<-threshold){return shiftSlide(1)}
shiftSlide(0);})});function offsetMove(){return offsetEnd-offsetStart;}
function shiftSlide(direction){if(carousel.hasClass('transition'))return;offsetEnd=offsetStart;$(document).off('mouseup')
carousel.off('mousemove').addClass('transition').css('transform','translateX('+-(direction*slideWidth)+'px)');setTimeout(()=>{if(direction===1){$('#slides .slide:first').before($('#slides .slide:last'));}else if(direction===-1){$('#slides .slide:last').after($('#slides .slide:first'));}
carousel.removeClass('transition')
carousel.css('transform','translateX(0px)');},700)}});$(()=>{const headingItems=$("body.privacy-policy .items-heading h2");const contentBodyItems=$("body.privacy-policy .text .item-body");headingItems.each(function(){$(this).click(()=>{headingItems.each((index,item)=>$(item).removeClass("active"))
$(this).addClass("active")
contentBodyItems.each((index,item)=>{$(item).removeClass("show");$(item).attr("id")===$(this).attr("data-collapse-item")?$(item).addClass("show"):null;})})})})
if(document.querySelector("body.sell-ticket #ticket_images")){const inputFile=document.querySelector("#ticket_images");const uploaderFilesBox=document.querySelector(".file-field");const ticketGallery=document.querySelector(".file-field + .ticket-gallery");let allImages=new DataTransfer();inputFile.oninput=(e)=>{const files=[...e.target.files];files.forEach((file)=>addImageFile(file))}
['dragenter','dragover'].forEach(eventName=>{uploaderFilesBox.addEventListener(eventName,(e)=>{e.preventDefault();e.stopPropagation();uploaderFilesBox.classList.add("active")},false)});['dragleave','drop'].forEach(eventName=>{uploaderFilesBox.addEventListener(eventName,(e)=>{e.preventDefault();e.stopPropagation();uploaderFilesBox.classList.remove("active")},false)});uploaderFilesBox.ondrop=(e)=>{let files=[...e.dataTransfer.files];files.forEach((file)=>{if((file.type.includes("image")||file.type.includes("pdf"))){addImageFile(file)}})}
const addImageFile=(img)=>{allImages.items.add(img)
let reader=new FileReader();reader.readAsDataURL(img);reader.onloadend=()=>{let imgSrc=reader.result;let ticketImage=document.createElement("div");ticketImage.classList.add("image");ticketImage.innerHTML=`<img src=${imgSrc} alt="ticket"/>`;ticketGallery.appendChild(ticketImage);}
inputFile.files=allImages.files;}}
$(()=>{const checkboxAgree=$("body.sell-ticket article.popup input.form-check-input");const buttonAgree=$('body.sell-ticket article.popup button[type="submit"]');const popupSection=$('body.sell-ticket article.popup');checkboxAgree.change(()=>{if(checkboxAgree[0].checked===true){buttonAgree.addClass("active");}else{buttonAgree.removeClass("active");}})})
$(()=>{const actionButton=$('body[class*="seller-account"] .actions div > a');const accountActionButton=$('body[class*="user-account"] .event .show-tickets');actionButton.click(showPopup);actionButton.click(accountActionButton);function showPopup(){const popup=$(this).parent().children(".action-popup");const overlay=$(this).parent().children(".action-overlay");popup.addClass("show");overlay.addClass("show");$("body").css({overflow:"hidden"})}
const popup=$(".actions .action-popup");const popupClose=$(".actions .action-popup .close");const overlay=$(".actions .action-overlay");overlay.click(hidePopup);popupClose.click(hidePopup);function hidePopup(){popup.removeClass("show");overlay.removeClass("show");$("body").css({overflow:"auto"})}})