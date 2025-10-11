import { Contact } from '../db/models/contactModel.js';

export const getAllContacts = async () => 
  await Contact.find().sort({ createdAt: -1 }).lean();

export const getContactById = async (id) => 
  await Contact.findById(id).lean();

export const updateContactById = async (contactId, updateData) => 
  await Contact.findByIdAndUpdate(contactId, updateData, { new: true });

export const deleteContactById = async (contactId) => 
  await Contact.findByIdAndDelete(contactId);
