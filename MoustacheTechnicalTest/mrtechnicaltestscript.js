$(document).ready(function () {
    var $sizeBtn = $(".size-btn");
    var $sizeText = $(".selected-size-text");
    var $addToCartBtn = $("#add-to-cart");
    var $validationMsg = $(".required-validation");
    var $miniCart = $(".mini-cart");
    var $miniCartDetail = $(".mini-cart-detail");
    var $cartQuantity = $("#cart-quantity");
    var $cartQuantityData = $("#cart-quantity").attr("data-quantity");
    var $emptyCartMsg = $(".empty-cart");
    var $fullCartMsg = $(".full-cart");
    var $price = $(".price").text();

    /* Hardcoded Quantity - otherwise the quantity will be taken from controller using ajax */
    var smallSizeCount = 0;
    var mediumSizeCount = 0;
    var largeSizeCount = 0;

    updateCartQuantity($emptyCartMsg, $fullCartMsg, $cartQuantityData);

    //When size button is clicked
    $sizeBtn.on("click", function () {
        $sizeBtn.removeClass("selected");
        $sizeText.text("");
        $validationMsg.text("*")

        $(this).addClass("selected");
        $sizeText.text($(this).attr("data-selected-value"));
    })

    //When "Add To Cart" button is clicked
    $addToCartBtn.on("click", function () {
        var $selectedSizeValue = $(".size-btn.selected").attr("data-selected-value");
        $cartQuantityData = $("#cart-quantity").attr("data-quantity");

        var $fullCart = $(".full-cart");
        var newQuantity = parseInt($cartQuantityData) + 1;

        $cartQuantity.attr("data-quantity", newQuantity);
        $cartQuantity.text(newQuantity);

        //Hardcoded otherwise taken from ajax because of dynamic item name and variants
        var variantOne = "classic-tee-small";
        var variantTwo = "classic-tee-medium";
        var variantThree = "classic-tee-large";

        var $variantOne = $(".classic-tee-small");
        var $variantTwo = $(".classic-tee-medium");
        var $variantThree = $(".classic-tee-large");

        if ($selectedSizeValue == undefined) {
            $validationMsg.text("* Please Select The Size");
        } else {
            //Hardcoded otherwise taken from ajax while looping
            if ($selectedSizeValue == "S") {

                //Increment count for small
                smallSizeCount++;

                //Check if element exists
                if ($variantOne.length <= 0) {

                    //If element is not existed then add a content
                    $fullCart.append("<div class='" + variantOne + "'><div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>1x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div></div>");
                } else {

                    //otherwise replace the existing content
                    $variantOne.html("<div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>" + smallSizeCount + "x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div>");
                }

            } else if ($selectedSizeValue == "M") {

                //Increment count for medium
                mediumSizeCount++;

                //Check if element exists
                if ($variantTwo.length <= 0) {

                    //If element is not existed then add a content
                    $fullCart.append("<div class='" + variantTwo + "'><div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>1x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div></div>");
                } else {

                    //otherwise replace the existing content
                    $variantTwo.html("<div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>" + mediumSizeCount + "x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div>");
                }

            } else {

                //Increment count for large
                largeSizeCount++;

                //Check if element exists
                if ($variantThree.length <= 0) {

                    //If element is not existed then add a content
                    $fullCart.append("<div class='" + variantThree + "'><div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>1x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div></div>");
                } else {

                    //otherwise replace the existing content
                    $variantThree.html("<div class='col col-5 cart-item-img'><img src='classic-tee.jpg' class='col-12' alt='Classic Tee' /></div><div class='col col-6 cart-item-detail'><p>Classic Tee</p><p>" + largeSizeCount + "x <strong>" + $price + "</strong></p><p>Size: " + $selectedSizeValue + "</p></div>");
                }
            }            

            //Call a function to update the mini cart
            updateCartQuantity($emptyCartMsg, $fullCartMsg, newQuantity);
        }

    });
});

//Avoid duplication - created a function (DRY)
function updateCartQuantity($emptyCartMsg, $fullCartMsg, $cartQuantityData) {
    if ($cartQuantityData <= 0) {
        $emptyCartMsg.show();
        $fullCartMsg.hide();
    } else {
        $emptyCartMsg.hide();
        $fullCartMsg.show();
    }
}
