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
import SuccessfulResponseAsObjectAllOf from './SuccessfulResponseAsObjectAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The SuccessfulResponseAsObject model module.
 * @module model/SuccessfulResponseAsObject
 * @version 15.0.0-beta.3
 */
class SuccessfulResponseAsObject {
    /**
     * Constructs a new <code>SuccessfulResponseAsObject</code>.
     * All attributes for a domain response
     * @alias module:model/SuccessfulResponseAsObject
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/SuccessfulResponseAsObjectAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);SuccessfulResponseAsObjectAllOf.initialize(this);
        SuccessfulResponseAsObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SuccessfulResponseAsObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponseAsObject} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponseAsObject} The populated <code>SuccessfulResponseAsObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessfulResponseAsObject();
            TimestampsNoDelete.constructFromObject(data, obj);
            SuccessfulResponseAsObjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fqdn')) {
                obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('activated')) {
                obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SuccessfulResponseAsObject.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SuccessfulResponseAsObject.prototype['updated_at'] = undefined;

/**
 * Domain Identifier (UUID).
 * @member {String} id
 */
SuccessfulResponseAsObject.prototype['id'] = undefined;

/**
 * The fully-qualified domain name for your domain. Can be created, but not updated.
 * @member {String} fqdn
 */
SuccessfulResponseAsObject.prototype['fqdn'] = undefined;

/**
 * The `service_id` associated with your domain or `null` if there is no association.
 * @member {String} service_id
 */
SuccessfulResponseAsObject.prototype['service_id'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} description
 */
SuccessfulResponseAsObject.prototype['description'] = undefined;

/**
 * Denotes if the domain has at least one TLS activation or not.
 * @member {Boolean} activated
 */
SuccessfulResponseAsObject.prototype['activated'] = undefined;

/**
 * Denotes that the customer has proven ownership over the domain by obtaining a Fastly-managed TLS certificate for it or by providing a their own TLS certificate from a publicly-trusted CA that includes the domain or matching wildcard.     
 * @member {Boolean} verified
 */
SuccessfulResponseAsObject.prototype['verified'] = undefined;


// Implement TimestampsNoDelete interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TimestampsNoDelete.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TimestampsNoDelete.prototype['updated_at'] = undefined;
// Implement SuccessfulResponseAsObjectAllOf interface:
/**
 * Domain Identifier (UUID).
 * @member {String} id
 */
SuccessfulResponseAsObjectAllOf.prototype['id'] = undefined;
/**
 * The fully-qualified domain name for your domain. Can be created, but not updated.
 * @member {String} fqdn
 */
SuccessfulResponseAsObjectAllOf.prototype['fqdn'] = undefined;
/**
 * The `service_id` associated with your domain or `null` if there is no association.
 * @member {String} service_id
 */
SuccessfulResponseAsObjectAllOf.prototype['service_id'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} description
 */
SuccessfulResponseAsObjectAllOf.prototype['description'] = undefined;
/**
 * Denotes if the domain has at least one TLS activation or not.
 * @member {Boolean} activated
 */
SuccessfulResponseAsObjectAllOf.prototype['activated'] = undefined;
/**
 * Denotes that the customer has proven ownership over the domain by obtaining a Fastly-managed TLS certificate for it or by providing a their own TLS certificate from a publicly-trusted CA that includes the domain or matching wildcard.     
 * @member {Boolean} verified
 */
SuccessfulResponseAsObjectAllOf.prototype['verified'] = undefined;




export default SuccessfulResponseAsObject;

