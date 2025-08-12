// Copyright (c) 2025, Aaran Software and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Catalog Details", {
//     refresh: function(frm) {
//         // Adjust the size of the image field (replace 'image_fieldname' with actual fieldname)
//         const imageField = frm.fields_dict['preview_image'];
// 		const imageField_1 = frm.fields_dict['preview_image_1'];
//
//         if (imageField && imageField.$wrapper) {
//             // Set image size via CSS
//             imageField.$wrapper.find('img').css({
//                 'width': '150px',
//                 'height': '150px',
//                 'object-fit': 'contain' // or 'cover' depending on your use-case
//             });
//         }
// 		 if (imageField_1 && imageField_1.$wrapper) {
//             // Set image size via CSS
//             imageField_1.$wrapper.find('img').css({
//                 'width': '150px',
//                 'height': '150px',
//                 'object-fit': 'contain' // or 'cover' depending on your use-case
//             });
//         }
//
//     }
// });


frappe.ui.form.on("Catalog Details", {
    refresh: function(frm) {
        // List of image fieldnames to apply styling to
        const imageFields = ['preview_image', 'preview_image_1', 'preview_image_2', 'preview_image_3', 'preview_image_4', 'preview_image_5']; // Add more as needed

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
    }
});



