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
 * The OperationBulkDelete model module.
 * @module model/OperationBulkDelete
 * @version 15.1.0-rc.0
 */
class OperationBulkDelete {
    /**
     * Constructs a new <code>OperationBulkDelete</code>.
     * @alias module:model/OperationBulkDelete
     * @param operation_ids {Array.<String>} List of operation IDs to delete.
     */
    constructor(operation_ids) { 
        
        OperationBulkDelete.initialize(this, operation_ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operation_ids) { 
        obj['operation_ids'] = operation_ids;
    }

    /**
     * Constructs a <code>OperationBulkDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationBulkDelete} obj Optional instance to populate.
     * @return {module:model/OperationBulkDelete} The populated <code>OperationBulkDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationBulkDelete();

            if (data.hasOwnProperty('operation_ids')) {
                obj['operation_ids'] = ApiClient.convertToType(data['operation_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of operation IDs to delete.
 * @member {Array.<String>} operation_ids
 */
OperationBulkDelete.prototype['operation_ids'] = undefined;






export default OperationBulkDelete;

