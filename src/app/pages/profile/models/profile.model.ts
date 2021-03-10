import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { GeneralInfo } from "./general-info.model";

export interface Profile {
  address: Address;
  contact: Contact;
  generalInfo: GeneralInfo;
  hasBirthdayRestriction: Boolean;
  picture: string;
}