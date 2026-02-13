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
import OperationBase from './OperationBase';
import OperationGetExtra from './OperationGetExtra';

/**
 * The OperationGet model module.
 * @module model/OperationGet
 * @version 15.0.0-beta.4
 */
class OperationGet {
    /**
     * Constructs a new <code>OperationGet</code>.
     * @alias module:model/OperationGet
     * @implements module:model/OperationBase
     * @implements module:model/OperationGetExtra
     * @param method {module:model/OperationGet.MethodEnum} The HTTP method for the operation.
     * @param domain {String} The domain for the operation.
     * @param path {String} The path for the operation, which may include path parameters.
     * @param id {String} The unique identifier of the operation.
     * @param updated_at {Date} The timestamp when the operation was last updated.
     */
    constructor(method, domain, path, id, updated_at) { 
        OperationBase.initialize(this);OperationGetExtra.initialize(this, id, updated_at);
        OperationGet.initialize(this, method, domain, path, id, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, method, domain, path, id, updated_at) { 
        obj['method'] = method;
        obj['domain'] = domain;
        obj['path'] = path;
        obj['id'] = id;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>OperationGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationGet} obj Optional instance to populate.
     * @return {module:model/OperationGet} The populated <code>OperationGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationGet();
            OperationBase.constructFromObject(data, obj);
            OperationGetExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tag_ids')) {
                obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['String']);
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
 * The HTTP method for the operation.
 * @member {module:model/OperationGet.MethodEnum} method
 */
OperationGet.prototype['method'] = undefined;

/**
 * The domain for the operation.
 * @member {String} domain
 */
OperationGet.prototype['domain'] = undefined;

/**
 * The path for the operation, which may include path parameters.
 * @member {String} path
 */
OperationGet.prototype['path'] = undefined;

/**
 * The unique identifier of the operation.
 * @member {String} id
 */
OperationGet.prototype['id'] = undefined;

/**
 * The timestamp when the operation was last updated.
 * @member {Date} updated_at
 */
OperationGet.prototype['updated_at'] = undefined;

/**
 * A description of what the operation does.
 * @member {String} description
 */
OperationGet.prototype['description'] = undefined;

/**
 * An array of operation tag IDs associated with this operation.
 * @member {Array.<String>} tag_ids
 */
OperationGet.prototype['tag_ids'] = undefined;

/**
 * The timestamp when the operation was created.
 * @member {Date} created_at
 */
OperationGet.prototype['created_at'] = undefined;

/**
 * The timestamp when the operation was last seen in traffic.
 * @member {Date} last_seen_at
 */
OperationGet.prototype['last_seen_at'] = undefined;


// Implement OperationBase interface:
/**
 * The HTTP method for the operation.
 * @member {module:model/OperationBase.MethodEnum} method
 */
OperationBase.prototype['method'] = undefined;
/**
 * The domain for the operation.
 * @member {String} domain
 */
OperationBase.prototype['domain'] = undefined;
/**
 * The path for the operation, which may include path parameters.
 * @member {String} path
 */
OperationBase.prototype['path'] = undefined;
/**
 * A description of what the operation does.
 * @member {String} description
 */
OperationBase.prototype['description'] = undefined;
/**
 * An array of operation tag IDs associated with this operation.
 * @member {Array.<String>} tag_ids
 */
OperationBase.prototype['tag_ids'] = undefined;
// Implement OperationGetExtra interface:
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



/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
OperationGet['MethodEnum'] = {

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



export default OperationGet;

