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
 * The OperationBulkCreateOperations model module.
 * @module model/OperationBulkCreateOperations
 * @version 15.1.0
 */
class OperationBulkCreateOperations {
    /**
     * Constructs a new <code>OperationBulkCreateOperations</code>.
     * @alias module:model/OperationBulkCreateOperations
     * @param method {module:model/OperationBulkCreateOperations.MethodEnum} The HTTP method for the operation.
     * @param domain {String} The domain for the operation.
     * @param path {String} The path for the operation.
     */
    constructor(method, domain, path) { 
        
        OperationBulkCreateOperations.initialize(this, method, domain, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, method, domain, path) { 
        obj['method'] = method;
        obj['domain'] = domain;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>OperationBulkCreateOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationBulkCreateOperations} obj Optional instance to populate.
     * @return {module:model/OperationBulkCreateOperations} The populated <code>OperationBulkCreateOperations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationBulkCreateOperations();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tag_ids')) {
                obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The HTTP method for the operation.
 * @member {module:model/OperationBulkCreateOperations.MethodEnum} method
 */
OperationBulkCreateOperations.prototype['method'] = undefined;

/**
 * The domain for the operation.
 * @member {String} domain
 */
OperationBulkCreateOperations.prototype['domain'] = undefined;

/**
 * The path for the operation.
 * @member {String} path
 */
OperationBulkCreateOperations.prototype['path'] = undefined;

/**
 * A description of what the operation does.
 * @member {String} description
 */
OperationBulkCreateOperations.prototype['description'] = undefined;

/**
 * An array of tag IDs to associate with this operation.
 * @member {Array.<String>} tag_ids
 */
OperationBulkCreateOperations.prototype['tag_ids'] = undefined;

/**
 * The status to assign to the operation. Defaults to SAVED if omitted.
 * @member {module:model/OperationBulkCreateOperations.StatusEnum} status
 * @default 'SAVED'
 */
OperationBulkCreateOperations.prototype['status'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
OperationBulkCreateOperations['MethodEnum'] = {

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH",

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "HEAD"
     * @const
     */
    "HEAD": "HEAD",

    /**
     * value: "OPTIONS"
     * @const
     */
    "OPTIONS": "OPTIONS",

    /**
     * value: "CONNECT"
     * @const
     */
    "CONNECT": "CONNECT",

    /**
     * value: "TRACE"
     * @const
     */
    "TRACE": "TRACE"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
OperationBulkCreateOperations['StatusEnum'] = {

    /**
     * value: "SAVED"
     * @const
     */
    "SAVED": "SAVED",

    /**
     * value: "IGNORED"
     * @const
     */
    "IGNORED": "IGNORED"
};



export default OperationBulkCreateOperations;

