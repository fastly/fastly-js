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
 * The ArcError model module.
 * @module model/ArcError
 * @version 17.0.0
 */
class ArcError {
    /**
     * Constructs a new <code>ArcError</code>.
     * An error response. 
     * @alias module:model/ArcError
     */
    constructor() { 
        
        ArcError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcError} obj Optional instance to populate.
     * @return {module:model/ArcError} The populated <code>ArcError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcError();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A URL identifying the error type.
 * @member {String} type
 */
ArcError.prototype['type'] = undefined;

/**
 * A short summary of the problem.
 * @member {String} title
 */
ArcError.prototype['title'] = undefined;

/**
 * A machine-readable error code.
 * @member {String} code
 */
ArcError.prototype['code'] = undefined;






export default ArcError;

