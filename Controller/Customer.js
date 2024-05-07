import CustomerModel from "../model/CustomerModel.js";
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
/*$('#customer-save').on('click',() =>{
   var customerId = $('#customerID').val();
   var customerName = $('#customerName').val();
   var customerAddress = $('#customerAddress').val();
   var customerContact = $('#customerPhone').val();

   let customer = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );

   customers.push(customer);
   console.log(customer);
   loadTable();
   $("#newCustomerModal").modal("hide");

   $("#customer-reset").click();
});

/!*$("#customer-update").on('click',() =>{
   var customerId = $('#customerID').val();
   var customerName = $('#customerName').val();
   var customerAddress = $('#customerAddress').val();
   var customerContact = $('#customerPhone').val();

   let customerUpdate = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );

   loadTable(customerUpdate);
   $("#customer-reset").click();
});*!/
$("#customer-update").on("click", function() {
   // Get updated data from modal fields
   var customerId = $('#customerID').val();
   var customerName = $('#customerName').val();
   var customerAddress = $('#customerAddress').val();
   var customerContact = $('#customerPhone').val();

   // Update the corresponding row data in the table
   $("#table-Customer tr").eq(recordIndex).find(".customer-id-value").text(customerId);
   $("#table-Customer tr").eq(recordIndex).find(".customer-name-value").text(customerName);
   $("#table-Customer tr").eq(recordIndex).find(".customer-address-value").text(customerAddress);
   $("#table-Customer tr").eq(recordIndex).find(".customer-contact-value").text(customerContact);

   let customerUpdate = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );
   loadTable(customerUpdate);
   // Close the modal window
   $("#newCustomerModal").modal("hide");
});

$("#customer-delete").on('click',() =>{
   customers.splice(recordIndex,1);
   loadTable();
   $("#customer-reset").click();
});*/

function inputClear(){
   $("#customerID").val('');
   $("#customerName").val('');
   $("#customerAddress").val('');
   $("#customerPhone").val('');

}
function validateField(value, pattern, errorMessage) {
   if (!pattern.test(value)) {
      $('#validationMessage').text(errorMessage);
      $('#customerValidation').modal('show');
      return false;
   }
   return true;
}

$('#customer-save').on('click',() =>{
   var customerId = $('#customerID').val().trim();
   var customerName = $('#customerName').val().trim();
   var customerAddress = $('#customerAddress').val().trim();
   var customerContact = $('#customerPhone').val().trim();

   // Validation patterns
   var idPattern = /^[a-zA-Z0-9]{4,}$/;
   var namePattern = /^[a-zA-Z\s]{5,}$/;
   var addressPattern = /.+/;
   var contactPattern = /^\d{10}$/;

   // Validate fields
   if (!validateField(customerId, idPattern, 'Please enter a valid customer ID '))
      return;
   if (!validateField(customerName, namePattern, 'Please enter a valid name'))
      return;
   if (!validateField(customerAddress, addressPattern, 'Please enter a valid  address.'))
      return;
   if (!validateField(customerContact, contactPattern, 'Please enter a valid contact number.'))
      return;

   // If all fields are valid, proceed with saving
   let customer = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );

   customers.push(customer);
   console.log(customer);
   loadTable();
   inputClear();
   $("#newCustomerModal").modal("hide");

   $("#customer-reset").click();
});

$("#customer-update").on("click", function() {
   var customerId = $('#customerID').val().trim();
   var customerName = $('#customerName').val().trim();
   var customerAddress = $('#customerAddress').val().trim();
   var customerContact = $('#customerPhone').val().trim();

   // Validation patterns
   var idPattern = /^[a-zA-Z0-9]{4,}$/;
   var namePattern = /^[a-zA-Z\s]{5,}$/;
   var addressPattern = /.+/;
   var contactPattern = /^\d{10}$/;

   // Validate fields
   if (!validateField(customerId, idPattern, 'Please enter a valid customer ID '))
      return;
   if (!validateField(customerName, namePattern, 'Please enter a valid name '))
      return;
   if (!validateField(customerAddress, addressPattern, 'Please enter a valid address.'))
      return;
   if (!validateField(customerContact, contactPattern, 'Please enter a valid contact number.'))
      return;


   $("#table-Customer tr").eq(recordIndex).find(".customer-id-value").text(customerId);
   $("#table-Customer tr").eq(recordIndex).find(".customer-name-value").text(customerName);
   $("#table-Customer tr").eq(recordIndex).find(".customer-address-value").text(customerAddress);
   $("#table-Customer tr").eq(recordIndex).find(".customer-contact-value").text(customerContact);

   let customerUpdate = new CustomerModel(
       customerId,customerName,customerAddress,customerContact
   );
   customers[recordIndex] = customerUpdate;

   loadTable();
   inputClear();

   $("#newCustomerModal").modal("hide");
});

$("#table-Customer").on("click", "tr", function() {
   // Get the index of the clicked row
   recordIndex = $(this).index();

   let id = $(this).find(".customer-id-value").text();
   let name = $(this).find(".customer-name-value").text();
   let address = $(this).find(".customer-address-value").text();
   let contact = $(this).find(".customer-contact-value").text();

   $("#customerID").val(id);
   $("#customerName").val(name);
   $("#customerAddress").val(address);
   $("#customerPhone").val(contact);

   $("#newCustomerModal").modal("show");
});

$("#customer-delete").on('click',() =>{
   customers.splice(recordIndex,1);
   inputClear();
   loadTable();
});

$("#customer-search").on("click", function() {
   var searchCustomerId = $("#customerSearchID").val().trim();
   var foundCustomer = customers.find(customer => customer.id === searchCustomerId);

   if (foundCustomer) {
      $("#customerID").val(foundCustomer.id);
      $("#customerName").val(foundCustomer.name);
      $("#customerAddress").val(foundCustomer.address);
      $("#customerPhone").val(foundCustomer.contact);

      $("#newCustomerModal").modal("show");
   } else {
      alert("Customer not found.");
   }
});

