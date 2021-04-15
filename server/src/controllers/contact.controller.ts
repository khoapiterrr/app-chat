import { RequestWithUser } from '../interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import contactService from '../services/contact.service';
import { CreateContactDto } from '../dtos/contact.dto';
import { Contact } from '../interfaces/contact.interface';

class ContactController {
  public contactService = new contactService();

  public createContact = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const contactData: CreateContactDto = req.body;

    try {
      const createContactData: Contact = await this.contactService.addContact(req.user, contactData);
      res.status(201).json({ data: createContactData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
export default ContactController;
