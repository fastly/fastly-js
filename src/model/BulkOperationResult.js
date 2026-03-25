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
 * The BulkOperationResult model module.
 * @module model/BulkOperationResult
 * @version 15.1.0-rc.0
 */
class BulkOperationResult {
    /**
     * Constructs a new <code>BulkOperationResult</code>.
     * @alias module:model/BulkOperationResult
     */
    constructor() { 
        
        BulkOperationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkOperationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkOperationResult} obj Optional instance to populate.
     * @return {module:model/BulkOperationResult} The populated <code>BulkOperationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkOperationResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The operation ID.
 * @member {String} id
 */
BulkOperationResult.prototype['id'] = undefined;

/**
 * HTTP status code for this operation.
 * @member {Number} status_code
 */
BulkOperationResult.prototype['status_code'] = undefined;

/**
 * Error reason if the operation failed.
 * @member {String} reason
 */
BulkOperationResult.prototype['reason'] = undefined;






export default BulkOperationResult;

