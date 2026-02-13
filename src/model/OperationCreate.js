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

/**
 * The OperationCreate model module.
 * @module model/OperationCreate
 * @version 15.0.0-beta.1
 */
class OperationCreate {
    /**
     * Constructs a new <code>OperationCreate</code>.
     * @alias module:model/OperationCreate
     * @implements module:model/OperationBase
     */
    constructor() { 
        OperationBase.initialize(this);
        OperationCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationCreate} obj Optional instance to populate.
     * @return {module:model/OperationCreate} The populated <code>OperationCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationCreate();
            OperationBase.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

/**
 * The HTTP method for the operation.
 * @member {module:model/OperationCreate.MethodEnum} method
 */
OperationCreate.prototype['method'] = undefined;

/**
 * The domain for the operation.
 * @member {String} domain
 */
OperationCreate.prototype['domain'] = undefined;

/**
 * The path for the operation, which may include path parameters.
 * @member {String} path
 */
OperationCreate.prototype['path'] = undefined;

/**
 * A description of what the operation does.
 * @member {String} description
 */
OperationCreate.prototype['description'] = undefined;

/**
 * An array of operation tag IDs associated with this operation.
 * @member {Array.<String>} tag_ids
 */
OperationCreate.prototype['tag_ids'] = undefined;


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



/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
OperationCreate['MethodEnum'] = {

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



export default OperationCreate;

