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

$("#item-save").on('click',() =>{
   var itemName = $('#itemName').val();
   var itemDesc = $('#itemDescription').val();
   var itemQty = $('#itemQuantity').val();
   var itemPrice = $('#itemPrice').val();

   let item = new ItemModel(
     itemName,itemDesc,itemQty,itemPrice
   );

   items.push(item);
   loadTable(item);

   $("#newItemModal").modal("hide");
});

$("#item-delete").on('click',() =>{
   items.splice(recordIndex,1);
   loadTable();
});

$("#table-item").on('click','tr',function (){
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