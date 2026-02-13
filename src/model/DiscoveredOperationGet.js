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
import DiscoveredOperationBase from './DiscoveredOperationBase';
import DiscoveredOperationGetExtra from './DiscoveredOperationGetExtra';

/**
 * The DiscoveredOperationGet model module.
 * @module model/DiscoveredOperationGet
 * @version 15.0.0-beta.1
 */
class DiscoveredOperationGet {
    /**
     * Constructs a new <code>DiscoveredOperationGet</code>.
     * @alias module:model/DiscoveredOperationGet
     * @implements module:model/DiscoveredOperationBase
     * @implements module:model/DiscoveredOperationGetExtra
     * @param method {module:model/DiscoveredOperationGet.MethodEnum} The HTTP method for the operation.
     * @param domain {String} The domain for the operation.
     * @param path {String} The path for the operation, which may include path parameters.
     */
    constructor(method, domain, path) { 
        DiscoveredOperationBase.initialize(this);DiscoveredOperationGetExtra.initialize(this);
        DiscoveredOperationGet.initialize(this, method, domain, path);
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
     * Constructs a <code>DiscoveredOperationGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscoveredOperationGet} obj Optional instance to populate.
     * @return {module:model/DiscoveredOperationGet} The populated <code>DiscoveredOperationGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscoveredOperationGet();
            DiscoveredOperationBase.constructFromObject(data, obj);
            DiscoveredOperationGetExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
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
 * @member {module:model/DiscoveredOperationGet.MethodEnum} method
 */
DiscoveredOperationGet.prototype['method'] = undefined;

/**
 * The domain for the operation.
 * @member {String} domain
 */
DiscoveredOperationGet.prototype['domain'] = undefined;

/**
 * The path for the operation, which may include path parameters.
 * @member {String} path
 */
DiscoveredOperationGet.prototype['path'] = undefined;

/**
 * The current status of the operation.
 * @member {module:model/DiscoveredOperationGet.StatusEnum} status
 */
DiscoveredOperationGet.prototype['status'] = undefined;

/**
 * The timestamp when the operation was last updated.
 * @member {Date} updated_at
 */
DiscoveredOperationGet.prototype['updated_at'] = undefined;

/**
 * The timestamp when the operation was last seen in traffic.
 * @member {Date} last_seen_at
 */
DiscoveredOperationGet.prototype['last_seen_at'] = undefined;


// Implement DiscoveredOperationBase interface:
/**
 * The HTTP method for the operation.
 * @member {module:model/DiscoveredOperationBase.MethodEnum} method
 */
DiscoveredOperationBase.prototype['method'] = undefined;
/**
 * The domain for the operation.
 * @member {String} domain
 */
DiscoveredOperationBase.prototype['domain'] = undefined;
/**
 * The path for the operation, which may include path parameters.
 * @member {String} path
 */
DiscoveredOperationBase.prototype['path'] = undefined;
// Implement DiscoveredOperationGetExtra interface:
/**
 * The current status of the operation.
 * @member {module:model/DiscoveredOperationGetExtra.StatusEnum} status
 */
DiscoveredOperationGetExtra.prototype['status'] = undefined;
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
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
DiscoveredOperationGet['MethodEnum'] = {

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
DiscoveredOperationGet['StatusEnum'] = {

    /**
     * value: "DISCOVERED"
     * @const
     */
    "DISCOVERED": "DISCOVERED",

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



export default DiscoveredOperationGet;

