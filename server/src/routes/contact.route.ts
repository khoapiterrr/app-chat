import { Router } from 'express';
import contactController from '../controllers/contact.controller';
import { CreateContactDto } from '../dtos/contact.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class ContactRoute implements Route {
  public path = '/contact';
  public router = Router();
  public contactCtrl = new contactController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/`, authMiddleware, validationMiddleware(CreateContactDto, 'body'), this.contactCtrl.createContact);
    this.router.get(`/:type`, authMiddleware, this.contactCtrl.getListContacts);
    this.router.delete(`/:id`, authMiddleware, this.contactCtrl.removeContact);
    this.router.put(`/:contactId`, authMiddleware, this.contactCtrl.updateContact);
  }
}

export default ContactRoute;
