import { Address } from "./edit-profile/address-form/address.model";
import { Contact } from "./edit-profile/contact-form/contact.model";
import { GeneralInfo } from "./edit-profile/general-info-form/general-info.model";

export interface Profile {
  address: Address;
  contact: Contact;
  generalInfo: GeneralInfo;
  hasBirthdayRestriction: Boolean;
  picture: string;
}