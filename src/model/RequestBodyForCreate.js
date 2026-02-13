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
 * The RequestBodyForCreate model module.
 * @module model/RequestBodyForCreate
 * @version 15.0.0-beta.0
 */
class RequestBodyForCreate {
    /**
     * Constructs a new <code>RequestBodyForCreate</code>.
     * All attributes for creating a domain
     * @alias module:model/RequestBodyForCreate
     * @param fqdn {String} The fully-qualified domain name for your domain. Can be created, but not updated.
     */
    constructor(fqdn) { 
        
        RequestBodyForCreate.initialize(this, fqdn);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fqdn) { 
        obj['fqdn'] = fqdn;
    }

    /**
     * Constructs a <code>RequestBodyForCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestBodyForCreate} obj Optional instance to populate.
     * @return {module:model/RequestBodyForCreate} The populated <code>RequestBodyForCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestBodyForCreate();

            if (data.hasOwnProperty('fqdn')) {
                obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The fully-qualified domain name for your domain. Can be created, but not updated.
 * @member {String} fqdn
 */
RequestBodyForCreate.prototype['fqdn'] = undefined;

/**
 * The `service_id` associated with your domain or `null` if there is no association.
 * @member {String} service_id
 */
RequestBodyForCreate.prototype['service_id'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} description
 */
RequestBodyForCreate.prototype['description'] = undefined;






export default RequestBodyForCreate;

