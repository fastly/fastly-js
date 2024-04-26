/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
import ServiceAuthorizationDataRelationshipsUser from './ServiceAuthorizationDataRelationshipsUser';

/**
 * The ServiceAuthorizationDataRelationships model module.
 * @module model/ServiceAuthorizationDataRelationships
 * @version 7.2.0
 */
class ServiceAuthorizationDataRelationships {
    /**
     * Constructs a new <code>ServiceAuthorizationDataRelationships</code>.
     * @alias module:model/ServiceAuthorizationDataRelationships
     */
    constructor() { 
        
        ServiceAuthorizationDataRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAuthorizationDataRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationDataRelationships} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationDataRelationships} The populated <code>ServiceAuthorizationDataRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAuthorizationDataRelationships();

            if (data.hasOwnProperty('service')) {
                obj['service'] = RelationshipMemberService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ServiceAuthorizationDataRelationshipsUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipMemberService} service
 */
ServiceAuthorizationDataRelationships.prototype['service'] = undefined;

/**
 * @member {module:model/ServiceAuthorizationDataRelationshipsUser} user
 */
ServiceAuthorizationDataRelationships.prototype['user'] = undefined;






export default ServiceAuthorizationDataRelationships;

