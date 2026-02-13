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
 * The OperationGetExtra model module.
 * @module model/OperationGetExtra
 * @version 15.0.0-beta.3
 */
class OperationGetExtra {
    /**
     * Constructs a new <code>OperationGetExtra</code>.
     * @alias module:model/OperationGetExtra
     * @param id {String} The unique identifier of the operation.
     * @param updated_at {Date} The timestamp when the operation was last updated.
     */
    constructor(id, updated_at) { 
        
        OperationGetExtra.initialize(this, id, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, updated_at) { 
        obj['id'] = id;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>OperationGetExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationGetExtra} obj Optional instance to populate.
     * @return {module:model/OperationGetExtra} The populated <code>OperationGetExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationGetExtra();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the operation.
 * @member {String} id
 */
OperationGetExtra.prototype['id'] = undefined;

/**
 * The timestamp when the operation was last updated.
 * @member {Date} updated_at
 */
OperationGetExtra.prototype['updated_at'] = undefined;

/**
 * The timestamp when the operation was created.
 * @member {Date} created_at
 */
OperationGetExtra.prototype['created_at'] = undefined;

/**
 * The timestamp when the operation was last seen in traffic.
 * @member {Date} last_seen_at
 */
OperationGetExtra.prototype['last_seen_at'] = undefined;






export default OperationGetExtra;

