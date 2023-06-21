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

/**
 * The Service model module.
 * @module model/Service
 * @version 4.2.1
 */
class Service {
    /**
     * Constructs a new <code>Service</code>.
     * @alias module:model/Service
     */
    constructor() { 
        
        Service.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Service();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Service.prototype['comment'] = undefined;

/**
 * The name of the service.
 * @member {String} name
 */
Service.prototype['name'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
Service.prototype['customer_id'] = undefined;






export default Service;

