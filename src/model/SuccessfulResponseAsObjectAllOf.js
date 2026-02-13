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

/**
 * The SuccessfulResponseAsObjectAllOf model module.
 * @module model/SuccessfulResponseAsObjectAllOf
 * @version 15.0.0-beta.4
 */
class SuccessfulResponseAsObjectAllOf {
    /**
     * Constructs a new <code>SuccessfulResponseAsObjectAllOf</code>.
     * @alias module:model/SuccessfulResponseAsObjectAllOf
     */
    constructor() { 
        
        SuccessfulResponseAsObjectAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SuccessfulResponseAsObjectAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponseAsObjectAllOf} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponseAsObjectAllOf} The populated <code>SuccessfulResponseAsObjectAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessfulResponseAsObjectAllOf();

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






export default SuccessfulResponseAsObjectAllOf;

