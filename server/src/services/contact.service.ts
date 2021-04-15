import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CreateContactDto } from '../dtos/contact.dto';

import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { DataStoredInToken, TokenData } from '../interfaces/auth.interface';
import { Contact } from '../interfaces/contact.interface';
import { User } from '../interfaces/users.interface';
import contactModel from '../models/contact.model';
import { isEmpty } from '../utils/util';

class ContactService {
  public contact = contactModel;

  public findContactById = async (id): Promise<Contact> => {
    const findContact = await this.contact.findOne({ _id: id });
    if (!findContact) {
      throw new HttpException(409, 'Contact not found');
    }
    return findContact;
  };

  public addContact = async (currentUser: User, contact: CreateContactDto) => {
    if (currentUser._id.toString() === contact.contactId.toString()) {
      throw new HttpException(400, 'Something went wrong');
    }
    // check contact exists
    const checkContact = await this.contact.findOne({
      $or: [
        {
          $and: [{ userId: currentUser._id }, { contactId: contact.contactId }],
        },
        {
          $and: [{ userId: contact.contactId }, { contactId: currentUser._id }],
        },
      ],
    });

    if (checkContact) {
      throw new HttpException(400, 'Contact already exist');
    }
    contact.userId = currentUser._id;
    const createContact: Contact = await this.contact.create(contact);

    return createContact;
  };
}

export default ContactService;
