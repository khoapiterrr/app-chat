import { NextFunction, Response } from 'express';
import { CreateContactDto } from '../dtos/contact.dto';
import { RequestWithUser } from '../interfaces/auth.interface';
import { Contact } from '../interfaces/contact.interface';
import contactService from '../services/contact.service';

class ContactController {
  public contactService = new contactService();
  public getListContacts = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const listContacts: any = await this.contactService.getListContacts(req.user, req.params.type);
      res.status(201).json({ data: listContacts, message: 'listContacts' });
    } catch (error) {
      next(error);
    }
  };
  public createContact = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const contactData: CreateContactDto = req.body;

    try {
      const createContactData: Contact = await this.contactService.addContact(req.user, contactData);
      res.status(201).json({ data: createContactData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public removeContact = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const contactId: string = req.params.id as string;

    try {
      const deleteContactData = await this.contactService.deleteContact(req.user, contactId);
      res.status(200).json({ data: deleteContactData, message: 'delete contact' });
    } catch (error) {
      next(error);
    }
  };

  public updateContact = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const contactId: string = req.params.contactId as string;
    try {
      const updateContactData = await this.contactService.updateContact(req.user, contactId);
      res.status(200).json({ data: updateContactData, message: 'accept contact' });
    } catch (error) {
      next(error);
    }
  };
}
export default ContactController;
