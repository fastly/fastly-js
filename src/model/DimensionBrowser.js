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
 * The DimensionBrowser model module.
 * @module model/DimensionBrowser
 * @version 9.0.0
 */
class DimensionBrowser {
    /**
     * Constructs a new <code>DimensionBrowser</code>.
     * @alias module:model/DimensionBrowser
     */
    constructor() { 
        
        DimensionBrowser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DimensionBrowser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DimensionBrowser} obj Optional instance to populate.
     * @return {module:model/DimensionBrowser} The populated <code>DimensionBrowser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DimensionBrowser();

            if (data.hasOwnProperty('browser')) {
                obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The client's browser for this dimension.
 * @member {String} browser
 */
DimensionBrowser.prototype['browser'] = undefined;






export default DimensionBrowser;

