function handleFormErrors(form,response){form.find('.ajax-result').html(response.msg);console.log(response)
let errors=response.errors;if(errors){let inputs=Object.keys(errors);for(let i=0;i<inputs.length;i++){form.find('[name="'+inputs[i]+'"]').parents('.field').append('<span class="input-error">'+errors[inputs[i]][0]+'</span>')}}}
function clearFormErrors(form){form.find('.input-error').remove();}
$(function(){$('.logout').on('click',function(e){e.preventDefault();$.ajax({url:$(this).attr('href'),method:"POST",success:function(result){window.location.href='/';}})})
$('select[name="changeLanguage"]').on('change',function(){window.location.href=$('option:selected',this).attr('data-href');})
$("#cart_items").on("click",".remove-item-from-cart",function(){removeCartItem($(this))})
$('#cart-section-container').on("click",".remove-item-from-cart",function(){removeCartItem($(this))});$('#cart-section-container').on('change','.qty-select',function(){let ticketId=$(this).attr('data-ticket');if(!ticketId||ticketId==undefined){return '';}
let amount=$(this).val();if(!amount||amount==undefined){amount=0;}
addToCart(ticketId,amount,{},function(){},function(result){updateHtml(result);},function(){},'?with-section')});$('.qty-select').on('change',function(){let ticketId=$(this).attr('data-ticket');if(!ticketId||ticketId==undefined){return '';}
let amount=$(this).val();if(!amount||amount==undefined){amount=0;}
addToCart(ticketId,amount,{},function(){},function(result){updateHtml(result,ticketId);},function(){},'?w')})
$(document).on("click",".button_inc",function(){var $button=$(this);var oldValue=$button.parent().find("input").val();if($button.text()=="+"){var newVal=parseFloat(oldValue)+1;}else{if(oldValue>1){var newVal=parseFloat(oldValue)-1;}else{newVal=0;}}
$button.parent().find("input").val(newVal);});})
function openSignatureDialog(){$.magnificPopup.open({items:{src:$('#signature-dialog')},type:'inline',fixedContentPos:true,fixedBgPos:true,overflowY:'auto',closeBtnInside:false,preloader:false,midClick:true,removalDelay:300,mainClass:'my-mfp-zoom-in'});}
function openSignInDialog(){$.magnificPopup.open({items:{src:$('#sign-in-dialog')},type:'inline',fixedContentPos:true,fixedBgPos:true,overflowY:'auto',closeBtnInside:false,preloader:false,midClick:true,removalDelay:300,mainClass:'my-mfp-zoom-in'});}
$('.gift-check').mousedown(function(){let ticketId=$(this).attr('data-ticket');if(!$(this).is(':checked')){$('.div-phones-'+ticketId).show();}
else
{$('.div-phones-'+ticketId).hide();}});function addToCart(ticket_id,amount=1,data={},beforeSend,success,error,extraParams=''){$.ajax({url:window.ADD_TO_CART_URL+extraParams,method:"POST",data:{ticket_id:ticket_id,amount:amount,...data},dataType:"JSON",beforeSend:function(){beforeSend();},success:function(result){success(result);},error:function(data){error(data)},})}
function updateHtml(result,ticketid=null){if(ticketid){$('#price-'+ticketid).html(result.data['button']);}else{$('#cart_items').html(result.data['view']);$('.countCartItems').text(result.data['items']['tickets'].length);$('.cart-section-container').text(result.data['cartItems']);if($('#cart-section-container').length){$('#cart-section-container').html(result.data['sectionView']);}}}
function removeCartItem(that){let ticketId=that.attr('data-ticket');if(!ticketId||ticketId==undefined){return '';}
addToCart(ticketId,0,{},function(){},function(result){updateHtml(result);$('.td-ticket-'+ticketId).removeClass('exists-cart')},function(){},'?with-section')}