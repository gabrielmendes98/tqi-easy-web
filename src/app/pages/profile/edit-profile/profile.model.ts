import { Address } from "./address-form/address.model";
import { Contact } from "./contact-form/contact.model";
import { GeneralInfo } from "./general-info-form/general-info.model";

export interface Profile {
  address: Address;
  contact: Contact;
  generalInfo: GeneralInfo;
  hasBirthdayRestriction: Boolean;
  picture: string;
}