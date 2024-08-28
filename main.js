                let myTotal = sessionStorage.getItem("total");
                let myCartJs = JSON.parse(sessionStorage.getItem("items"));
                if (myCartJs === null) {
                      myCartJs = []; 
                }
                if (myTotal === null) {
                   myTotal = 0;
                }
                let myshop = document.getElementById("shopGallery");
                let myshopcart = document.getElementById("actShoppingCart");
                let myshopBox = document.getElementById("actShoppingCartBox");
                let actShoppingCartTotal = document.getElementById("shoppingTotalAmt");
                let myJsonGallery = [
                  {
                     itemId: "AA",
                     item: "pancake",
                     img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
                     cost: 220,
                     note: "freshly made pancakes"
                  },
                  {
                     itemId: "AB",
                     item: "burger",
                     img: "burg.jpg",
                     cost: 220,
                     note: "beef burger with sauce"
                  },
                  {
                     itemId: "AC",
                     item: "burger",
                     img: "burg.jpg",
                     cost: 220,
                     note: "pizza with fries"
                  },
                  {
                     itemId: "AD",
                     item: "burger",
                     img: "burg.jpg",
                     cost: 220,
                     note: "veggie option"
                  }
                ];
                let shoplen = myJsonGallery.length;
                let itemlen = myCartJs.length;
                
                for (let y=0; y < itemlen; y++) {
                       myshopcart.innerHTML += '<div id="actShoppingItem"><div id="actShoppingImg" style="background:url('+myCartJs[y]["img"]+'); background-size:cover; background-position:center;"></div><div id="actShoppingName">'+myCartJs[y]["item"]+'</div><div id="actShoppingQuantity">'+myCartJs[y]["quantity"]+'</div><div id="actShoppingPrice">$ '+myCartJs[y]["cost"]+'</div>'+'</div>';
                }

                actShoppingCartTotal.innerHTML = '$ ' + myTotal;

                for (let i=0; i < shoplen; i++) {
                       myshop.innerHTML += '<div id="1" class="shopItem">'+'<div class="shopImg" style="background:url('+myJsonGallery[i]["img"]+'); background-size:cover; background-position:center;">'+'<div class="shopDesc">'+'</div>'+'</div>'+'<div class="shopTitle">'+myJsonGallery[i]["item"]+'</div>'+'<div class="shopSize">'+myJsonGallery[i]["note"]+'</div>'+'<button class="check" onclick="addItem('+i+')">'+myJsonGallery[i]["cost"]+' KSH</button>'+'</div>';
                }
                function addItem(itemNumber) {
                     let tempDict = myJsonGallery[itemNumber];
                     myCartJs = JSON.parse(sessionStorage.getItem("items"));
                     if (myCartJs === null) {
                         myCartJs = []; 
                     }
                     itemlen = myCartJs.length;
                     for (let z = 0; z < itemlen; z++) {
                         console.log(myCartJs[z]["itemId"]);
                         if (myCartJs[z]["itemId"] === tempDict["itemId"]) {
                                let tempQuat = myCartJs[z]["quantity"];
                                let tempCost = myCartJs[z]["cost"];
                                myCartJs[z]["quantity"] = parseInt(tempQuat) + 1;
                                myCartJs[z]["cost"] = parseInt(tempCost) + parseInt(myJsonGallery[itemNumber]["cost"]);
                                sessionStorage.setItem("items", JSON.stringify(myCartJs));
                                myTotal = parseInt(myTotal) + parseInt(myJsonGallery[itemNumber]["cost"]);
                                sessionStorage.setItem("total", myTotal);
                                document.getElementById('shoppingTotalAmt').innerHTML = '$ '+ myTotal;
                                let tempLenItm = myCartJs.length;
                                myshopcart.innerHTML = '';
                                for (let y=0; y < tempLenItm; y++) {
                       myshopcart.innerHTML += '<div id="actShoppingItem"><div id="actShoppingImg" style="background:url('+myCartJs[y]["img"]+'); background-size:cover; background-position:center;"></div><div id="actShoppingName">'+myCartJs[y]["item"]+'</div><div id="actShoppingQuantity">'+myCartJs[y]["quantity"]+'</div><div id="actShoppingPrice">$ '+myCartJs[y]["cost"]+'</div>'+'</div>';
                                 }
                                return 0;
                         }
                     }
                     tempDict["quantity"] = 1;
                     myCartJs.push(tempDict);
                     sessionStorage.setItem("items", JSON.stringify(myCartJs));
                     myshopcart.innerHTML += '<div id="actShoppingItem"><div id="actShoppingImg" style="background:url('+myJsonGallery[itemNumber]["img"]+'); background-size:cover; background-position:center;"></div><div id="actShoppingName">'+myJsonGallery[itemNumber]["item"]+'</div><div id="actShoppingQuantity">'+tempDict["quantity"]+'</div><div id="actShoppingPrice">$ '+myJsonGallery[itemNumber]["cost"]+'</div>'+'</div>';
                     myTotal = parseInt(myTotal) + parseInt(myJsonGallery[itemNumber]["cost"]);
                     sessionStorage.setItem("total", myTotal);
                     document.getElementById('shoppingTotalAmt').innerHTML = '$ '+ myTotal;
                }