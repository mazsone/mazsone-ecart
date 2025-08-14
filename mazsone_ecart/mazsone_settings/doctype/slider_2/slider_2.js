// Copyright (c) 2025, Aaran Software and contributors
// For license information, please see license.txt

frappe.ui.form.on("Slider 2", {
	refresh(frm) {

		        // List of image fieldnames to apply styling to
        const imageFields = ['background_preview', 'product_preview']; // Add more as needed

        imageFields.forEach(function(fieldname) {
            const imageField = frm.fields_dict[fieldname];
            if (imageField && imageField.$wrapper) {
                imageField.$wrapper.find('img').css({
                    'width': '250px',
                    'height': '150px',
                    'object-fit': 'contain' // or 'cover' depending on your use-case
                });
            }
        });

	},
});
