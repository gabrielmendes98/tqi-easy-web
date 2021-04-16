import { Address } from '../models/address.model'
import { Contact } from '../models/contact.model'
import { GeneralInfo } from '../models/general-info.model'
import { Profile } from '../models/profile.model'

const address: Address = {
  cep: '12345678',
  number: 123
}

const contact: Contact = {
  cellPhone: '123',
  landPhone: '123',
  alternativeEmail: 'test@test.com'
}

const generalInfo: GeneralInfo = {
  hasChildren: false,
  isMarried: false,  
}

export const mockProfile: Profile = {
  address: address,
  contact: contact,
  generalInfo: generalInfo,
  hasBirthdayRestriction: false,
  picture: 'fakeurl',
}