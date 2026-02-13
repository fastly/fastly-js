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
 * The RequestBodyForUpdate model module.
 * @module model/RequestBodyForUpdate
 * @version 15.0.0-beta.1
 */
class RequestBodyForUpdate {
    /**
     * Constructs a new <code>RequestBodyForUpdate</code>.
     * All attributes for updating a domain
     * @alias module:model/RequestBodyForUpdate
     */
    constructor() { 
        
        RequestBodyForUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestBodyForUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestBodyForUpdate} obj Optional instance to populate.
     * @return {module:model/RequestBodyForUpdate} The populated <code>RequestBodyForUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestBodyForUpdate();

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
 * The `service_id` associated with your domain or `null` if there is no association.
 * @member {String} service_id
 */
RequestBodyForUpdate.prototype['service_id'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} description
 */
RequestBodyForUpdate.prototype['description'] = undefined;






export default RequestBodyForUpdate;

