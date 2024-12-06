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
 * The ValuesBrowser model module.
 * @module model/ValuesBrowser
 * @version 8.0.0
 */
class ValuesBrowser {
    /**
     * Constructs a new <code>ValuesBrowser</code>.
     * @alias module:model/ValuesBrowser
     */
    constructor() { 
        
        ValuesBrowser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesBrowser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesBrowser} obj Optional instance to populate.
     * @return {module:model/ValuesBrowser} The populated <code>ValuesBrowser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesBrowser();

            if (data.hasOwnProperty('browser_version')) {
                obj['browser_version'] = ApiClient.convertToType(data['browser_version'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The version of the client's browser.
 * @member {String} browser_version
 */
ValuesBrowser.prototype['browser_version'] = undefined;

/**
 * The percentage of requests by this version of the browser specified in the dimension.
 * @member {Number} rate
 */
ValuesBrowser.prototype['rate'] = undefined;






export default ValuesBrowser;

