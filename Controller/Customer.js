import CustomerModel from "../model/CustomerModel";
import {customers} from "../db/db.js";

var recordIndex;
function loadTable(){
    $('#table-Customer').empty();
    customers.map((item) =>{
        console.log(item);
        let record = `<tr>
            <td class="customer-id-value">${item.id}</td>
            <td class="customer-name-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-contact-value">${item.contact}</td>
        </tr>`;
        $("#table-Customer").append(record);
    });
}
$('#customer-save').on('click',() =>{
   var customerId = $('#customerID').val();
   var customerName = $('#customerName').val();
   var customerAddress = $('#customerAddress').val();
   var customerContact = $('#customerPhone').val();

   let customer = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );

   customers.push(customer);

   loadTable();

   $("#customer-reset").click();
});

$("#customer-update").on('click',() =>{
   var customerId = $('#customerID').val();
   var customerName = $('#customerName').val();
   var customerAddress = $('#customerAddress').val();
   var customerContact = $('#customerPhone').val();

   let customerUpdate = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );

   loadTable(customerUpdate);
   $("#customer-reset").click();
});

$("#customer-delete").on('click',() =>{
   customers.splice(recordIndex,1);
   loadTable();
   $("#customer-reset").click();
});

$("#table-Customer").on('click','tr',() =>{
   let index = $(this).index();
   recordIndex = index;

   console.log(index);

   let id = $(this).find(".customer-id-value").text();
   let name = $(this).find(".customer-name-value").text();
   let address = $(this).find(".customer-address-value").text();
   let contact = $(this).find(".customer-contact-value").text();

   $("#customerID").val(id);
   $("#customerName").val(name);
   $("#customerAddress").val(address);
   $("#customerPhone").val(contact);
});
