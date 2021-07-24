import { Promise } from 'mongoose';
import HttpException from '../exceptions/HttpException';
import { Contact } from '../interfaces/contact.interface';
import { User } from '../interfaces/users.interface';
import contactModel from '../models/contact.model';
import FriendService from './friend.service';

class ContactService {
  public contact = contactModel;
  public friendService = new FriendService();

  public getListContacts = async (currentUser: User, typeContact: string) => {
    const currentUserId: string = currentUser._id;
    // get type
    const type = ['request', 'contact', 'requestsent'].includes(typeContact.toLowerCase()) ? typeContact.toLowerCase() : 'contact';

    // get conditions
    let options = {};
    if (type === 'request') {
      options = {
        $and: [{ status: false }, { contactId: currentUserId }],
      };
    } else if (type === 'requestsent') {
      options = {
        $and: [{ status: false }, { userId: currentUserId }],
      };
    } else {
      options = {
        $and: [
          {
            $or: [{ contactId: currentUserId }, { userId: currentUserId }],
          },
          { status: true },
        ],
      };
    }
    const contacts: any = await this.contact
      .find(options)
      .populate('userId', 'id firstName lastName avatar createdAt')
      .populate('contactId', 'id firstName lastName avatar createdAt');
    // get list users
    const responseList = [];
    contacts.forEach(item => {
      if (item.userId.id == currentUserId) {
        responseList.push(item.contactId);
      } else if (item.contactId.id == currentUserId) {
        responseList.push(item.userId);
      }
    });

    return responseList;
  };

  public findContactById = async (id): Promise<Contact> => {
    const findContact = await this.contact.findOne({ _id: id });
    if (!findContact) {
      throw new HttpException(409, 'Contact not found');
    }
    return findContact;
  };

  public addContact = async (currentUser: User, contact: any) => {
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

  public deleteContact = async (currentUser: User, contactId: string) => {
    const findContact: Contact = await this.contact.findOne({
      $or: [
        {
          $and: [{ userId: currentUser._id }, { contactId: contactId }],
        },
        {
          $and: [{ userId: contactId }, { contactId: currentUser._id }],
        },
      ],
    });

    if (!findContact) {
      throw new HttpException(409, 'Contact does exist');
    }
    // remove contact
    await this.contact.findByIdAndDelete(findContact._id);
    // if status === true, the remove friend
    if (findContact.status) {
      await Promise.all([
        this.friendService.removeFriendByUserId(currentUser._id, findContact.contactId),
        this.friendService.removeFriendByUserId(findContact.contactId, currentUser._id),
      ]);
    }
    return findContact;
  };

  public updateContact = async (currentUser: User, contactId: string) => {
    const findContact: Contact = await this.contact.findOne({
      $or: [
        {
          $and: [{ userId: currentUser._id }, { contactId: contactId }],
        },
        {
          $and: [{ userId: contactId }, { contactId: currentUser._id }],
        },
      ],
    });
    if (!findContact) {
      throw new HttpException(400, 'Contact does exist');
    }
    await this.contact.updateOne({ _id: findContact._id }, { status: true });
    await this.friendService.addFriendByUserId(currentUser._id, findContact.contactId);
    return findContact;
  };
}

export default ContactService;
