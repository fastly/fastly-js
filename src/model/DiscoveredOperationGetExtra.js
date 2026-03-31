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
 * The DiscoveredOperationGetExtra model module.
 * @module model/DiscoveredOperationGetExtra
 * @version 15.1.0
 */
class DiscoveredOperationGetExtra {
    /**
     * Constructs a new <code>DiscoveredOperationGetExtra</code>.
     * @alias module:model/DiscoveredOperationGetExtra
     * @param id {String} The unique identifier of the discovered operation.
     */
    constructor(id) { 
        
        DiscoveredOperationGetExtra.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>DiscoveredOperationGetExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscoveredOperationGetExtra} obj Optional instance to populate.
     * @return {module:model/DiscoveredOperationGetExtra} The populated <code>DiscoveredOperationGetExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscoveredOperationGetExtra();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('rps')) {
                obj['rps'] = ApiClient.convertToType(data['rps'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the discovered operation.
 * @member {String} id
 */
DiscoveredOperationGetExtra.prototype['id'] = undefined;

/**
 * The timestamp when the operation was last updated.
 * @member {Date} updated_at
 */
DiscoveredOperationGetExtra.prototype['updated_at'] = undefined;

/**
 * The timestamp when the operation was last seen in traffic.
 * @member {Date} last_seen_at
 */
DiscoveredOperationGetExtra.prototype['last_seen_at'] = undefined;

/**
 * Requests per second observed for this operation.
 * @member {Number} rps
 */
DiscoveredOperationGetExtra.prototype['rps'] = undefined;






export default DiscoveredOperationGetExtra;

