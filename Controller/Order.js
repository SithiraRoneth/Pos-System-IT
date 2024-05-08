import {customers} from "../db/db.js";
import CustomerModel from "../model/CustomerModel.js";

import {items} from "../db/db.js";
import ItemModel from "../model/ItemModel.js";

import {orders} from "../db/db.js";
import {OrderModel} from "../model/OrderModel.js";


$(document).ready(function() {
    // Populate customer dropdown list
    populateCustomerDropdown();

    // Listen for changes in the selected customer ID
    $('#customer_id').on('change', function () {
        const selectedCustomerId = $(this).val();
        // Fetch customer name for the selected customer ID
        const customerName = getCustomerName(selectedCustomerId);
        // Populate customer name field
        $('#customer_name1').val(customerName);
    });

    $('#order-reset').on('click', function () {
        const orderId = generateNextOrderId();
        $('#order-id').val(orderId); // Assign the generated order ID to the #order-id field

        // Set current date to the #order-date field
        const currentDate = getCurrentDate();
        $('#order-date').val(currentDate);
    });

    function populateCustomerDropdown() {
        // Clear existing options
        $("#customer_id").empty();
        // Add default option
        $("#customer_id").append('<option value="" selected disabled>Select Customer Id</option>');
        // Populate with customer IDs
        customers.forEach(function(customer) {
            $("#customer_id").append(`<option value="${customer.id}">${customer.id}</option>`);
        });
    }

    function getCustomerName(customerId) {
        // Find customer with the selected ID
        const customer = customers.find(cust => cust.id === customerId);
        return customer ? customer.name : '';
    }

    function generateNextOrderId() {
        // Find the last order ID in the orders array
        const lastOrderId = orders.length > 0 ? orders[orders.length - 1].orderId : 'O000';

        // Extract the numeric part of the ID and increment it
        const numericPart = parseInt(lastOrderId.substring(1), 10) + 1;

        // Format the new ID with leading zeros
        const newId = 'O' + numericPart.toString().padStart(3, '0');

        return newId;
    }

    function getCurrentDate() {
        // Get current date in YYYY-MM-DD format
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Add leading zero if month/day is a single digit
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    }
});


