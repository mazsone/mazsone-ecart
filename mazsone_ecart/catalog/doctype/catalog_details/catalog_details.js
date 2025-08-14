// Copyright (c) 2025, Aaran Software and contributors
// For license information, please see license.txt

frappe.ui.form.on("Catalog Details", {
    refresh: function(frm) {

        // Set product_discount read-only initially
        // frm.set_df_property("product_discount", "read_only", !frm.doc.allow_discount_edit);

        // List of image fieldnames to apply styling to
        const imageFields = ['preview_1', 'preview_2', 'preview_3', 'preview_4', 'preview_5', 'preview_6', 'preview_7','preview_8', 'preview_9','preview_10' ]; // Add more as needed

        imageFields.forEach(function(fieldname) {
            const imageField = frm.fields_dict[fieldname];
            if (imageField && imageField.$wrapper) {
                imageField.$wrapper.find('img').css({
                    'width': '150px',
                    'height': '150px',
                    'object-fit': 'contain' // or 'cover' depending on your use-case
                });
            }
        });
    },

    //     allow_discount_edit: function(frm) {
    //     // Toggle read-only based on checkbox
    //     frm.set_df_property("product_discount", "read_only", !frm.doc.allow_discount_edit);
    // },
	//
    // price: function(frm) {
    //     frm.trigger("calculate_discount");
    // },
    // product_offer: function(frm) {
    //     frm.trigger("calculate_discount");
    // },
    // calculate_discount: function(frm) {
    //     if (frm.doc.price && frm.doc.product_offer >= 0) {
    //         let discount_price = frm.doc.price - (frm.doc.price * frm.doc.product_offer / 100);
    //         frm.set_value("product_discount", discount_price);
    //     } else {
    //         frm.set_value("product_discount", 0);
    //     }
    // }
});



