/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The DiffResponse model module.
 * @module model/DiffResponse
 * @version 5.0.0
 */
class DiffResponse {
    /**
     * Constructs a new <code>DiffResponse</code>.
     * @alias module:model/DiffResponse
     */
    constructor() { 
        
        DiffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiffResponse} obj Optional instance to populate.
     * @return {module:model/DiffResponse} The populated <code>DiffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiffResponse();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('diff')) {
                obj['diff'] = ApiClient.convertToType(data['diff'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The version number being diffed from.
 * @member {Number} from
 */
DiffResponse.prototype['from'] = undefined;

/**
 * The version number being diffed to.
 * @member {Number} to
 */
DiffResponse.prototype['to'] = undefined;

/**
 * The format the diff is being returned in (`text`, `html` or `html_simple`).
 * @member {String} format
 */
DiffResponse.prototype['format'] = undefined;

/**
 * The differences between two specified service versions. Returns the full config if the version configurations are identical.
 * @member {String} diff
 */
DiffResponse.prototype['diff'] = undefined;






export default DiffResponse;

