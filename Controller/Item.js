import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js";

var recordIndex;

function loadTable(){
    $('#table-item').empty();
    items.map((item) =>{
       console.log(item);
        let record = `<tr>
            <td class="item-name-value">${item.name}</td>
            <td class="item-decription-value">${item.description}</td>
            <td class="item-qty-value">${item.qty}</td>
            <td class="item-price-value">${item.price}</td>
        </tr>`;

        $("#table-item").append(record);
    });
}

function clearInput(){
   $("#itemName").val('');
   $("#itemDescription").val('');
   $("#itemQuantity").val('');
   $("#itemPrice").val('');
}

/*$("#item-save").on('click',() =>{
   var itemName = $('#itemName').val();
   var itemDesc = $('#itemDescription').val();
   var itemQty = $('#itemQuantity').val();
   var itemPrice = $('#itemPrice').val();

   let item = new ItemModel(
     itemName,itemDesc,itemQty,itemPrice
   );

   items.push(item);
   loadTable(item);
   clearInput();
   $("#newItemModal").modal("hide");
});*/
function validateField(value, pattern, errorMessage) {
   if (!pattern.test(value)) {
      $('#itemvalidationMessage').text(errorMessage);
      $('#itemValidation').modal('show');
      return false;
   }
   return true;
}

$("#item-save").on('click',() =>{
   var itemName = $('#itemName').val().trim();
   var itemDesc = $('#itemDescription').val().trim();
   var itemQty = $('#itemQuantity').val().trim();
   var itemPrice = $('#itemPrice').val().trim();

   // Validation patterns
   var namePattern = /.+/; // Any non-empty string
   var descriptionPattern = /.+/; // Any non-empty string
   var quantityPattern = /^[1-9]\d*$/; // Positive integer (does not allow zero)
   var pricePattern = /^\d+(\.\d{1,2})?$/; // Decimal number with up to 2 decimal places

   // Validate fields
   if (!validateField(itemName, namePattern, 'Please enter a valid item name.'))
      return;
   if (!validateField(itemDesc, descriptionPattern, 'Please enter a valid item description.'))
      return;
   if (!validateField(itemQty, quantityPattern, 'Please enter a valid quantity'))
      return;
   if (!validateField(itemPrice, pricePattern, 'Please enter a valid price '))
      return;

   let item = new ItemModel(
       itemName, itemDesc, itemQty, itemPrice
   );

   items.push(item);
   loadTable(item);
   clearInput();
   $("#newItemModal").modal("hide");
});

$("#item-update").on('click',() =>{
   var itemName = $('#itemName').val().trim();
   var itemDesc = $('#itemDescription').val().trim();
   var itemQty = $('#itemQuantity').val().trim();
   var itemPrice = $('#itemPrice').val().trim();

   // Validation patterns
   var namePattern = /.+/
   var descriptionPattern = /.+/;
   var quantityPattern = /^[1-9]\d*$/;
   var pricePattern = /^\d+(\.\d{2,5})?$/;

   // Validate fields
   if (!validateField(itemName, namePattern, 'Please enter a valid item name.'))
      return;
   if (!validateField(itemDesc, descriptionPattern, 'Please enter a valid item description.'))
      return;
   if (!validateField(itemQty, quantityPattern, 'Please enter a valid quantity'))
      return;
   if (!validateField(itemPrice, pricePattern, 'Please enter a valid price'))
      return;

   $("#table-Item tr").eq(recordIndex).find(".item-name-value").text(itemName);
   $("#table-Item tr").eq(recordIndex).find(".item-decription-value").text(itemDesc);
   $("#table-Item tr").eq(recordIndex).find(".item-qty-value").text(itemQty);
   $("#table-Item tr").eq(recordIndex).find(".item-price-value").text(itemPrice);

   let itemUpdate = new ItemModel(
     itemName,itemDesc,itemQty,itemPrice
   );
   items[recordIndex] = itemUpdate;
   loadTable();
   clearInput();
   $("#newItemModal").modal("hide");
});


$("#table-item").on('click','tr',function (){

   recordIndex = $(this).index();

   let id = $(this).find(".item-name-value").text();
   let desc = $(this).find(".item-decription-value").text();
   let qty = $(this).find(".item-qty-value").text();
   let price = $(this).find(".item-price-value").text();

   $("#itemName").val(id);
   $("#itemDescription").val(desc);
   $("#itemQuantity").val(qty);
   $("#itemPrice").val(price);

   $("#newItemModal").modal("show");
});

$("#item-delete").on('click',() =>{
   items.splice(recordIndex,1);
   clearInput();
   loadTable();
});