import { BaseEntity } from './../../shared';

export class Sponsor implements BaseEntity {
    constructor(
        public id?: number,
        public companyName?: string,
        public businessIdentification?: string,
        public phoneNumber?: string,
        public additionalInformation?: string,
    ) {
    }
}
