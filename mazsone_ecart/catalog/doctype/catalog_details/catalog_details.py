# Copyright (c) 2025, Aaran Software and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe
import re
from frappe.utils import cstr
from frappe.utils import strip_html

# Slug generator for SEO-friendly URLs
def slugify(text):
    text = cstr(text).lower()
    text = re.sub(r'[^\w\s-]', '', text)       # Remove special characters
    text = re.sub(r'[\s_-]+', '-', text)       # Replace spaces/underscores with hyphens
    return text.strip('-')


class CatalogDetails(Document):

	# Auto-generate slug from item_name
	def autoname(self):
		if not self.slug:
			self.slug = slugify(self.item_name)

	# Return SEO keywords as a list
	def get_keywords_list(self):
		if not self.seo_keywords:
			return []
		return [k.strip() for k in self.seo_keywords.split(',') if k.strip()]


@frappe.whitelist(allow_guest=True)
def get_product(slug=None, name=None):
    """Get product details by slug or name"""
    if not slug and not name:
        frappe.throw("Please provide either 'slug' or 'name'")

    # Use get_list to fetch document name by slug
    if slug:
        result = frappe.get_list("Catalog Details", filters={"slug": slug}, fields=["name"])
        if not result:
            frappe.throw("Product not found for slug: " + slug)
        name = result[0].name

    # Now get full document by name
    product = frappe.get_doc("Catalog Details", name)
    doc = product.as_dict()
    doc["seo_keywords_list"] = product.get_keywords_list()

    return doc
