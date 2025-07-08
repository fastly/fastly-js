/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationshipMemberService from './RelationshipMemberService';
import RelationshipService from './RelationshipService';
import RelationshipUser from './RelationshipUser';
import RelationshipUserUser from './RelationshipUserUser';

/**
 * The RelationshipsForStar model module.
 * @module model/RelationshipsForStar
 * @version 12.1.0
 */
class RelationshipsForStar {
    /**
     * Constructs a new <code>RelationshipsForStar</code>.
     * @alias module:model/RelationshipsForStar
     * @implements module:model/RelationshipUser
     * @implements module:model/RelationshipService
     */
    constructor() { 
        RelationshipUser.initialize(this);RelationshipService.initialize(this);
        RelationshipsForStar.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForStar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForStar} obj Optional instance to populate.
     * @return {module:model/RelationshipsForStar} The populated <code>RelationshipsForStar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForStar();
            RelationshipUser.constructFromObject(data, obj);
            RelationshipService.constructFromObject(data, obj);

            if (data.hasOwnProperty('user')) {
                obj['user'] = RelationshipUserUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = RelationshipMemberService.constructFromObject(data['service']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipUserUser} user
 */
RelationshipsForStar.prototype['user'] = undefined;

/**
 * @member {module:model/RelationshipMemberService} service
 */
RelationshipsForStar.prototype['service'] = undefined;


// Implement RelationshipUser interface:
/**
 * @member {module:model/RelationshipUserUser} user
 */
RelationshipUser.prototype['user'] = undefined;
// Implement RelationshipService interface:
/**
 * @member {module:model/RelationshipMemberService} service
 */
RelationshipService.prototype['service'] = undefined;




export default RelationshipsForStar;

