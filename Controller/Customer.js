import CustomerModel from "../model/CustomerModel";
import {customers} from "../db/db.js";

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
