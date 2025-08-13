# import frappe
#
# # -------------------
# # 1. Custom Doctype → Item
# # -------------------
# def sync_item_image_from_custom(doc, method):
#     """
#     If image is removed from custom doc, also remove from linked Item.
#     """
#     if not doc.item_code:
#         return
#
#     item = frappe.get_doc("Item", doc.item_code)
#     if not doc.item_image and item.image:
#         item.image = ""
#         item.flags.skip_custom_sync = True  # prevent loop
#         item.save(ignore_permissions=True)
#
# # -------------------
# # 2. Item → Custom Doctype
# # -------------------
# def sync_custom_image_from_item(doc, method):
#     """
#     If image is removed from Item, also remove from linked custom doctype.
#     """
#     if getattr(doc, "flags", None) and getattr(doc.flags, "skip_custom_sync", False):
#         return  # skip to avoid loop
#
#     linked_custom_docs = frappe.get_all(
#         "Catalog Details",  # your custom doctype name
#         filters={"item_code": doc.name},
#         fields=["Item Image", "item_image"]
#     )
#
#     for custom_doc in linked_custom_docs:
#         if custom_doc.item_image:
#             frappe.db.set_value("Catalog Details", custom_doc.name, "item_image", "")
