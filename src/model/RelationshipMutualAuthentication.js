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
import RelationshipMutualAuthenticationMutualAuthentication from './RelationshipMutualAuthenticationMutualAuthentication';

/**
 * The RelationshipMutualAuthentication model module.
 * @module model/RelationshipMutualAuthentication
 * @version 15.0.0-beta.4
 */
class RelationshipMutualAuthentication {
    /**
     * Constructs a new <code>RelationshipMutualAuthentication</code>.
     * The Mutual Authentication for client-to-server authentication. Optional.
     * @alias module:model/RelationshipMutualAuthentication
     */
    constructor() { 
        
        RelationshipMutualAuthentication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipMutualAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMutualAuthentication} obj Optional instance to populate.
     * @return {module:model/RelationshipMutualAuthentication} The populated <code>RelationshipMutualAuthentication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipMutualAuthentication();

            if (data.hasOwnProperty('mutual_authentication')) {
                obj['mutual_authentication'] = RelationshipMutualAuthenticationMutualAuthentication.constructFromObject(data['mutual_authentication']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipMutualAuthenticationMutualAuthentication} mutual_authentication
 */
RelationshipMutualAuthentication.prototype['mutual_authentication'] = undefined;






export default RelationshipMutualAuthentication;

